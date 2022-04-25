import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuItem from '../MenuItem'
import '../../Styles/sidemenu.css'
import DefaultProfil from '../../assets/profile.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { connection, deconnection } from '../../reducer/UserSlice'
import { Config } from '../../config/Config'

/**
 *@author
 *@function SideMenu content MenuItem
 **/
const Sidemenu = () => {
   const [inactive, setInactive] = useState(true)
   const [statut, setStatut] = useState()
   const MenuItemsEmployer = [
      {
         name: 'Acceuil',
         to: '/maison',
         iconClassName: 'bx bx-home-alt-2',
         toolTipName: 'Acceuil',
      },
      {
         name: 'Mes taches',
         to: '#',
         iconClassName: 'bx bx-task',
         toolTipName: 'Mes taches',
         subMenu: [
            { name: 'Ajouter', to: '/tache/ajouter' },
            { name: 'Liste', to: '/tache/liste' },
         ],
      },
      {
         name: 'Mon compte',
         to: '/moncompte',
         iconClassName: 'bx bx-user',
         toolTipName: 'Mon compte',
      },
   ]
   const MenuItemsEtudiant = [
      {
         name: 'Acceuil',
         to: '/maison',
         iconClassName: ' bx bx-home-alt-2',
         toolTipName: 'Acceuil',
      },
      {
         name: 'Mes Missions',
         to: '#',
         iconClassName: 'bx bx-task',
         toolTipName: 'Mes taches',
         subMenu: [
            { name: 'Missions', to: '/mission/liste' },
            { name: 'Effectué', to: '#' },
            { name: 'En cours', to: '#' },
         ],
      },
      {
         name: 'Mon compte',
         to: '/moncompte',
         iconClassName: 'bx bx-user',
         toolTipName: 'Mon compte',
      },
   ]
   // const user = localStorage.getItem('user')
   const user = JSON.parse(localStorage.getItem('user'))
   const Navigate = useNavigate()
   const logOut = () => {
      localStorage.removeItem('user')
      dispatch(
         deconnection({
            nom: '',
            prenom: '',
            statut: '',
         })
      )
      Navigate('/')
   }
   const dispatch = useDispatch()
   const userInfo = useSelector((state) => state.user)

   useEffect(() => {
      if (user) {
         // En-tête d'autorisation
         const config = {
            headers: {
               Authorization: 'Bearer ' + user['token'],
               id: user['userId'],
            },
         }
         // Vérifier si le token est valide
         axios
            .get(`${Config}/api/profile/${user['userId']}`, config)
            .then((res) => {
               let statut = res.data.statut[0]
               dispatch(
                  connection({
                     nom: res.data.nom,
                     prenom: res.data.prenom,
                     statut: res.data.statut[0],
                  })
               )
               setStatut(statut)
            })
            .catch((err) => {
               // Redirect to login page
               Navigate('/')
            })
      } else {
         Navigate('/')
      }
   }, [])

   return (
      <>
         <div className={`sidemenu shadow ${inactive ? 'inactive' : ''} `}>
            <div className="top-section">
               <div className="logo">
                  <div className="logo-name">Easyjob</div>
               </div>
               <div
                  className="toggle-menu-btn"
                  onClick={() => setInactive(!inactive)}
               >
                  {inactive ? (
                     <i className="bx bx-menu" id="btn"></i>
                  ) : (
                     <i className="bx bx-menu" id="btn"></i>
                  )}
               </div>
            </div>
            {/* <div className="search">
               <i className="bx bx-search"></i>
               <input type="text" placeholder="Search..." />
            </div> */}
            <div className="main-menu">
               <ul>
                  {statut === 'etudiant'
                     ? MenuItemsEtudiant.map((menuItem, index) => (
                          <MenuItem
                             key={index}
                             name={menuItem.name}
                             to={menuItem.to}
                             iconClassName={menuItem.iconClassName}
                             toolTipName={menuItem.toolTipName}
                             subMenu={menuItem.subMenu || []}
                             onClick={() => {
                                if (inactive) {
                                   setInactive(false)
                                }
                             }}
                          />
                       ))
                     : MenuItemsEmployer.map((menuItem, index) => (
                          <MenuItem
                             key={index}
                             name={menuItem.name}
                             to={menuItem.to}
                             iconClassName={menuItem.iconClassName}
                             toolTipName={menuItem.toolTipName}
                             subMenu={menuItem.subMenu || []}
                             onClick={() => {
                                if (inactive) {
                                   setInactive(false)
                                }
                             }}
                             onClickIcon={() => {
                                if (inactive) {
                                   setInactive(false)
                                }
                             }}
                          />
                       ))}
               </ul>
            </div>
            <div className="profile-content pb-5">
               <div className="profile">
                  <div className="profile-detail">
                     <img src={DefaultProfil} alt=" imageprofil par defaut" />
                     <div className="name-job">
                        <div className="name">{`${userInfo.nom}  ${userInfo.prenom}`}</div>
                        {/* <div className="name">Nsangou Borel</div> */}
                        {/* <div className="job">FullStack JS developper</div> */}
                        <div className="job">{userInfo.statut}</div>
                     </div>
                  </div>
                  <i
                     className="bx bx-log-out"
                     id="log-out"
                     onClick={logOut}
                     title="Deconnexion"
                  ></i>
               </div>
            </div>
         </div>
      </>
   )
}

export default Sidemenu

import React, { useState, useEffect} from "react"; //react importation
import MenuItem from "../MenuItem/index"; //importation of MenuItem component
import "../../Styles/sidemenu.css"; //style sidemenu 
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Config } from "../../config/Config"


/**
*@author 
*@function SideMenu content MenuItem 
**/
const Sidemenu = () => {
    const [inactive,setInactive] = useState(false)
    const [type, settype] = useState('administrateur')
    const [user, setuser] = useState({})
    const MenuItems = [
        { name: "Accueil", to: "/dashboard", iconClassName: "bx bx-home-alt-2", toolTipName: "Accueil" },
        {
            name: "Utilisateurs",
            to: "#",
            iconClassName: "bx bx-user",
            toolTipName: "Utilisateurs",
            subMenu : [
                {name: "Employés", to: "#"},
                {name: "Intendants", to: "#"},

            ]
        },
        { name: "Mon compte", to: "#", iconClassName: "bx bx-user", toolTipName: "Compte"}
    ] 
    
    const Navigate = useNavigate;
    const Click = () => {
        localStorage.removeItem('user')
        Navigate("/")
    }
    const userlocal = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        if (userlocal) {
           // En-tête d'autorisation
           const config = {
              headers: {
                 Authorization: 'Bearer ' + userlocal['token'],
                 id: userlocal['userId'],
              },
           }
           // Vérifier si le token est valide
           axios
              .get(`${Config}/api/profile/${userlocal['userId']}`, config)
              .then((res) => {
                 settype(res.data.type)
                 setuser(res.data)
                 console.log(user)
              })
              .catch((err) => {
                 // Redirect to login page
                 Navigate('/')
              })
        } else {
           Navigate('/')
        }
     }, [user, Navigate, userlocal])
    return (
        <>
            <div className={ `sidemenu ${inactive ? "inactive" : ""} `}>
                <div class="top-section">
                    <div class="logo">   
                        <div class="logo-name">FlyZejet</div>
                    </div>
                    <div className="toggle-menu-btn" onClick={ () => setInactive(!inactive) } >
                        {inactive ? <i class='bx bx-menu' id="btn" ></i> : <i class='fa fa-close'></i> }
                    </div>
                </div>
                <div className="search">
                    <i class='bx bx-search' ></i>
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="main-menu">
                <ul>
                    {
                        type === 'administrateur'
                        ?
                        MenuItems.map((menuItem, index) => (
                            <MenuItem
                                key={index}
                                name={menuItem.name}
                                to={menuItem.to}
                                iconClassName={menuItem.iconClassName}
                                toolTipName={menuItem.toolTipName}
                                subMenu= {menuItem.subMenu || []}
                                onClick={() => {
                                    if(inactive) { setInactive(false)}
                                }}
                            />
                        ))
                        :null
                    }
                </ul>
                </div>
                <div class="profile-content">
                    <div class="profile">
                        <div class="profile-detail">
                            <img src="" alt=""/>
                            <div class="name-job">
                                <div class="name">{`${user.nom}  ${user.prenom}`}</div>
                                <div class="job">{type}</div>
                            </div>
                        </div>
                        <i class='bx bx-log-out' id="log-out" onClick={Click}></i>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidemenu

import Input from '../Input/Input'
import InputButton from '../InputButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'
import { useState, } from 'react'
import {Config} from '../../config/Config'
import logo from '../../assets/logo-flyzejet.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Connexion() {
    const Navigate = useNavigate()
     const [errormessage, seterrormessage] = useState('')
     const [showError, setShowError] = useState(false)
     const [data, setData] = useState({
     })
   const  handleChange = (e) => {
      let name = e.target.name,
      value = e.target.value.trim()

      data[name] = value
      setData(data)
      console.log(data)

   }
  
     const handleSubmit = (e) => {
      e.preventDefault()
      console.log(Config)
      axios
         .post(`${Config}/api/auth/login/`, data)
         .then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data))
            console.log(res.data)
            Navigate('/adduser')
            
         })
         .catch((error) => {
            
               seterrormessage(error.response.data)
               setShowError(true)
            
         })
     }
  
     const handleErrorShow = (e) => {
        setShowError(false)
     }
  return (
      <div className="col connexion">
         <div className="container">
            <div className="row logo-content">
               <div className="logo">
                     <img src={logo} alt="logo-flyzejet" className='logo-name img-responsive' />
               </div>
            </div>
            <div className="row">
               <h1 className="title">
                  De retour parmi nous <br /> Connecter vous et
                  continuer
               </h1>
            </div>

            <div className="row">
               <form
                  className="form mt-4"
                  onSubmit={handleSubmit}
               >
                  <div className="row form-group row-cols-md-1">
                     <div className="col">
                        {showError === true ? (
                           <Alert
                              variant="danger"
                              onClose={handleErrorShow}
                              dismissible
                              className="border-0"
                           >
                              <p>{errormessage}</p>
                           </Alert>
                        ) : null}

                        <Input
                           label="Email"
                           id="email"
                           className="form-control"
                           name="email"
                           placeholder="Entrer votre email"
                           type="email"
                           onChange={handleChange}
                        />
                        <Input
                           label="Mot de passe"
                           id="password"
                           className="form-control"
                           name="password"
                           placeholder="Entrer votre password"
                           type="password"
                           onChange={handleChange}
                        />
                        <div className="mt-4">
                           <InputButton value="connexion" />
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
               
  )
}

export default Connexion
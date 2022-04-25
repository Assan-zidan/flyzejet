import Input from '../Input/Input'
import InputButton from '../InputButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'
import { useState, } from 'react'
import {Config} from '../../config/Config'
import "../../Styles/inscription.css"
import logo from '../../assets/logo-flyzejet.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Inscription() {
    const Navigate = useNavigate()
    const [errormessage, seterrormessage] = useState('')
    const [showError, setShowError] = useState(false)
    const [data, setData] = useState({
       nom: 'super',
       prenom: 'admin',
       type: 'administrateur',
    })
    const [passwordVerif, setpasswordVerif] = useState()

    const setErrorfor = (element, message) => {
        // add error message inside small
        const small = element.nextElementSibling;
        small.innerHTML = message;
        // add class error class
        element.parentElement.className = "groupInput error";
    }
    const setSuccessfor = (element) => {
        const small = element.nextElementSibling;
        small.innerHTML = "";
        element.parentElement.className = 'groupInput success'
    }
    const isPassword = (password) => {
        const regExpPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
        return regExpPassword.test(password);
    }
    const isEmail = (email) => {
        const regExpEmail= /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regExpEmail.test(email);
    }

  const  handleChange = (e) => {
     let name = e.target.name,
     element = e.target,
     value = e.target.value.trim()
    if (name === 'email') {
        if (value === "") {
            // show error
            // add error class
            setErrorfor(element, 'ce champs ne doit pas etre vide');
        } else if (!isEmail(value)) {
            // show error
            // add error class
            setErrorfor(element, 'email invalide')
            
        } else {
            // show success
            // add success class
            setSuccessfor(element);
            data[name] = value
            setData(data)
            console.log(data)

        }
    } else if (name === 'password') {
        if (value === "") {
            // show error
            // add error class
            setErrorfor(element, 'ce champs ne doit pas etre vide');
        } else if (!isPassword(value)) {
            // show error
            // add error class
            setErrorfor(element, 'le mot de passe doit contenir au moins une majuscule, une miniscule, un chiffre, ou un caractere speciale #, ?, !, @, $, %, ^, &, *, -, :, ;, <, >...')
            
        } else {
            // show success
            // add success class
            setSuccessfor(element);
            data[name] = value;
            setpasswordVerif(value)
            setData(data)
            console.log(data)

        }
    } else if (name === 'passwordVerif') {
        if (value === "") {
            // show error
            // add error class
            setErrorfor(element, 'ce champs ne doit pas etre vide')
        } else if (value === passwordVerif) {
            // show success
            // add success class
            setSuccessfor(element);
            data[name] = value;
            setData(data)
            console.log(data)
            
            
        } else {
            // show error
            // add error class
            setErrorfor(element, 'le mot de passe ne correspond pas')
            
        }
    }else{
        data[name] = value
        setData(data)
        console.log(data)
    }
    

  }
 
    const handleSubmit = (e) => {
     e.preventDefault()
     console.log(Config)
     axios
        .post(`${Config}/api/auth/signup/`, data)
        .then((res) => {
           localStorage.setItem('user', JSON.stringify(res.data))
           console.log(res.data)
           Navigate('/')
           
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
                 Bienvenue <br /> Creer un compte maintenant
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
                       <Input
                          label="Verification de mot de passe"
                          id="password"
                          className="form-control"
                          name="passwordVerif"
                          placeholder="Entrer le meme password"
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

export default Inscription
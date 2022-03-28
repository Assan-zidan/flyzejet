import React from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import InputSelect from "../../components/Input/InputSelect";
// import Button from "../../components/Button/Index";
import Footer from "../../components/Footer/Index";
import "../../Styles/inscription.css";
import InputButton from "../../components/Input/InputButton";

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {
                
            },
            src: "https://res.cloudinary.com/dmqw4yo0b/image/upload/v1647522784/istockphoto-1156778226-612x612_bw8rh7.jpg",
            passwordVerif: "",
            redirect: false,
            valueOption: [{name:"Residence1", value:"residence1"},
            {name:"residence2", value:"residence2"},
            {name:"Residence3", value:"Residence3"}]
        }
    }
    setErrorfor = (element, message) => {
        // add error message inside small
        const small = element.nextElementSibling;
        small.innerHTML = message;
        // add class error class
        element.parentElement.className = "groupInput error";
    }
    setSuccessfor = (element) => {
        const small = element.nextElementSibling;
        small.innerHTML = "";
        element.parentElement.className = 'groupInput success'
    }
    isPassword = (password) => {
        const regExpPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
        return regExpPassword.test(password);
    }
    isEmail = (email) => {
        const regExpEmail= /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regExpEmail.test(email);
    }
    handleChange = (e) => {
        let name = e.target.name,
            element = e.target,
            value = e.target.value.trim(),
            data = this.state.data;

            
            // this.setErrorfor(element, 'ce champs ne doit pas etre vide');
            // 
        
        if (name === "nom" || name === "prenom") {
            if (value === "" ) {
                // show error
                // add error class
                this.setErrorfor(element, 'ce champs ne doit pas etre vide');
            }
            else if (name && value.length < 2) {
                // show error
                // add error class
                this.setErrorfor(element, 'le nombre de caractere doit etre superieur à 2')
            }
            else {
                // show success
                // add success class
                this.setSuccessfor(element);
                data[name] = value;
                this.setState({
                    data: data
                })
                console.log(data)
            }
        }
        else if (name === "password") {
            if (value === "") {
                // show error
                // add error class
                this.setErrorfor(element, 'ce champs ne doit pas etre vide');
            } else if (!this.isPassword(value)) {
                // show error
                // add error class
                this.setErrorfor(element, 'le mot de passe doit contenir au moins une majuscule, une miniscule, un chiffre, ou un caractere speciale #, ?, !, @, $, %, ^, &, *, -, :, ;, <, >...')
                
            } else {
                // show success
                // add success class
                this.setSuccessfor(element);
                data[name] = value;
                this.setState({
                    data: data,
                    passwordVerif: value
                })
                console.log(data)

            }
                
        } 
        else if (name === "email") {
            if (value === "") {
                // show error
                // add error class
                this.setErrorfor(element, 'ce champs ne doit pas etre vide');
            } else if (!this.isEmail(value)) {
                // show error
                // add error class
                this.setErrorfor(element, 'email invalide')
                
            } else {
                // show success
                // add success class
                this.setSuccessfor(element);
                data[name] = value;
                this.setState({
                    data: data
                })
                console.log(data)
    
            }
        } 
        else if (name === 'passwordVerif') {
            if (value === "") {
                // show error
                // add error class
                this.setErrorfor(element, 'ce champs ne doit pas etre vide');
            } else if (value === this.state.passwordVerif) {
                // show success
                // add success class
                this.setSuccessfor(element);
                data[name] = value;
                this.setState({
                    data: data
                })
                console.log(data)
                
                
            } else {
                // show error
                // add error class
                this.setErrorfor(element, 'le mot de passe ne correspond pas')
                
            }
        }
        else { 
            data[name] = value;
        data['type'] = "employer"
        this.setState({
            data: data,
        });
        console.log(data)
        }
    }  
    handleSubmit = (e) => {
      e.preventDefault();
      alert('bonjour');
      axios.post(`http://localhost:4200/api/auth/signup/`, this.state.data)
      .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(res);
          this.setState({
              redirect: true
          })
          const reponse = res.data;
          console.log(reponse);
      }).catch(erreur =>{
          console.log('je suis la');
          alert('je suis la');
      });
    }  
    render(){
        const redirect = this.state.redirect;
        if (redirect === true) {
            return <Navigate to={"/connexion"}/>
        }
        return(
            <>
            <div className="container-fluid inscription-content">
                <div className="row row-cols-md-2">
                    <div className="col">
                        <div className="container inscription">
                            <div className="row logo-content">
                                <div class="logo">
                                    <i class='bx bxl-c-plus-plus'></i>
                                    <div class="logo-name">Flyzejet</div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <h1 className="title">Bienvenue<br/>Creer votre compte maintenant<br/>pour une nouvelle experience</h1>
                            </div>
                            <div className="row">
                                <form className="form" onSubmit={this.handleSubmit}>
                                    
                                    <div className="row row-cols-md-1 form-group  mt-3">
                                        <div className="col">
                                          <InputSelect 
                                          label="Residence"
                                          id="residence"
                                          name="residence"
                                          valueOption={this.state.valueOption || []}
                                          onChange={this.handleChange}
                                          className="inputSelect"
                                          defaulOption="Selectionner votre residence"
                                          />    
                                        </div>
                                    </div>
                                    <div className="row row-cols-md-2 form-group  mt-3">
                                        <div className="col">
                                            <Input
                                                label="Nom"
                                                id="nom"
                                                className="form-control input"
                                                name="nom"
                                                placeholder="Entrer votre nom"
                                                type="text"
                                                onChange={this.handleChange}
                                            
                                            />   
                                        </div>
                                        <div className="col">
                                            <Input
                                                label="Prenom"
                                                id="prenom"
                                                className="form-control input"
                                                name="prenom"
                                                placeholder="Entrer votre prenom"
                                                type="text"
                                                onChange={this.handleChange}
                                            
                                            />    
                                        </div>
                                    </div>
                                    <div className="row form-grouprow-cols-md-1 mt-3">
                                        <div className="col">
                                            <Input
                                                label="Email"
                                                id="email"
                                                className="form-control input"
                                                name="email"
                                                placeholder="Entrer votre email"
                                                type="email"
                                                onChange={this.handleChange}
                                            
                                            />
                                                
                                         </div>
                                    </div>
                                    <div className="row row-cols-md-2 form-group mt-3 ">
                                        <div className="col">
                                            <Input
                                                label="Mot de passe"
                                                id="password"
                                                className="form-control input"
                                                name="password"
                                                placeholder="Entrer votre password"
                                                type="password"
                                                onChange={this.handleChange}
                                            
                                            />
                                        </div>
                                        <div className="col">
                                            <Input
                                                label="Verification de mot de passe"
                                                id="passwordVerif"
                                                className="form-control input"
                                                name="passwordVerif"
                                                placeholder="Entrer le meme password"
                                                type="password"
                                                onChange={this.handleChange}
                                            
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div class="col">
                                            <div class="form-check">
                                                <input class="form-check-input " type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
                                                <label class="form-check-label" for="invalidCheck3">
                                                    Agree to terms and conditions
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        {/* <Button
                                            value="S'inscrire"
                                            type="submit"
                                        /> */}
                                        <InputButton value="S'inscrireee"/>
                                    </div>
                                </form>
                                <div className="row justify-content-center my-4">
                                        <p className="form-create-account">Vous avez déjà un compte ? 
                                        <span><Link to="/connexion">Connectez vous maintenant</Link></span></p>
                            
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col banner-content ">
                        <img src={this.state.src} alt="employer"/>
                    </div>
                </div>
                <Footer/>
                
            </div>
            </>
        )
    }
}

export default Index
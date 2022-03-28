import axios from "axios";
import React from "react";
import { Navigate, Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Index";
import "../../Styles/connexion.css";
import InputButton from "../../components/Input/InputButton";

class Connexion extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {
                
            },
            email: "",
            redirect: false
        }
    }
    handleChange = (e) => {
        let name = e.target.name,
            value = e.target.value.trim(),
            data = this.state.data;
        
            data[name]= value;
            this.setState({
                data: data
            });
            console.log(data);
        
    }  
    handleSubmit = (e) => {
        e.preventDefault();
        alert("c'est bon");
        e.preventDefault();
        axios.post(`http://localhost:4200/api/auth/login/`,this.state.data)
        .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log(res.data);
            // this.setState({
            //     redirect: true
            // })
            const reponse = res.data;
            console.log(reponse);
        }).catch(erreur =>{
            console.log('je suis la 1');
            alert('je suis la 1');
        });
    }  
    render(){
        const redirect = this.state.redirect;
        if (redirect === true) {
            return <Navigate to={"/dashboard"}/>
        }
        return(
            <>
            <div className="container-fluid connexion-content">
                <div className="row row-cols-md-2">
                    <div className="col">
                        <div className="container connexion">
                            <div className="row logo-content">
                                <div class="logo">
                                    <i class='bx bxl-c-plus-plus'></i>
                                    <div class="logo-name">Easejob</div>
                                </div>
                            </div>
                            <div className="row">
                                <h1 className="title">De retour parmi nous <br/> Connecter vous et continuer </h1>
                            </div>
                            <div className="row">
                                <form className="form mt-4" onSubmit={this.handleSubmit}>
                                    
                                    <div className="row form-group row-cols-md-1">
                                        <div className="col">
                                            <div className=" text-center error">
                                                <small>hghghghghghghghghghghghgh</small>
                                            </div>
                                            <Input
                                                label="Email"
                                                id="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Entrer votre email"
                                                type="email"
                                                onChange={this.handleChange}
                                            
                                            />
                                            <Input
                                                label="Mot de passe"
                                                id="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="Entrer votre password"
                                                type="password"
                                                onChange={this.handleChange}
                                            
                                            />
                                            <div className="mt-4">
                                                <InputButton
                                                    value="connexion"
                                                />
                                            </div>
                                            <div className="row justify-content-center my-5">
                                                <p className="form-create-account">Vous n'avez pas encore un compte ? 
                                                <span><Link to="/">Creer le votre maintenant</Link></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col banner-content ">
                        <img src="https://res.cloudinary.com/dmqw4yo0b/image/upload/v1647522784/istockphoto-862596588-612x612_r6hniy.jpg" alt=""/>
                    </div>
                </div>
                <Footer/>
                
            </div>
            
            
            </>
        )
    }
}

export default Connexion
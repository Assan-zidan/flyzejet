import React, { useState } from "react";
import Sidemenu from "../../components/Sidemenu/index";
import Input from "../../components/Input/Input";
import InputSelect from "../../components/Input/InputSelect";
// import TextArea from "../../components/Input/TextArea";
import Button from "../../components/Button/Index";
const Dashboard = () => {
    const valueOption = [{name:"Residence1", value:"residence1"},
    {name:"residence2", value:"residence2"},
    {name:"Residence3", value:"Residence3"}];
    const [datas,setDatas] = useState({
            images: [],
            url: [],
            data: {},
            passwordVerif: "",


    })

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
    const handleChange = (e) => {
      let name = e.target.name,
          element = e.target,
          value = e.target.value.trim(),
          data = datas.data;

          
          // this.setErrorfor(element, 'ce champs ne doit pas etre vide');
          // 
      
      if (name === "nom" || name === "prenom") {
          if (value === "" ) {
              // show error
              // add error class
              setErrorfor(element, 'ce champs ne doit pas etre vide');
          }
          else if (name && value.length < 2) {
              // show error
              // add error class
            setErrorfor(element, 'le nombre de caractere doit etre superieur à 2')
          }
          else {
              // show success
              // add success class
              setSuccessfor(element);
              data[name] = value;
              setDatas({
                data: data
              })
              console.log(data)
          }
      }
      else if (name === "password") {
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
              setDatas({
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
              setErrorfor(element, 'ce champs ne doit pas etre vide');
          } else if (!isEmail(value)) {
              // show error
              // add error class
              setErrorfor(element, 'email invalide')
              
          } else {
              // show success
              // add success class
              setSuccessfor(element);
              data[name] = value;
              setDatas({
                data: data
              })
              console.log(data)
  
          }
      } 
      else if (name === 'passwordVerif') {
          if (value === "") {
              // show error
              // add error class
              setErrorfor(element, 'ce champs ne doit pas etre vide');
          } else if (value === datas.passwordVerif) {
              // show success
              // add success class
              setSuccessfor(element);
              data[name] = value;
              setDatas({
                data: data
              })
              console.log(data)
              
              
          } else {
              // show error
              // add error class
              setErrorfor(element, 'le mot de passe ne correspond pas')
              
          }
      }
      else { 
        data[name] = value;
        data['type'] = "intendant"
        setDatas({
          data: data
        })
        console.log(data)
      }
  } 
    
    
    return (
        <div className="dashboard">
            <Sidemenu/>
            <div className="main">
                <div className="container-fluid">
                    <div className="row justify-content-end px-5 my-3">
                        fil d'ariane
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3> Ajouter un Intendant</h3>
                            <form className="form mt-4">
                            <div className="row row-cols-md-3 form-group  mt-3">
                                <div className="col">
                                    <InputSelect 
                                        label="Residence"
                                        id="residence"
                                        name="residence"
                                        valueOption={valueOption ||[]}
                                        onChange={handleChange}
                                        className="inputSelect"
                                        defaulOption="Selectionner une residence"
                                    />
                                </div>
                            </div>
                            <div className="row row-cols-md-3 form-group  mt-3">
                              <div className="col">
                                <Input
                                    label="Nom"
                                    id="nom"
                                    className="form-control input"
                                    name="nom"
                                    placeholder="Entrer votre nom"
                                    type="text"
                                    onChange={handleChange}
                                
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
                                    onChange={handleChange}
                                
                                />    
                            </div>
                            <div className="col">
                                <Input
                                    name="telephone"
                                    label="Telephone"
                                    className="form-control"
                                    id="telephone"
                                    placeholder=""
                                    onChange={handleChange}
                                    type="number"
                                />
                              </div>
                            </div>
                            <div className="row row-cols-md-3 form-group  mt-3">
                              <div className="col">
                                <Input
                                  label="Email"
                                  id="email"
                                  className="form-control input"
                                  name="email"
                                  placeholder="Entrer votre email"
                                  type="email"
                                  onChange={handleChange}
                                
                                />
                              </div>
                              <div className="col">
                                  <Input
                                      label="Mot de passe"
                                      id="password"
                                      className="form-control input"
                                      name="password"
                                      placeholder="Entrer votre password"
                                      type="password"
                                      onChange={handleChange}
                                  
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
                                      onChange={handleChange}
                                  
                                  />
                              </div>
                              
                                
                            </div>
                            
                            <div className="row  mt-3">
                                <div className="offset-4 col-md-6 my-3">
                                <Button
                                   value="Enregistrer l'intendant"
                                   type="submit" 
                                />
                                </div>
                            </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
    
}

export default Dashboard; 
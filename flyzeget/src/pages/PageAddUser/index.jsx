
import Sidemenu from "../../components/Sidemenu/index";
import AddUser from "../../components/AddUser";
const PageAddUser = () => {    
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
                            <h3> Ajouter un Utilisateur</h3>
                        </div>
                    </div>
                    <AddUser/>    
                    
                </div>
            </div>
            
        </div>
    )
    
}

export default PageAddUser; 
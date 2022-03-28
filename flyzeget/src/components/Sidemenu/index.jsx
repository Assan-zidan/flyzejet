import React, { useState } from "react"; //react importation
import MenuItem from "../MenuItem/index"; //importation of MenuItem component
import "../../Styles/sidemenu.css"; //style sidemenu 
import { useNavigate } from "react-router-dom";


/**
*@author 
*@function SideMenu content MenuItem 
**/
const Sidemenu = () => {
    const [inactive,setInactive] = useState(false);
    const MenuItems = [
        { name: "Dasboard", to: "/dashboard", iconClassName: "bx bx-chat", toolTipName: "Dashboard" },
        {
            name: "Utilisateurs",
            to: "/dashboard",
            iconClassName: "bx bx-user",
            toolTipName: "Mes taches",
            subMenu : [
                {name: "Employés", to: "#"},
                {name: "Intendants", to: "#"},

            ]
        },
        { name: "Setting", to: "/setting", iconClassName: "bx bx-coq", toolTipName: "Dasboard"}
    ] 
    const Click = () => {
        localStorage.removeItem('user');
        useNavigate("/connexion");
    }
    return (
        <>
            <div className={ `sidemenu ${inactive ? "inactive" : ""} `}>
                <div class="top-section">
                    <div class="logo">
                        <i class='bx bxl-c-plus-plus'></i>    
                        <div class="logo-name">Easejob</div>
                    </div>
                    <div className="toggle-menu-btn" onClick={ () => setInactive(!inactive) } >
                        {inactive ? (<i class='bx bx-menu' id="btn" ></i>) : (<i class='fa fa-close'></i>) }
                    </div>
                </div>
                <div className="search">
                    <i class='bx bx-search' ></i>
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="main-menu">
                <ul>
                    {
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
                    }
                </ul>
                </div>
                <div class="profile-content">
                    <div class="profile">
                        <div class="profile-detail">
                            <img src="" alt=""/>
                            <div class="name-job">
                                <div class="name">nazan zidan</div>
                                <div class="job">web developper</div>
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

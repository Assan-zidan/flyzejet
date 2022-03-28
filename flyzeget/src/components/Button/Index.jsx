import React from "react";
import "../../Styles/button.css"
const Button = (props) => {
    const {value,type}  = props

    return (
        <>
          <buttton className="btn" id="btn-btn" type={type}>{value}</buttton>  
        </>
    )
}
export default Button
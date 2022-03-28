import React from "react";
import "../../Styles/button.css"
const InputButton = (props) => {
    const {value,}  = props

    return (
        <>
          <input className="btn" id="btn-btn" type='submit' value={value} />
        </>
    )
}
export default InputButton
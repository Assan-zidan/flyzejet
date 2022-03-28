import React from "react";
const Input = (props) => {
    const {type,className,name,id,label,placeholder,onChange} = props

    return (
        <>
            <div className="field mt-3">
                <label className="label-form" htmlFor={id} >
                    {label}
                </label>
                <div className="groupInput">
                <input className={className} name={name} id={id} type={type} placeholder={placeholder} required 
                    onChange={onChange}
                    />
                    {}
                    <small className="error"></small>
                    <i class="fa fa-exclamation-circle"></i>
                    <i class="fa fa-check-circle"></i>
                </div>
                    

            </div>
        </>
    )
}
export default Input
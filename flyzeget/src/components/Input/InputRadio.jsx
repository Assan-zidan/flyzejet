import React from "react"

const InputRadio = (props) => {
    const {id,name,value,onChange,label,className} = props
    return (
        <>
            <div className={className}>
                <input className="form-check-input"  id={id} type="radio" value={value} name={name} onChange={onChange}/>
                <label className="form-check-label " htmlFor={id}  >
                    {label}
                </label>
            </div>
        </>
    )
}
export default  InputRadio
import React from "react"

const TextArea = (props) => {
    const {id,name,value,onChange,label,placeholder} = props
    return (
        <>
            <div className="field mt-3">
                <label className="label-form" htmlFor={id} >
                    {label}
                </label>
                    <textarea className="form-control" placeholder={placeholder} id={id} name={name} value={value} onChange={onChange}></textarea>
            </div>
        </>
    )
}
export default  TextArea
import React from "react"

const InputSelect = (props) => {
    const {name,valueOption,onChange,className,label,id,defaulOption} = props
    return (
        <>
        <div className="field mt-3">
                <label className="label-form" htmlFor={id} >
                    {label}
                </label>
            <select className={`form-select ${className}`} name={name} onChange={onChange}>
                <option selected>{defaulOption}</option>
                {valueOption && valueOption.length > 0 ?
                    valueOption.map((option,index) => (
                        <option value={option.value} key={index} >{option.name}</option>
                    ))
                    :null
                }
            </select>
        </div>
        </>
    )
}
export default  InputSelect
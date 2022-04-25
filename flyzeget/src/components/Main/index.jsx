import React from 'react'

const  Main = (props) => {
    const {title, filAriane} = props
  return (
    <div className='main'>
        <div className="container-fluid">
            <div className="row justify-content-end px-5 my-3">
                {filAriane}
            </div>
            <div className='row'>
                <h3>{title}</h3>
            </div>
        </div>
    </div>
  )
}

export default Main
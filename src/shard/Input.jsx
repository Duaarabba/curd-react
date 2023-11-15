import React from 'react'

function Input(props) {
   const {id,title,handelData,name,type ,errors,value }=props
  return (
    <div className="mb-3">
            <label htmlFor={id} className="form-label">{title}</label>
            <input type={type} name={name} className="form-control" id={id} value={value} onChange={handelData} />
            {errors[name]&& <p className=' text-danger'>{errors[name]}</p>}
        </div>
  )
}

export default Input
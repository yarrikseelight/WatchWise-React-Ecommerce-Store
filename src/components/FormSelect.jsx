import React from 'react'

const FormSelect = ({label,name, list, value, size, onChange}) => {
  return (
    <div className="form-control">
        <label htmlFor={name} className='label'>{label}</label>
        <select name={name} id={name} className={`select select-bordered ${size}`} value={value} onChange={onChange}>
              <option value=""></option>
              {list.map((item)=>{
                return (
                    <option value={item} key={item}>
                        {item}
                    </option>
                )
              })}
        </select>
    </div>
  )
}

export default FormSelect
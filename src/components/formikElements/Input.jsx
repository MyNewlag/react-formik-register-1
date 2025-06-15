

import React from 'react'
import PersonalError from '../PersonalError'
import { ErrorMessage, FastField } from 'formik'

export default function Input(props) {
    const {className,name,label,type}=props
  return (
       <div className={`mb-3 ${className}`}>
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField type={type} className="form-control" name={name} />                         

            <ErrorMessage name={name} component={PersonalError}/>
        </div>
  )
}

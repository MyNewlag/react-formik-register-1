
import React from 'react'
import PersonalError from '../PersonalError'
import { ErrorMessage, FastField } from 'formik'

export default function Select(props) {
      const {name,label,options}=props
  return (
  <div className='mb-3'>
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField as='select' className="form-control" name={name}>
              <option>---</option>
              {
                options.map(o=>(
                 <option key={o.id} value={o.value}>{o.value}</option> 
                ))
              }
              </FastField>                         

            <ErrorMessage name={name} component={PersonalError}/>
        </div>
  )
}


import { FastField } from 'formik';
import React, { Fragment } from 'react'

export default function Checkbox(props) {
     const {name,label,options}=props


       return (
       <div className='mb-3'>
                 <label htmlFor={name} className="form-label">{label}</label>
                 <FastField  className="form-control" name={name}>

                {({field}) =>{
                    console.log(field.value);

                    return options.map(o=>(
                        <Fragment key={o.id}>
                        <input
                        className='form-check-input me-3'
                        type='checkbox'
                        {...field}
                        value={o.value}
                        checked={field.value.includes(o.value)}/>
                         <label className='mx-1 ' htmlFor={o.id}>{o.value}</label>
                        </Fragment>
                    ))
                }
                }
                   </FastField>                         
     

             </div>
       )
}















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
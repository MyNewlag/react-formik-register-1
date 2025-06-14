
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import PersonalError from './PersonalError'

export default function FavoratsField(props) {
    const {form,push,remove}=props
const {favorats}=form.values

    return(
            <div>
                <label htmlFor="telePhone" className="form-label"> علاقه مندی ها  </label>
            <i className='fas fa-plus text-success mx-3 pointer 'onClick={()=>push('')}></i>
            {
                favorats.map((f,i)=>(
                 <div key={i} className="position-relative">
                       <Field type='text' className='form-control' name={`favorats[${i}]`}/>
                        {
                           favorats.length>1 ?(
                               <i className='fas fa-minus-circle text-danger mx-1 pointer delete_icon'
                             onClick={()=>remove(i)} ></i>
                           ) :null
                        }
                      <ErrorMessage  name={`favorats[${i}]`} component={PersonalError}/>
                 </div>
                ))
            }
            </div>
        )
}


import { ErrorMessage, FastField } from 'formik'
import React from 'react'
import PersonalError from '../PersonalError'

export default function Textarea() {
  return (
    <div className="mb-3">
        <label htmlFor="password" className="form-label"> بیوگرافی</label>
        <FastField className="form-control" name='bio' as='textarea' />
        <ErrorMessage name='bio' component={PersonalError}/>
    </div>
)
}

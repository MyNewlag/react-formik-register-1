import React from 'react';
import { ErrorMessage, FastField, Form, Formik } from 'formik'
import * as yup from 'yup';
import PersonalField from './PersonalField';
import PersonalError from './PersonalError';

const initialValues={
            name: '',
            email: '',
            password: '',
            bio: '',
        }
        const onSubmit= (values)=>{
            console.log(values)
        }
 

        const validate= (values)=>{
            let errors={}

            if (!values.name) {
                errors.name="لطفا این قسمت را پر کنید"
            }
            
            if (!values.email) {
                errors.email="لطفا این قسمت را پر کنید"
            }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
                  errors.email="لطفا قالب ایمیل را رعایت فرمایید"
            }

            if (!values.password) {
                errors.password="لطفا این قسمت را پر کنید"
            }

            return errors
        }

        const validationSchema=yup.object({
            name:yup.string().required("نام را وارد کن"),
            email:yup.string().required('ایمیل را وارد کن').email('به صورت قالب ایمیل وارد کن'),
            password:yup.string().required('پسورد را وارد کن')
        })


const Registerform = () => {

    // const formik = useFormik({
        // initialValues,
        // onSubmit,
        // // validate,
        // validationSchema
    // })

    

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
                <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                    <Form>
                        <h1 className='text-center'>
                            <i className='fas fa-user-plus text-primary'></i>
                        </h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">نام</label>
                            <FastField type="text" className="form-control" id="name" name='name' />                         

                            <ErrorMessage name='name' component={PersonalError}/>
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">ایمیل</label>
                            <FastField type="email" className="form-control" id="email" name='email' />
                             <ErrorMessage name='email'/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">رمز عبور</label>
                            <FastField  name='password'>
                               {(props)=><PersonalField {...props}/>
}
                            </FastField>
                            <ErrorMessage name='password'/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label"> بیوگرافی</label>
                            <FastField type="password" className="form-control" id="password" 
                            name='bio' as='textarea' />
                            <ErrorMessage name='password'/>
                        </div>

                        <div className='text-center w-100'>
                            <button type="submit" className="btn btn-primary">ثبت نام</button>
                        </div>
                   </Form>
                </div>
            </div>
        </div>
        </Formik>
    );
}

export default Registerform;
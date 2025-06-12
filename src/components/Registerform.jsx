import React from 'react';
import { useFormik } from 'formik'
import * as yup from 'yup';

const initialValues={
            name: '',
            email: '',
            password: '',
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
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    })

    console.log(formik);
    

    return (
        <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
                <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                    <form onSubmit={formik.handleSubmit}>
                        <h1 className='text-center'>
                            <i className='fas fa-user-plus text-primary'></i>
                        </h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">نام</label>
                            <input type="text" className="form-control" id="name" name='name'
                            // value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                            {...formik.getFieldProps("name")}
                            />
                            {formik.errors.name && formik.touched.name ? (
                                <small className='d-block text-center text-danger'>{formik.errors.name}</small>
                            ):null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">ایمیل</label>
                            <input type="email" className="form-control" id="email" name='email'
                            {...formik.getFieldProps("email")}
                            />
                              {formik.errors.email && formik.touched.email ? (
                                <small className='d-block text-center text-danger'>{formik.errors.email}</small>
                            ):null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">رمز عبور</label>
                            <input type="password" className="form-control" id="password" name='password'
                            {...formik.getFieldProps("password")}
                            />
                              {formik.errors.password && formik.touched.password ? (
                                <small className='d-block text-center text-danger'>{formik.errors.password}</small>
                            ):null}
                        </div>
                        <div className='text-center w-100'>
                            <button type="submit" className="btn btn-primary">ثبت نام</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registerform;
import React, { useEffect, useState } from 'react';
import { FieldArray, Form, Formik } from 'formik'
import * as yup from 'yup';

import FavoratsField from './FavoratsField';
import FormikControl from './formikElements/FormikControl';

const initialValues={
            name: '',
            email: '',
            password: '',
            bio: '',
            address:{
                city :'',
                postalCode:''
            },
            phone:['',''],
            favorats:[''],
            education:1,
            gender:1,
            skill:[]
        }
        const onSubmit= (values,submitProps)=>{
            console.log(values)
            console.log(submitProps)
            setTimeout(()=>{
                submitProps.setSubmitting(false)
                submitProps.resetForm()
            },3000)
            
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
            password:yup.string().required('پسورد را وارد کن'),
            bio:yup.string().required('بیوگرافی رو پر کن'),
            address:yup.object({
                city:yup.string().required('شهر را وارد کنید'),
                postalCode:yup.string().required('کد پستی را وارد کنید')
            }),
            phone:yup.array().of(yup.string().required('تلفن را پر کنید')),
            favorats:yup.array().of(yup.string().required('علایق را پر کن')),
            educations:yup.string().required('تحصیلات را پر کن'),
        })



        const education=[
            {id:1, value:'ابتدایی'},
            { id:2,value:'سیکل'},
            {id:3, value:'دیپلم'},
            { id:4,value:'لیسانس'},
        ]


        const gender=[
            {id:1, value:'مرد'},
            {id:2,value:'زن'}
        ]


        const skills=[
            {id:1, value:'java'},
            {id:2, value:'javascript'},
            {id:3, value:'react'},
            {id:4, value:'katlin'}
        ]


const Registerform = () => {

    const [data,setData]=useState(null)
    const [myValues,setMyValues]=useState(null)

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate,
    //     validationSchema
    // })

    const handleSave=(formik)=>{
         localStorage.setItem("saveData",JSON.stringify(formik.values))
    }
const getValues=()=>{
    setMyValues(JSON.parse(localStorage.getItem("saveData"))) 
}


    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("saveData"))) 
    },[])


    return (
        <Formik
        initialValues={myValues || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
        // validateOnMount
        >
       {formik=>{
        console.log(formik);
        
        return(
             <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
                <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                    <Form className='row'>
                        <h1 className='text-center'>
                            <i className='fas fa-user-plus text-primary'></i>
                        </h1>

                        <FormikControl
                        control='input'
                        type='text'
                        label='نام'
                        name='name'
                        />


                        <FormikControl
                        control='input'
                        type='email'
                        label='ایمیل'
                        name='email'
                        />


                        <FormikControl
                        control='input'
                        type='password'
                        label='رمز عبور'
                        name='password'
                        />


                        <FormikControl
                        control='textarea'
                        label=' بیوگرافی'
                        name='textarea'
                        />

                        <FormikControl
                        className='col-6'
                        control='input'
                        type='text'
                        label='شهر'
                        name='address.city'
                        />
                      
                        <FormikControl
                        className='col-6'
                        control='input'
                        type='text'
                        label='کد پستی'
                        name='address.postalCode'
                        />
                      
                        <FormikControl
                        className='col-6'
                        control='input'
                        type='text'
                        label='تلفن همراه'
                        name='phone[0]'
                        />
                                    
                      
                        <FormikControl
                        className='col-6'
                        control='input'
                        type='text'
                        label='تلفن ثابت'
                        name='phone[1]'
                        />
                      
                      
                      
                        <FormikControl
                        control='select'
                        label=' تحصیلات'
                        name='education'
                        options={education}
                        />
                      

                        <FormikControl
                        control='radio'
                        label=' جنسیت'
                        name='gender'
                        options={gender}
                        />

                        <FormikControl
                        control='checkbox'
                        label=' تخصص'
                        name='skill'
                        options={skills}
                        />
                      

                     

    
                        <div className="mb-3">
                                <FieldArray type='text' className='form-control' id='favorat' name='favorats'>
                                {(props)=><FavoratsField {...props}/>}
                                </FieldArray>
                        </div>

                        <div className='text-center w-100'>
                            {
                                data ?(
                                    <button type='button' className='btn btn-success' onClick={getValues}
                                    > دریافت اطلاعات</button>
                                ):(
                                    null
                                )
                            }
                            
                               <button type="submit" className="btn btn-primary mx-3" disabled={!(formik.dirty&&formik.isValid) || formik.isSubmitting}>
                                {
                                    formik.isSubmitting ? (
                                        <div>
                                             <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="sr-only">Loading...</span> 
                                        </div>                              
                                    ):("ثبت نام")
                                }
                               </button>
                                
                                {
                                    (formik.dirty&&formik.isValid) ?(
                               <button type='button' className='btn btn-warning' onClick={()=>handleSave(formik)} >
                                ذخیره در سیستم </button>
                                    ):(
                                        null
                                    )
                                }
                                
                                {
                                    formik.dirty ?(
                               <button type='reset' className='btn btn-danger ' >
                                 پاکسازی فرم  </button>
                                    ):(
                                        null
                                    )
                                }


                        </div>
                   </Form>
                </div>
            </div>
        </div>
        )
       }

       }
        </Formik>
    );
}

export default Registerform;
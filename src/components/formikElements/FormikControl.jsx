

import React from 'react'
import Input from './Input'
import Textarea from './Textarea';

const FormikControl= (props)=> {

    switch(props.control){
        case 'input':
            return <Input {...props}/>
        
        case 'textarea':
            return <Textarea  {...props}/>

            default :
            break;
    }

}

export default  FormikControl

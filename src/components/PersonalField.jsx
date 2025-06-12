

import React from 'react'

const  PersonalField=({field , form , meta})=>{
    return(
        <>
            <input type="password" className="form-control" id="password" {... field}/> 
            {
                meta.touched && meta.error ?
                <span className='text-center d-block text-danger'> {meta.error}</span>
                : null
            }
        </>
        )
    }

    export default PersonalField

import React from 'react'
import { Link } from 'react-router-dom'


const TitleNave = () => {
    return (
        <div className='container-fluid'>
            <Link className='text-decoration-none' to='/'><h2 className='bg-info py-2 px-3 text-white fst-italic fw-bold'>E-HealthCare</h2></Link>
        </div>
    )
}

export default TitleNave
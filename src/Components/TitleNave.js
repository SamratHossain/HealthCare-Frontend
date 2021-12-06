import React from 'react'
import { Link } from 'react-router-dom'


const TitleNave = () => {
    return (
        <div className='container-fluid'>
            <h2 className='bg-info py-2 px-3 text-white fst-italic fw-bold'><Link className='text-decoration-none' to='/'>E-HealthCare</Link></h2>
        </div>
    )
}

export default TitleNave
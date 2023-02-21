import React from 'react'
import Construction from './Construction'
import NavBar from '../components/NavBar'

function Calender() {
    return (
        <div className='screen dark:text-darkText'>
            <Construction />
            <NavBar active={2} />
        </div>
    )
}

export default Calender
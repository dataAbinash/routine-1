import React from 'react'
import Construction from './Construction'
import NavBar from '../components/NavBar'

function Calender() {
    return (
        <>
            <Construction />
            <NavBar active={2} />
        </>
    )
}

export default Calender
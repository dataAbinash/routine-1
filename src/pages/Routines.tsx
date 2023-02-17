import React from 'react'
import NavBar from '../components/NavBar'

function Routines() {
    return (
        <div className="home-screen screen-navbar">
            <header className='px-5 py-3 fixed top-0 bg-main max-h-[110px] overflow-hidden w-full'>
                <p className='text-xl font-bold pb-1 pl-[0.1em]'>Your Routines</p>
                <input type="search" placeholder='Search Routine' className='search-full' />
            </header>
            <section className='p-5 pt-[110px] font-semibold'>
                {/* <p>This is the main content of the page</p> */}
                <p className='text-2xl'>All your Routines will be here</p>
            </section>
            <NavBar active={1} />
        </div>
    )
}

export default Routines
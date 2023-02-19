import React from 'react'
import Construction from './Construction'
import NavBar from '../components/NavBar'
import icons from '../assets/icons/icons'
import { useNavigate } from 'react-router-dom'
import ls from '../lib/storage'
// import icons from '../assets/icons/icons'



function More() {
    const navigate = useNavigate()
    const settingsInfo = [
        {
            name: 'Apply Default Routines',
            icon: icons.calender,
            callback: () => { navigate('/applyRoutine') },
            rightArrow: true
        },
        {
            name: 'Reset everything',
            icon: icons.shield,
            callback: () => {
                let confirm = window.confirm('Are you sure you want to reset everything?')
                if (confirm) {
                    ls.clear()
                    navigate('/')
                }
            },
            rightArrow: true
        }
    ]
    return (
        <div>
            <header className='px-5 py-3 fixed top-0 bg-main max-h-[120px] overflow-hidden w-full z-20'>
                <div className="heading flex flex-row justify-between items-center gap-2 pb-1">
                    <p className='text-xl font-bold '>More options</p>
                    <div className="notification tap" onClick={() => navigate('/notifications')}>
                        <div className="dot absolute h-2 w-2 bg-accent mt-2 ml-7 rounded-full"></div>
                        <img src={icons.notification} className='w-10 p-3 rounded-md opacity-80' />
                    </div>
                </div>
                <input type="search" placeholder='Search more options & settings' className='search-full' />
            </header>
            <section className='p-[1.2rem] pt-[125px] pb-[100px]'>
                <div className="settings w-full flex flex-col gap-3">
                    {settingsInfo.map((setting, index) => {
                        return <div onClick={setting.callback} className="setting flex justify-between items-center p-5 py-3 pr-4 rounded-xl tap99" key={index}>
                            <div className="nameIconContainer flex gap-4">
                                <div className="left"><img src={setting.icon} className='w-5 opacity-70' /></div>
                                <div className="right"><p className='font-normal'>{setting.name}</p></div>
                            </div>
                            {setting.rightArrow && <div className="arrowContainer opacity-70"><img src={icons.right_arrow_next} className='w-5 opacity-70' /></div>}
                        </div>
                    })}
                </div>
            </section>

            <NavBar active={3} />
        </div>
    )
}

export default More
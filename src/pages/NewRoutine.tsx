import Emoji from 'emoji-store'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import icons from '../assets/icons/icons'
import TextEmoji from '../components/TextEmoji'

function NewRoutine() {
    const navigate = useNavigate()
    function goBack() {
        setTimeout(() => {
            navigate(-1)
        }, 50);
    }
    return (
        <div className='new-routine-screen screen'>
            <header className='flex p-2 w-full justify-between select-none items-center px-4'>
                <div className="left tap" onClick={goBack}>
                    <img src={icons.xmark_solid} className='w-10 p-3' />
                </div>
                <div className="center font-medium text-base">New Routine {/*<TextEmoji emoji='😯'/>*/}</div>
                <div className="right tap">
                    <img src={icons.check_solid} className='w-11 p-3' />
                </div>
            </header>
        </div>
    )
}

export default NewRoutine
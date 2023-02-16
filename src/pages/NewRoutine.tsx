import Emoji from 'emoji-store'
import React from 'react'
import icons from '../assets/icons/icons'
import TextEmoji from '../components/TextEmoji'

function NewRoutine() {
    return (
        <div className='new-routine-screen screen'>
            <header className='flex p-4 w-full justify-between select-none'>
                <div className="left tap">
                    <img src={Emoji.get('❌')} className='w-7' />
                </div>
                <div className="center font-medium">New Routine {/*<TextEmoji emoji='😯'/>*/}</div>
                <div className="right tap">
                    <img src={Emoji.get('✔️')} className='w-7' />
                </div>
            </header>
        </div>
    )
}

export default NewRoutine
import React from 'react'
import NavBar from '../components/NavBar'
import icons from '../assets/icons/icons'
import { useEffect, useState } from 'react'
import Emoji from 'emoji-store'
import ls from '../lib/storage'
import { Routine } from '../lib/dateMethods'
import FloatingButton from '../components/FloatingButton'
import { capitalize } from '../lib/lib'

function Routines() {
    const [screenRoutines, uTodayRoutine] = useState<any>([])
    useEffect(() => {
        const routines = JSON.parse(ls.get('routines') || '[]')
        // const todayRoutines: Routine[] = searchByDate(new Date(), routines)
        // searchActiveRoutine(todayRoutines)
        uTodayRoutine(routines)
        // console.clear()
    }, [])
    return (
        <div className="home-screen screen-navbar select-none">
            <header className='px-5 py-3 fixed top-0 bg-main max-h-[120px] overflow-hidden w-full z-20'>
                <div className="heading flex flex-row justify-between items-center gap-2 pb-1">
                    <p className='text-xl font-bold '>All Routines</p>
                    <div className="notification tap opacity-0">
                        <div className="dot absolute h-2 w-2 bg-accent mt-2 ml-7 rounded-full"></div>
                        <img src={icons.notification} className='w-10 p-3 rounded-md opacity-80' />
                    </div>
                </div>
                <input type="search" placeholder='Search Routine' className='search-full' />
            </header>
            <section className='p-[1.2rem] pt-[125px] pb-[100px]'>
                <div className="routines flex flex-col gap-3">
                    {AllRoutines(screenRoutines)}
                </div>
            </section>
            <FloatingButton/>
            <NavBar active={1} />
        </div>
    )
}


function AllRoutines(routines: Array<Routine>) {
    console.log(routines)
    return routines.map((routine: Routine, index) => {
        return (
            <div className='routine flex flex-col p-[1.2rem] rounded-[1.6rem]  input-bg tap99' key={index}>
                <div className="top flex flex-row gap-3">
                    <div className="left">
                        <div className="emoji bg-main aspect-square flex-center rounded-xl p-2 flex-1">
                            <img src={Emoji.get(routine.emoji || '⏰')} className='w-[26px] aspect-square' />
                        </div>
                    </div>
                    <div className="right flex-1 flex flex-row justify-between flex-center gap-3">
                        <div className="name"><p className={`font-semibold text-base ${false ? 'text-white' : ''}`}>{routine.name}</p></div>
                        <div className="time"><p className={`text-[0.6rem]  font-medium ${false ? 'text-white/80' : 'text-secondary'} text-right`}>{capitalize(routine.type)}</p></div>
                    </div>
                </div>
                {
                    routine.description &&
                    <div className="bottom flex flex-row gap-3">
                        <BlankEmojiLeft />
                        <div className="right flex-1 flex flex-row justify-between flex-center">
                            <div className={`description font-medium text-[0.75rem] ${false ? 'text-white/80' : 'text-secondary'}`}><p>{routine.description}</p></div>
                        </div>
                    </div>
                }

            </div>
        )
    })
}


function BlankEmojiLeft() {
    return (<div className="left opacity-0 select-none">
        <div className="emoji bg-main flex-center rounded-xl px-2 py-0 flex-1 ">
            <img src='' className='w-[26px] h-0' />
        </div>
    </div>)
}

export default Routines
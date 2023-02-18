import Emoji from 'emoji-store'
import { useEffect, useState } from 'react'
import icons from '../assets/icons/icons'
import '../assets/scss/index.scss'
import FloatingButton from '../components/FloatingButton'
import NavBar from '../components/NavBar'
import getCurrentDate, { getTime } from '../lib/date'
import searchByDate, { Routine, searchActiveRoutine } from '../lib/dateMethods'
import ls from '../lib/storage'
import TextEmoji from '../components/TextEmoji'
import { useNavigate } from 'react-router-dom'
console.log("Hey")


function BlankEmojiLeft() {
	return (<div className="left opacity-0 select-none">
		<div className="emoji bg-main flex-center rounded-xl px-2 py-0 flex-1 ">
			<img src='' className='w-[26px] h-0' />
		</div>
	</div>)
}

function Home() {
	// const [name, updateName] = useState(1)
	const [screenRoutines, uTodayRoutine] = useState<any>([])
	const navigate = useNavigate()
	useEffect(() => {
		const routines = JSON.parse(ls.get('routines') || '[]')
		const todayRoutines: Routine[] = searchByDate(new Date(), routines)
		searchActiveRoutine(todayRoutines)
		uTodayRoutine(todayRoutines)
		// console.clear()
	}, [])
	return (
		<div className="home-screen screen-navbar select-none">
			<header className='px-5 py-3 fixed top-0 bg-main max-h-[120px] overflow-hidden w-full z-20'>
				<div className="heading flex flex-row justify-between items-center gap-2 pb-1">
					<p className='text-xl font-bold '>{/*<TextEmoji emoji="🗓️" />*/}{getCurrentDate()}</p>
					<div className="notification tap" onClick={()=>navigate('/notifications',{replace:true})}>
						<div className="dot absolute h-2 w-2 bg-accent mt-2 ml-7 rounded-full"></div>
						<img src={icons.notification} className='w-10 p-3 rounded-md opacity-80' />
					</div>
				</div>
				<input type="search" placeholder='Search Routine' className='search-full' />
			</header>
			<section className='p-[1.2rem] pt-[125px] pb-[100px]'>
				<div className="routines flex flex-col gap-3">
					{GetRoutines(screenRoutines)}
				</div>
			</section>
			<FloatingButton />
			<NavBar active={0} />
		</div>
	)
}

function GetRoutines(routines: Array<Routine>) {
	console.log(routines)


	return routines.map((routine: Routine, index) => {
		if (routine.type === 'notification') {
			// return <></>
			return <p className='text-[#777]/50 text-center my-5 text-sm font-semibold' key={index}>{routine.name}</p>
		}
		const isActiveRoutine = routine.status === 'active'
		const isCompleted = routine.status === 'done'

		return (
			<div className={
				`routine flex flex-col p-[1.2rem] rounded-[1.6rem] ${isActiveRoutine ? 'bg-accent shadow-accent/40 shadow-lg' : 'input-bg'}
				tap99 ${isCompleted ? 'opacity-60' : ''}`
			} key={index}>
				<div className="top flex flex-row gap-3">
					<div className="left">
						<div className="emoji bg-main aspect-square flex-center rounded-xl p-2 flex-1">
							<img src={Emoji.get(routine.emoji || '⏰')} className='w-[26px] aspect-square' />
						</div>
					</div>
					<div className="right flex-1 flex flex-row justify-between flex-center gap-3">
						<div className="name"><p className={`font-semibold text-base ${isActiveRoutine ? 'text-white' : ''}`}>{routine.name}</p></div>
						<div className="time"><p className={`text-[0.6rem]  font-medium ${isActiveRoutine ? 'text-white/80' : 'text-secondary'} text-right`}>{GetDisplayTime(routine)}</p></div>
					</div>
				</div>
				{
					routine.description &&
					<div className="bottom flex flex-row gap-3">
						<BlankEmojiLeft />
						<div className="right flex-1 flex flex-row justify-between flex-center">
							<div className={`description font-medium text-[0.75rem] ${isActiveRoutine ? 'text-white/80' : 'text-secondary'}`}><p>{routine.description}</p></div>
						</div>
					</div>
				}
				{
					isActiveRoutine &&
					<div className="bottom flex flex-row gap-3">
						<BlankEmojiLeft />
						<div className="right w-full flex-1 mt-2">
							<div className="sliderContainer flex-row flex gap-3 justify-center items-center">
								<div className="slider w-full h-1 bg-[#ffffff55] rounded-xl">
									<div className="slide bg-white w-[50%] h-1 rounded-xl" style={{ width: `${routine.percentage}%` }}></div>
								</div>
								<div className="percentage"><p className='text-xs font-medium text-white/80'>{routine.percentage}%</p></div>
							</div>
						</div>
					</div>
				}
			</div>
		)
	})
}
function GetDisplayTime(routine: Routine) {
	if (routine.type === 'calender') {
		return <>Event <br /> <TextEmoji emoji="🔔"></TextEmoji></>
	}
	else {
		// const hour = 
		if (routine.endTime) {
			return <>{getTime(routine.startTime)} <br /> {getTime(routine.endTime)}</>
		}
		else {
			return <>{getTime(routine.startTime)}</>
		}
	}
}
export default Home
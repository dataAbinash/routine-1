import Emoji from 'emoji-store'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/scss/index.scss'
import FloatingButton from '../components/FloatingButton'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import TextEmoji from '../components/TextEmoji'
import getCurrentDate, { getDay, getTime } from '../lib/date'
import searchByDate, { Routine, searchActiveRoutine } from '../lib/dateMethods'
import ls from '../lib/storage'
import { getFormattedDate, incrementDate } from '../lib/date'
import delay from '../lib/delay'

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
	const timer1 = useRef<any>(null);
	const timer2 = useRef<any>(null);

	useEffect(() => {
		// Check if started using
		let startedUsing = ls.get('startedUsing')
		if (!startedUsing) { navigate('/start', { replace: true }) }

		let routines = JSON.parse(ls.get('routines') || '[]')
		let todayRoutines: Routine[] = searchByDate(new Date(), routines)
		searchActiveRoutine(todayRoutines)
		uTodayRoutine(todayRoutines)

		timer2.current = setInterval(() => {
			todayRoutines = searchByDate(new Date(), routines)
			searchActiveRoutine(todayRoutines)
			uTodayRoutine(todayRoutines)
			console.log("Refresh")
		}, 60000)

		timer1.current = setTimeout(() => {
			backgroundRoutineUpdate()
			console.log('Check for update...')
		}, 15000);

		return () => {
			clearTimeout(timer1.current)
			clearTimeout(timer2.current)
		}
	}, [])

	return (
		<div className="home-screen screen-navbar select-none dark:bg-black dark:text-darkText">
			<Header title={getCurrentDate()} notiIcon={true} placeholder="Search Routine" />
			<section className='p-[1.2rem] pt-[125px] pb-[100px]'>
				<div className="routines flex flex-col gap-3">
					{GetRoutines(screenRoutines)}
				</div>
				<NewRoutinesLoader />
			</section>
			<FloatingButton />
			<NavBar active={0} />
		</div>
	)
}



function NewRoutinesLoader() {
	const today = new Date()
	today.setDate(today.getDate() + 1)
	const [routines, setRoutines] = useState<any>([])
	const [tomorrow, setTomorrow] = useState(today)
	const lsRoutines = JSON.parse(ls.get('routines') || '[]')

	return <div className=''>
		<div className="routines flex flex-col gap-3 mt-3">
			{routines.length === 0 ? <></> : GetRoutines(routines)}
		</div>
		<button className='no-highlight m-auto block mt-10 bg-dark text-white py-4 px-6 text-xs rounded-2xl tap97' onClick={() => delay(loadMoreRoutines)}>
			See routines of {getFormattedDate(tomorrow)}
		</button>
	</div>

	function loadMoreRoutines() {
		const notificationRoutine = {
			name: 'Routines of ' + getFormattedDate(tomorrow) + ', ' + getDay(tomorrow),
			type: 'notification',
		}
		const noRoutine = {
			name: 'No routine for ' + getFormattedDate(tomorrow) + ', ' + getDay(tomorrow),
			type: 'notification',
		}
		setTomorrow(incrementDate(tomorrow))
		const newRoutines = searchByDate(tomorrow, lsRoutines)
		console.log(newRoutines)
		if (newRoutines.length === 0) {
			console.log(notificationRoutine)
			setRoutines([...routines, noRoutine])
			return
		}
		setRoutines([...routines, notificationRoutine, ...newRoutines])
	}
}

function GetRoutines(routines: Array<Routine>) {
	// console.log(routines)
	if (routines.length === 0)
		return <div className='h-[calc(100dvh-400px)] flex flex-col items-center justify-center'>
			<p className='text-[#777]/50 text-center my-3 text-lg font-medium'>No routine for today</p>
			<p className='text-xs text-center text-[#777]/50 font-medium'>Go to Routines tab to see all routines</p>
			{/* <p className='text-2xl'><span className='text-[#777]/50 text-center my-3 text-lg font-medium'>there </span><TextEmoji emoji='👉🏻'/></p> */}
		</div>

	return routines.map((routine: Routine, index) => {
		if (routine.type === 'notification') {
			// return <></>
			return <p className='text-[#777]/50 text-center my-5 text-sm font-medium' key={index}>{routine.name}</p>
		}
		const isActiveRoutine = routine.status === 'active'
		const isCompleted = routine.status === 'done'

		return (
			<div className={
				`routine flex flex-col p-[1.2rem] rounded-[1.6rem] ${isActiveRoutine ? 'bg-accent shadow-accent/40 shadow-lg dark:bg-accent/90' : 'input-bg dark:bg-darkInputBg'}
				tap99 ${isCompleted ? 'opacity-60' : ''} `
			} key={index}>
				<div className="top flex flex-row gap-3">
					<div className="left">
						<div className={`emoji aspect-square flex-center rounded-xl p-2 flex-1 ${isActiveRoutine ? 'dark:bg-white/20 bg-white/20' : 'dark:bg-black/40 bg-white'}`}>
							<img src={Emoji.get(routine.emoji || '⏰')} className='w-[26px] aspect-square' />
						</div>
					</div>
					<div className={`right flex-1 flex flex-row justify-between flex-center gap-3 `}>
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
function backgroundRoutineUpdate() {
	// check subscription versions and update
	const subscriptions = JSON.parse(ls.get('subscriptions') || '{}')
	for (let key in subscriptions) {
		let sub = subscriptions[key]
		fetch(`https://dataabinash.github.io/routine/${key}/info.json`)
			.then(res => res.json())
			.then((data: any) => {
				if (data.vcode === sub.vcode) return;
				updateRoutines(key, data, subscriptions)
			})
	}
}

function updateRoutines(subscriptionKey: string, subData: any, subscriptions: any) {
	let status = false
	fetch(`https://dataabinash.github.io/routine/${subscriptionKey}/routine.json`)
		.then(res => res.json())
		.then((data: any) => {
			// Delete all routines having the 'sub' property in the routine
			const routines = JSON.parse(ls.get('routines') || '[]')
			const newRoutines = routines.filter((routine: Routine) => {
				if (routine.sub === subscriptionKey) return false
				console.log('Updating...' + subscriptionKey)
				return true
			})
			console.log(newRoutines)
			newRoutines.push(...data)
			ls.set('routines', JSON.stringify(newRoutines))
			status = true

			// update subscriptions 
			subscriptions[subscriptionKey] = subData
			ls.set('subscriptions', JSON.stringify(subscriptions))
		}).catch(err => {
			status = false
		})
}

function dailyNotification() {

}

export default Home
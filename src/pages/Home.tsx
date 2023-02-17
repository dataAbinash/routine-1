import { useState } from 'react'
import Emoji from 'emoji-store'
import '../assets/scss/index.scss'
import { Link } from 'react-router-dom'
import TextEmoji from '../components/TextEmoji'
import NavBar from '../components/NavBar'
import FloatingButton from '../components/FloatingButton'
import icons from '../assets/icons/icons'
import getCurrentDate from '../lib/date'
function BlankEmojiLeft() {
	return (<div className="left opacity-0">
		<div className="emoji bg-main flex-center rounded-xl px-2 py-0 flex-1 ">
			<img src={Emoji.get('🧑🏻‍💻')} className='w-[26px] h-0' />
		</div>
	</div>)
}



function Home() {
	return (
		<div className="home-screen screen-navbar">
			<header className='px-5 py-3 fixed top-0 bg-main max-h-[120px] overflow-hidden w-full '>
				<div className="heading flex flex-row justify-between items-center gap-2 pb-1">
					<p className='text-xl font-bold '>{/*<TextEmoji emoji="🗓️" />*/}{getCurrentDate()}</p>
					<div className="notification tap">
						<div className="dot absolute h-2 w-2 bg-accent mt-2 ml-7 rounded-full"></div>
						<img src={icons.notification} className='w-10 p-3 rounded-md opacity-80' />
					</div>
				</div>
				<input type="search" placeholder='Search Routine' className='search-full' />
			</header>
			<section className='p-[1.2rem] pt-[125px] pb-[100px]'>
				<div className="routines flex flex-col gap-3">
					<div className="routine flex flex-col p-[1.2rem] rounded-[1.6rem] bg-accent tap99 shadow-accent/40 shadow-lg">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji bg-main aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('🧑🏻‍💻')} className='w-[26px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-base text-white'>JavaScript Coding</p></div>
								<div className="time"><p className='text-[0.6rem]  font-medium text-white/80 text-right'>7.00AM <br /> 8.00AM</p></div>
							</div>
						</div>
						<div className="bottom flex flex-row gap-3">
							<BlankEmojiLeft />
							<div className="right flex-1 flex flex-row justify-between flex-center">
								<div className="description font-medium text-[0.75rem] text-white/80"><p>Practice Data Structures and Algorithms using JavaScript</p></div>
							</div>
						</div>
						<div className="bottom flex flex-row gap-3">
							<BlankEmojiLeft />
							<div className="right w-full flex-1 mt-2">
								<div className="sliderContainer flex-row flex gap-3 justify-center items-center">
									<div className="slider w-full h-1 bg-[#ffffff55] rounded-xl">
										<div className="slide bg-white w-[50%] h-1 rounded-xl"></div>
									</div>
									<div className="percentage"><p className='text-xs font-medium text-white/80 '>32%</p></div>
								</div>
							</div>
						</div>
					</div>

					<div className="routine flex flex-col p-[1.2rem] rounded-[1.6rem] gap-1 input-bg">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji bg-main aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('🧑🏻‍🔬')} className='w-[26px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-base'>Chemistry Class </p></div>
								<div className="time"><p className='text-[0.6rem]  font-medium text-secondary text-right'>11.00AM <br /> 12.30PM</p></div>
							</div>
						</div>
						<div className="bottom flex flex-row gap-3">
							<BlankEmojiLeft />
							<div className="right flex-1 flex flex-row justify-between flex-center">
								<div className="description font-medium text-[0.75rem] text-secondary"><p>Practice Data Structures and Algorithms using JavaScript</p></div>
							</div>
						</div>
					</div>

					<div className="routine flex flex-col p-[1.2rem] rounded-[1.6rem] gap-1 input-bg">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji bg-main aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('🎂')} className='w-[26px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-base '>Happy Birthday Ruby</p></div>
								<div className="time"><p className='text-[0.6rem]  font-semibold text-secondary text-right'>11.00AM</p></div>
							</div>
						</div>
					</div>

					<div className="routine flex flex-col p-[1.2rem] rounded-[1.6rem] gap-1 input-bg">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji bg-main aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('🥳')} className='w-[26px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-base'>Ruby's Birthday Party</p></div>
								<div className="time"><p className='text-[0.6rem]  font-semibold text-secondary text-right'>9.00PM <br />11.00PM</p></div>
							</div>
						</div>
					</div>
					<div className="routine flex flex-col p-[1.2rem] rounded-[1.6rem] gap-1 input-bg">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji bg-main aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('☀️')} className='w-[26px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-base '>Good Morning</p></div>
								<div className="time"><p className='text-[0.6rem]  font-semibold text-secondary text-right'>11.00AM <br />1.00PM</p></div>
							</div>
						</div>
					</div>

				</div>
			</section>
			<FloatingButton />
			<NavBar active={0} />
		</div>
	)
}

export default Home
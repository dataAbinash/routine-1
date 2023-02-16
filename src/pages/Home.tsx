import { useState } from 'react'
import Emoji from 'emoji-store'
import '../assets/scss/index.scss'
import { Link } from 'react-router-dom'
import TextEmoji from '../components/TextEmoji'
import NavBar from '../components/NavBar'
import FloatingButton from '../components/FloatingButton'
function BlankEmojiLeft() {
	return (<div className="left opacity-0">
		<div className="emoji main-bg flex-center rounded-xl px-2 py-0 flex-1 ">
			<img src={Emoji.get('🧑🏻‍💻')} className='w-[25px] h-0' />
		</div>
	</div>)
}
function Home() {
	return (
		<div className="home-screen screen-navbar">
			<header className='px-5 py-3 fixed top-0 main-bg max-h-[110px] overflow-hidden w-full'>
				<p className='text-xl font-bold pb-1 pl-[0.1em]'>Good Morning <TextEmoji emoji="🌞" /></p>
				<input type="search" placeholder='Search Routine' className='search-full' />
			</header>
			<section className='p-5 pt-[110px] h-[500vh]'>
				<div className="routines flex flex-col gap-3">
					<div className="routine flex flex-col p-4 rounded-3xl gap-1 bg-accent tap99">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji main-bg aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('🧑🏻‍💻')} className='w-[25px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-[0.95rem] text-white'>JavaScript Coding</p></div>
								<div className="time"><p className='text-[0.6rem]  font-semibold text-white/80'>7.00AM <br /> 8.00AM</p></div>
							</div>
						</div>
						<div className="bottom flex flex-row gap-3">
							<BlankEmojiLeft />
							<div className="right flex-1 flex flex-row justify-between flex-center">
								<div className="description font-medium text-[0.8rem] text-white/80"><p>Practice Data Structures and Algorithms using JavaScript</p></div>
							</div>
						</div>
						<div className="bottom flex flex-row gap-3">
							<BlankEmojiLeft />
							<div className="right w-full flex-1">
								<div className="sliderContainer flex-row flex gap-3 justify-center items-center">
									<div className="slider w-full h-1 bg-[#ffffff55] rounded-xl">
										<div className="slide bg-white w-[50%] h-1 rounded-xl"></div>
									</div>
									<div className="percentage"><p className='text-xs font-semibold text-white/80'>32%</p></div>
								</div>
							</div>
						</div>
					</div>

					<div className="routine flex flex-col p-4 rounded-3xl gap-1 input-bg">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji main-bg aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('🧑🏻‍🔬')} className='w-[25px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-[0.95rem] '>Chemistry Class </p></div>
								<div className="time"><p className='text-[0.6rem]  font-semibold text-secondary'>11.00AM <br /> 12.30PM</p></div>
							</div>
						</div>
						<div className="bottom flex flex-row gap-3">
							<BlankEmojiLeft />
							<div className="right flex-1 flex flex-row justify-between flex-center">
								<div className="description font-medium text-[0.8rem]"><p>Practice Data Structures and Algorithms using JavaScript</p></div>
							</div>
						</div>
					</div>

					<div className="routine flex flex-col p-4 rounded-3xl gap-1 input-bg">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji main-bg aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('🎂')} className='w-[25px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-[0.95rem] '>Happy Birthday</p></div>
								<div className="time"><p className='text-[0.6rem]  font-semibold text-secondary'>11.00AM</p></div>
							</div>
						</div>
					</div>

					<div className="routine flex flex-col p-4 rounded-3xl gap-1 input-bg">
						<div className="top flex flex-row gap-3">
							<div className="left">
								<div className="emoji main-bg aspect-square flex-center rounded-xl p-2 flex-1">
									<img src={Emoji.get('🎓')} className='w-[25px] aspect-square' />
								</div>
							</div>
							<div className="right flex-1 flex flex-row justify-between flex-center gap-1">
								<div className="name"><p className='font-semibold text-[0.95rem] '>Graduated</p></div>
								<div className="time"><p className='text-[0.6rem]  font-semibold text-secondary'>11.00AM <br />1.00PM</p></div>
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
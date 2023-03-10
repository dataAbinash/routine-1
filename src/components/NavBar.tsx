import icons from "../assets/icons/icons"
import { useNavigate } from "react-router-dom"
import delay from "../lib/delay"
const tabIcons = [icons.home, icons.routines, icons.calender, icons.more]
const tabs = ['Home', 'Routines', 'Calender', 'More']
const links = ['/', '/routines', '/calender', '/more']

function NavBar({ active }: any) {
    const navigate = useNavigate()
    return (
        <div
            className={
                `navBar fixed bottom-0 h-[70px] pt-2 bg-[#ffffffbb] dark:bg-black/70
                backdrop-blur w-full border-t-[0.5px] border-t-[#77777755] flex flex-row justify-evenly align-middle`
            }>
            {tabIcons.map((icon, index) => {
                return (
                    <div
                        className={`select-none tap tab flex-center flex-col gap-1 px-3 ${active == index ? "" : " opacity-50"} dark:invert dark:grayscale`}
                        key={index} onClick={() => delay(() => navigate(links[index], { replace: true }))}>
                        <img src={icon} className='h-[21px]' />
                        <p className="title text-xs dark:invert">{tabs[index]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default NavBar
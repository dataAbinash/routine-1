import { useNavigate } from 'react-router-dom'
import icons from '../assets/icons/icons'
import NavBar from '../components/NavBar'
import ls from '../lib/storage'
import { applyTheme, defaultTheme } from '../lib/theme'
// import icons from '../assets/icons/icons'
import Header from '../components/Header'
import TextEmoji from '../components/TextEmoji'
import details from '../details/appDetails'



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
        },
        {
            name: 'Apply Dark Mode',
            icon: icons.shield,
            callback: () => {
                applyTheme('dark')
            }
        },
        {
            name: 'Apply Light Mode',
            icon: icons.shield,
            callback: () => {
                applyTheme('light')
            }
        },
        {
            name: 'System default theme',
            icon: icons.shield,
            callback: () => {
                defaultTheme()
            }
        }
    ]
    return (
        <div className='screen dark:text-darkText'>
            <Header title="More options" notiIcon={true} placeholder="Search Routine" />

            <section className='p-[1.2rem] pt-[125px] pb-[100px]'>

                <div className="w-full p-6 bg-dark rounded-3xl text-white tap99">
                    <div className=" flex justify-between w-full items-center">
                        <div className="left">
                            <p className='text-xl font-semibold'>Routine</p>
                        </div>
                        <div className="rig">
                            <p className='text-sm text-white/70'>v{details.version} Beta</p>
                        </div>
                    </div>
                    <p className='text-xl mt-2'> <TextEmoji emoji="😎" /> <TextEmoji emoji="📕" /> <TextEmoji emoji="🧑🏻‍💻" /> <TextEmoji emoji="🎓" /> <TextEmoji emoji="🏠" /> <TextEmoji emoji="😋" /> <TextEmoji emoji="😜" /></p>
                    {/* <p className='mt-2 text-white/70'>Added support for dark mode</p> */}
                    <p className="text-xs mt-3 text-white/70">Click to see full changelog</p>
                </div>


                <div className="settings w-full flex flex-col gap-2 mt-5">
                    {settingsInfo.map((setting, index) => {
                        return <div onClick={setting.callback} className="setting flex justify-between items-center p-3 py-3 rounded-xl tap99" key={index}>
                            <div className="nameIconContainer flex gap-4">
                                <div className="left"><img src={setting.icon} className='w-5 opacity-70 dark:invert dark:grayscale' /></div>
                                <div className="right"><p className='font-normal'>{setting.name}</p></div>
                            </div>
                            {setting.rightArrow && <div className="arrowContainer opacity-70"><img src={icons.right_arrow_next} className='w-4 opacity-70 dark:invert dark:grayscale' /></div>}
                        </div>
                    })}
                </div>
                <div>
                    <p className='text-sm text-center mt-20 text-gray'>Made with ❤️ by <a href="https://" target="_blank" className='text-link'>Abinash</a></p>
                </div>
            </section>
            <NavBar active={3} />
        </div>
    )
}

export default More
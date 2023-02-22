import Emoji from 'emoji-store';
import { useNavigate } from 'react-router-dom';
import icons from '../assets/icons/icons';

function NewRoutine() {
    const e = new Emoji();
    let emojiList = ['📕', '🧑🏻‍💻', '🏃🏻‍♂️', '🎨', '👻']
    const navigate = useNavigate()
    function goBack() {
        setTimeout(() => {
            navigate(-1)
        }, 50);
    }
    return (
        <div className='new-routine-screen screen dark:text-darkText'>
            <header className='flex p-2 w-full justify-between select-none items-center px-4'>
                <div className="left tap" onClick={goBack}>
                    <img src={icons.xmark_solid} className='w-10 p-3 dark:invert dark:grayscale' />
                </div>
                <div className="center font-medium text-base">New Routine {/*<TextEmoji emoji='😯'/>*/}</div>
                <div className="right tap">
                    <img src={icons.check_solid} className='w-11 p-3 dark:invert dark:grayscale' />
                </div>
            </header>
            <section className='basic-details p-4 flex flex-col gap-3'>
                <div className="inputText flex flex-row gap-3">
                    <img src={Emoji.get('🧑🏻')} className='tap h-[3.5rem] p-[0.8rem] bg-inputBg dark:bg-darkInputBg rounded-2xl' />
                    <input type="text" placeholder='Routine Name' className='name input-text bg-inputBg dark:bg-darkInputBg ' />
                </div>
                <div className="inputText">
                    <input type="text" placeholder='Routine Description' className='name input-text bg-inputBg dark:bg-darkInputBg ' />
                </div>
                <div className="inputSelect flex justify-between items-center gap-3">
                    <input type="text" placeholder='Custom Emoji' className='name input-text bg-inputBg dark:bg-darkInputBg ' />
                    <select name="" id="" className='appearance-none p-[1rem] px-7 rounded-2xl trans-outline outline-none focus:outline-accent border-none bg-inputBg dark:bg-darkInputBg text-center'>
                        <option value="once">Repeat Once</option>
                        <option value="daily">Repeat Daily</option>
                        <option value="weekly">Repeat Weekly</option>
                        <option value="monthly">Repeat Monthly</option>
                        <option value="yearly">Repeat Yearly</option>
                        <option value="calendar">Calendar Event</option>
                    </select>
                    {/* <img src={e.get('➕')} className='tap bg-inputBg dark:bg-darkInputBg h-[3.5rem] p-[0.8rem] rounded-2xl' /> */}
                </div>

                <div className="emojis flex gap-3 rounded-2xl flex-wrap justify-between items-center">
                    {emojiList.map((emoji, index) =>
                        <img src={e.get(emoji)} className='tap bg-inputBg dark:bg-darkInputBg h-[3.4rem] p-[0.8rem] rounded-2xl' />
                    )}
                </div>

                <div className="mt-16 text-center">
                    <p>This screen is under development</p>
                </div>

            </section>
        </div>
    )
}

export default NewRoutine
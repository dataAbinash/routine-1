import Emoji from 'emoji-store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icons from '../assets/icons/icons';
import ls from '../lib/storage';
import Once from './makeRoutine/Once';
import TextEmoji from '../components/TextEmoji';


function NewRoutine() {
    const e = new Emoji();
    let emojiList = ['📕', '🧑🏻‍💻', '🏃🏻‍♂️', '🎨', '👻']
    const [routineName, setRoutineName] = useState('')
    const [routineDescription, setRoutineDescription] = useState('')
    const [routineEmoji, setRoutineEmoji] = useState('')
    const [routineType, setRoutineType] = useState('once')
    const [routine, setRoutine] = useState<any>({})
    const navigate = useNavigate()


    // For today routineType
    useEffect(() => {
        console.log(routine)
    }, [routine])


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
            <section className='basic-details w-full p-4'>
                <div className='min-h-[calc(100vh-100px)] flex flex-col justify-between items-center w-full'>
                    <div className="top flex flex-col gap-3 w-full">
                        <div className="inputText flex flex-row gap-3">
                            <img src={Emoji.get(parseEmoji(routineEmoji)[0])} className='tap h-[3.6rem] p-[0.8rem] bg-inputBg dark:bg-darkInputBg rounded-2xl' />
                            <input
                                value={routineName}
                                onInput={(e: any) => { setRoutineName(e.target.value) }}
                                type="text"
                                placeholder='Routine Name'
                                className='name input-text bg-inputBg dark:bg-darkInputBg '
                            />
                        </div>
                        <div className="inputText">
                            <input
                                value={routineDescription}
                                onInput={(e: any) => { setRoutineDescription(e.target.value) }}
                                type="text"
                                placeholder='Routine Description'
                                className='name input-text bg-inputBg dark:bg-darkInputBg'
                            />
                        </div>
                        <div className="inputSelect flex justify-between items-center gap-3">
                            <input type="text"
                                value={routineEmoji}
                                placeholder='Custom Emoji'
                                className='name input-text bg-inputBg dark:bg-darkInputBg '
                                onInput={(e: any) => { setRoutineEmoji(e.target.value) }}
                            />
                            <select onInput={(e: any) => setRoutineType(e.target.value)} name="" id="" className='appearance-none p-[1rem] px-7 rounded-2xl trans-outline outline-none focus:outline-accent border-none bg-inputBg dark:bg-darkInputBg text-center'>
                                <option value="once">Repeat : Once</option>
                                <option value="daily">Repeat : Daily</option>
                                <option value="weekly">Repeat : Weekly</option>
                                <option value="monthly">Repeat : Monthly</option>
                                <option value="yearly">Repeat : Yearly</option>
                                <option value="calendar">Calendar Event</option>
                            </select>
                            {/* <img src={e.get('➕')} className='tap bg-inputBg dark:bg-darkInputBg h-[3.5rem] p-[0.8rem] rounded-2xl' /> */}
                        </div>
                        <div className="emojis flex gap-3 rounded-2xl flex-wrap justify-between items-center">
                            {emojiList.map((emoji, index) =>
                                <img src={e.get(emoji)}
                                    onClick={() => setRoutineEmoji(emoji)}
                                    className='tap bg-inputBg dark:bg-darkInputBg h-[3.2rem] p-[0.8rem] rounded-2xl' key={index}
                                />
                            )}
                        </div>
                        {RoutineMaker(routineType)}
                    </div>

                    <p className="warning mt-3 text-sm px-5 text-[red] text-center">Warning <TextEmoji emoji="⚠️"/> This Screen under development <TextEmoji emoji="🧑🏻‍💻"/>. If you add routine from here, you would not be able to delete or edit the routine <TextEmoji emoji="🤣" />. Because the options for deleting routine is not made yet <TextEmoji emoji="😝" />. So it's better not try to add routines <TextEmoji emoji="😆" />.</p>

                    <div className="btn w-full">
                        <button className="btn-full no-highlight tap99 w-full" onClick={addRoutine}>Add this Routine</button>
                    </div>
                </div>
            </section>
        </div>

    )
    function addRoutine() {
        // validate routine
        if (routineName.trim() === '') return alert('Routine name is required')
        if (routineDescription.trim() === '') return alert('Routine description is required')
        if (routineType === 'once' && !routine.time[0]) return alert('Routine time is required')

        let newRoutine = {
            name: routineName,
            description: routineDescription,
            emoji: routineEmoji || '🧑🏻',
            type: routineType,
            ...routine
        }

        // Save routine to local storage
        let routines = JSON.parse(ls.get('routines') || '[]')
        routines.push(newRoutine)
        ls.set('routines', JSON.stringify(routines))
        alert('Routine added successfully')
        navigate(-1)
    }


    function RoutineMaker(type: string) {
        if (type === 'once') return <Once updateRoutine={setRoutine} />

        else if (type === 'daily') return <div>ok</div>
        else return <div className="mt-16 text-center">
            <p>This screen is under development</p>
        </div>
    }
}


function parseEmoji(emoji: string) {
    if (!emoji) return ['🧑🏻']
    let emojis = [...new Intl.Segmenter().segment(emoji)].map(x => x.segment)
    return emojis
}



export default NewRoutine
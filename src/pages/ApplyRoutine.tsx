import { useNavigate } from "react-router-dom";
import images from "../assets/images/images";
import TextEmoji from "../components/TextEmoji";
// import routines from "../lib/sampleTypes";
import ls from '../lib/storage'
import { useState } from "react";



function deleteRoutineById(routineID: string) {
    let routines = JSON.parse(ls.get('routines') || '[]')
    const newRoutines: any = []
    routines.forEach((routine: any) => {
        if (routine.sub !== routineID) {
            newRoutines.push(routine)
        }
    })
    ls.set('routines', JSON.stringify(newRoutines))
}

export default function ApplyRoutine() {
    const navigate = useNavigate()
    const [routineID, setRoutineID] = useState<string>('BUIE-CSE-2')
    const [applyButtonText, setApplyButtonText] = useState<string>('Apply Routine')
    const [isApplyingRoutine, setIsApplyingRoutine] = useState<boolean>(false)
    return (
        <div className="screen applyRoutine-screen justify-between start-screen p-5 flex select-none flex-col gap-5 min-h-[100dvh] dark:text-darkText">
            <h1 className="text-dark dark:text-darkText text-[1.7rem] font-bold text-center mt-[3vh] p-5">
                Select your college or school <span>Routine</span> <br />
                <TextEmoji emoji="🏫" /> <TextEmoji emoji="📚" /> <TextEmoji emoji="🎒" />
            </h1>

            <img src={images.undraw_city_girl_ccpd} className="w-[90%] block mx-auto" />

            <div className="w-full flex flex-col gap-2">
                <p className="text-center text-base font-medium text-secondary pb-3">Select Preferred Routine</p>

                <select onInput={(e) => { setRoutineID((e.target as HTMLSelectElement).value) }} defaultValue='BUIE-CSE-2'
                    id="routines" name="routines" className="dark:bg-white/20 tap97 border-none outline-none p-3 py-5 appearance-none outline-accent rounded-xl input-bg font-medium text-center text-sm">
                    <option value="BUIE-CSE-2">BUIE-CSE 2nd Semester</option>
                </select>

                <p className="text-secondary text-xs text-center pt-1">Cannot find your college in the list? To enter routine code manually <span className="text-accent font-semibold underline">click here</span></p>
            </div>

            <div className="btnWrapper flex justify-between items-center w-full gap-3">
                <button onClick={() => { ls.set('startedUsing', 'yes'); navigate('/', { replace: true }); }} className="flex-[1.5] no-highlight select-none rounded-2xl bg-dark text-white  mx-auto block p-[1.3em] duration-150 active:scale-[0.98] text-sm">
                    Skip
                </button>
                <button onClick={() => applyRoutine(routineID)} className="flex-[2.5] no-highlight select-none rounded-2xl bg-accent text-white  mx-auto block p-[1.3em] duration-150 active:scale-[0.98] text-sm">
                    {applyButtonText}
                </button>
            </div>
        </div>
    )

    function applyRoutine(routineID: string) {
        if (routineID === '') return;
        let fetchedRoutines: any = null
        let fetchedSubscriptions: any = null
        if (isApplyingRoutine) return;
        setApplyButtonText('Applying Routine...')
        setIsApplyingRoutine(true)
        console.log('Downloading Routine...')

        const subscriptionDetailsFetch = fetch(`https://dataabinash.github.io/routine/${routineID}/info.json`)
            .then(res => res.json())
            .then(data => { fetchedSubscriptions = data })

        const routineFetch = fetch(`https://dataabinash.github.io/routine/${routineID}/routine.json`)
            .then(res => res.json())
            .then(data => { fetchedRoutines = data })

        Promise.all([subscriptionDetailsFetch, routineFetch]).then(() => {
            if (fetchedRoutines && fetchedSubscriptions) {
                console.log(fetchedRoutines, fetchedSubscriptions)
                const subscriptions = JSON.parse(ls.get('subscriptions') || '{}')
                if (subscriptions[routineID]) {
                    alert('You are already subscribed to this routine.')
                    return;
                } else {
                    subscriptions[routineID] = fetchedSubscriptions
                    ls.set('subscriptions', JSON.stringify(subscriptions))

                    // Add or update routines to the routine array
                    let routines = JSON.parse(ls.get('routines') || '[]')
                    // let newRoutines: any = []
                    // Delete old routine
                    // routines.forEach((routine: any) => {
                    //     if (routine.sub !== routineID) {
                    //         newRoutines.push(routine)
                    //     }
                    // })
                    // // Add new routines to the routine array
                    routines.push(...fetchedRoutines)
                    ls.set('routines', JSON.stringify(routines))
                    console.log('Routine Applied Successfully.')
                    ls.set('startedUsing', 'yes')
                    setApplyButtonText('Routine applied!')
                    setIsApplyingRoutine(false)
                    console.log('Navigate to /')
                    navigate('/', { replace: true })
                }
            } else {
                alert('Cannot find routine. Please check your internet connection and try again.')
                setApplyButtonText('Apply Routine')
                setIsApplyingRoutine(false)
            }
        })
    }

    function storeSubscriptionDetails(routineID: string) {
        console.log('Downloading Subscription Details...')

    }
}
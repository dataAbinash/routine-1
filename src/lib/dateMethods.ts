// Filter by date
export type Routine = {
    name: string,
    type: string,
    time: [string, string] | {
        date: number,
        month: number,
        time: [string, string]
    } | string | any,
    startTime: Date,
    endTime: Date,
    status: string,
    percentage: number,
    description: string,
    emoji: string,
    sub : string,
}

export function searchActiveRoutine(routines: Array<Routine | any>) {
    // Set the active routine
    const date = new Date()
    routines.forEach((routine: Routine, index) => {
        if (date > routine.endTime) {
            routine.status = 'done'
        } else if (routine.startTime < date && date < routine.endTime) {

            routine.status = 'active'
            const totalMS = routine.endTime.getTime() - routine.startTime.getTime()
            const currentMS = date.getTime() - routine.startTime.getTime()
            const percentage = Math.floor(currentMS * 100 / totalMS)
            routine.percentage = percentage
        }
    })
    if (routines.length > 0 && routines[0].status == 'done') {
        routines.push({
            name: 'Completed Today',
            type: 'notification',
        })
        const doneRoutines = []
        for (let i = 0; i < routines.length; i++)
            if (routines[i].status === 'done')
                doneRoutines.push(routines[i])
        routines.splice(0, doneRoutines.length)
        routines.push(...doneRoutines)
    }
}
export function searchByDate(date: Date, routines: Array<any>): Routine[] {
    const dayRoutines = []
    for (const id in routines) {
        const routine = routines[id]
        // addStartAndEndTime(routine, date)
        switch (routine.type) {
            case 'once':
                if (dayFilterOnce(routine, date)) dayRoutines.push(routine)
                break
            case 'daily':
                if (dayFilterDaily(routine, date)) dayRoutines.push(routine)
                break
            case 'weekly':
                if (dayFilterWeekly(routine, date)) dayRoutines.push(routine)
                break
            case 'monthly':
                if (dayFilterMonthly(routine, date)) dayRoutines.push(routine)
                break
            case 'yearly':
                if (dayFilterYearly(routine, date)) dayRoutines.push(routine)
                break
            case 'calender':
                if (dayCalendarFilter(routine, date)) dayRoutines.push(routine)
                break
            default:
                break
        }
    }
    dayRoutines.sort((a, b) => a.startTime - b.startTime)
    return dayRoutines
}

function dayCalendarFilter(routine: Routine, date: Date) {
    // Compare month, date and year
    let routineDate = new Date(routine.time)

    let y1 = date.getFullYear()
    let y2 = routineDate.getFullYear()

    let m1 = date.getMonth()
    let m2 = routineDate.getMonth()

    let d1 = date.getDate()
    let d2 = routineDate.getDate()
    if ((y1 === y2) && (m1 === m2) && (d1 === d2)) {
        routine.time = routineDate
        return true
    }
    return false
}

function dayFilterMonthly(routine: Routine, date: Date) {
    const currentDate = date.getDate()
    if (currentDate in routine.time) {
        const startTimeRoutine = timeSplitter(routine.time[currentDate][0])
        let endTimeRoutine = timeSplitter(routine.time[currentDate][1])
        if (startTimeRoutine)
            routine.startTime = getNewDateSetHM(date, startTimeRoutine)
        if (endTimeRoutine)
            routine.endTime = getNewDateSetHM(date, endTimeRoutine)
        return true
    }
    return false
}

function dayFilterYearly(routine: Routine, date: Date) {
    // Match month and date only
    const dt = date.getDate()
    const month = date.getMonth() + 1

    if (routine.time.month === month && routine.time.date === dt) {
        const startTimeRoutine = timeSplitter(routine.time.time[0])
        let endTimeRoutine = timeSplitter(routine.time.time[1])
        if (startTimeRoutine)
            routine.startTime = getNewDateSetHM(date, startTimeRoutine)
        if (endTimeRoutine)
            routine.endTime = getNewDateSetHM(date, endTimeRoutine)
        return true
    }
    return false
}

function dayFilterWeekly(routine: Routine, date: Date) {
    // Check if the key is available in the current week
    const currentDay = date.getDay()
    if (currentDay in routine.time) {
        const startTimeRoutine = timeSplitter(routine.time[currentDay][0])
        let endTimeRoutine = timeSplitter(routine.time[currentDay][1])
        if (startTimeRoutine)
            routine.startTime = getNewDateSetHM(date, startTimeRoutine)
        if (endTimeRoutine)
            routine.endTime = getNewDateSetHM(date, endTimeRoutine)
        return true
    }
    return false
}



function dayFilterDaily(routine: Routine, date: Date) {
    const startTimeRoutine = timeSplitter(routine.time[0])
    let endTimeRoutine = timeSplitter(routine.time[1])
    if (startTimeRoutine)
        routine.startTime = getNewDateSetHM(date, startTimeRoutine)
    if (endTimeRoutine)
        routine.endTime = getNewDateSetHM(date, endTimeRoutine)
    return true
}

function dayFilterOnce(routine: Routine, now: Date) {
    const startTime = new Date(routine.time[0])
    if (isSameDate(startTime, now)) {
        routine.startTime = startTime
        if (routine.time[1])
            routine.endTime = new Date(routine.time[1])
        return true
    }
    return false
}


type SplittedTime = { hour: number, minute: number } | null
function timeSplitter(time: string): SplittedTime {
    if (!time) return null
    const splitted = time.split(':')
    return {
        hour: +splitted[0],
        minute: +splitted[1],
    }
}
function getNewDateSetHM(date: Date, startOrEnd: SplittedTime) {
    const startDate = new Date(date)
    startDate.setHours(startOrEnd?.hour || 0)
    startDate.setMinutes(startOrEnd?.minute || 0)
    startDate.setSeconds(0)
    startDate.setMilliseconds(0)
    return startDate
}


function isSameDay(d1: Date, d2: Date) { return d1.getDay() === d2.getDay() }
function isSameDate(d1: Date, d2: Date) { return d1.getDate() === d2.getDate() }


export default searchByDate
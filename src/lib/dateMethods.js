// Filter by date
const routines = [
    {
        name: 'Take the cycle',
        type: 'once',
        time: ['2023-02-18T10:00', '2023-02-18T11:00']
    },
    {
        name: 'My Daily Routine',
        type: 'daily',
        time: ['20:00', '22:00']
    },
    {
        name: 'Math Class',
        type: 'weekly',
        time: {
            0: ['10:00', '11:00'],
            5: ['10:00', '11:00'],
        }
    },
    {
        name: 'Salary',
        type: 'monthly',
        time: {
            0: ['10:00', '11:00'],
            2: ['10:00', '11:00'],
            18: ['16:00', '20:00'],
        }
    },
    {
        name: 'This year',
        type: 'yearly',
        time: {
            date: 18,
            month: 2,
            time: ['11:00', '12:00']
        }
    }, {
        name: 'Event',
        type: 'calender',
        emoji: 'Happy',
        time: '2023-02-17'
    }
]


console.log(searchByDate(new Date(), routines))

function searchByDate(date, routines) {
    const todayRoutines = []
    for (const id in routines) {
        const routine = routines[id]
        // console.log(routines)
        switch (routine.type) {
            case 'once':
                if (todayFilterOnce(routine, date)) todayRoutines.push(routine)
                break
            case 'daily':
                todayRoutines.push(routine)
                break
            case 'weekly':
                if (todayFilterWeekly(routine, date)) todayRoutines.push(routine)
                break
            case 'monthly':
                if (todayFilterMonthly(routine, date)) todayRoutines.push(routine)
                break
            case 'yearly':
                if (todayFilterYearly(routine, date)) todayRoutines.push(routine)
                break
            case 'calender':
                if (todayCalendarFilter(routine, date)) todayRoutines.push(routine)
                break
            default:
                break
        }
    }

    // Now sort it by time


    return todayRoutines
}

function todayCalendarFilter(routine, date) {
    // Compare month, date and year
    let routineDate = new Date(routine.time)

    let y1 = date.getFullYear()
    let y2 = routineDate.getFullYear()

    let m1 = date.getMonth()
    let m2 = routineDate.getMonth()

    let d1 = date.getDate()
    let d2 = routineDate.getDate()
    return (y1 === y2) && (m1 === m2) && (d1 === d2)
}

function todayFilterMonthly(routine, date) {
    // check if the key is available in the current month
    return date.getDate() in routine.time
}

function todayFilterYearly(routine, date) {
    // Match month and date only
    const dt = date.getDate()
    const month = date.getMonth() + 1
    return routine.time.month === month && routine.time.date === dt
}

function todayFilterWeekly(routine, date) {
    // Check if the key is available in the current week
    return date.getDay() in routine.time
}

function todayFilterOnce(routine, now) {
    const startTime = new Date(routine.time[0])
    return isSameDate(startTime, now)
}

function isSameDay(d1, d2) { return d1.getDay() === d2.getDay() }
function isSameDate(d1, d2) { return d1.getDate() === d2.getDate() }
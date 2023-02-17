// Filter by date

function searchByDate(date, routines) {
    const todayRoutines = []
    for (const id in routines) {
        const routine = routines[id]
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
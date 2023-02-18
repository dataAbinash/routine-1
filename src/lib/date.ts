const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spe', 'Oct', 'Nov', 'Dec']
const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
function currentDate() {
    const date = new Date()
    return ` ${day[date.getDay()]}, ${date.getDate()}  ${months[date.getMonth()]} `
}
export function getTime(date: Date) {
    let hours = date.getHours()
    let ap = hours >= 12 ? 'PM' : 'AM'
    const minutes = date.getMinutes()
    if (hours > 12) {
        hours = hours - 12
    }
    return `${addZero(hours)}:${addZero(minutes)} ${ap}`
}
function addZero(n: number) {
    return n < 10 ? '0' + n : n
}


export default currentDate
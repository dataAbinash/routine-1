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

export default currentDate
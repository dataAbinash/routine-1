const routines = [
    {
        name: 'Take the cycle',
        type: 'once',
        time: ['2023-02-18T10:00', '2023-02-18T11:00'],
        description: 'Take the cycle to the shop',
        emoji: '🚲'
    },
    {
        name: 'My Daily Routine',
        type: 'daily',
        time: ['19:00', '22:00'],
        description: 'My Daily Routine to do exercise and other stuff',
        emoji: '🏃‍♂️'
    },
    {
        name: 'Math Class',
        type: 'weekly',
        time: {
            0: ['10:00', '11:00'],
            6: ['10:00', '11:00'],
        },
        description: 'Math Class on Monday and Saturday by PRD sir',
        emoji: '📚'
    },
    {
        name: 'Salary',
        type: 'monthly',
        time: {
            0: ['10:00', '11:00'],
            2: ['10:00', '11:00'],
            17: ['10:00', '11:00'],
        },
        description: 'Salary on 1st, 3rd and 18th of every month',
        emoji: '💰'
    },
    {
        name: 'This year',
        type: 'yearly',
        time: {
            date: 18,
            month: 2,
            time: ['11:00', '12:00']
        },
        description: 'This year on 18th Feb',
        emoji: '🎂'
    }, {
        name: 'Event',
        type: 'calender',
        emoji: '',
        time: '2023-02-18',
        description: 'Event on 18th Feb',
    }, {
        name: 'JavaScript Coding Challenge',
        type: 'calender',
        emoji: '🧑🏻‍💻',
        time: '2023-02-18T10:00',
        description: 'JavaScript Coding Challenge on 18th Feb at 10:00',
    }   
]
export default routines
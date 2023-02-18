const routines = [
    {
        name: 'Take the cycle',
        type: 'once',
        time: ['2023-02-18T10:00', '2023-02-18T11:00']
    },
    {
        name: 'My Daily Routine',
        type: 'daily',
        time: ['10:00', '11:00']
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
            17: ['10:00', '11:00'],
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
        time: '2023-02-18'
    }
]
export default routines
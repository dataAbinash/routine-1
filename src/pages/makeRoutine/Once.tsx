import React from 'react'
import { useState, useEffect } from 'react'
import { getISODate } from '../../lib/date'

function Once({ updateRoutine }: { updateRoutine: any }) {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [startTime, setStartTime] = useState(getISODate(tomorrow))
    const [endTime, setEndTime] = useState<any>()
    useEffect(() => {
        updateRoutine({ time: [startTime, endTime] })
    }, [startTime, endTime])

    function setEndTimeAsStartTime(e: any) { if (!endTime) setEndTime(e.target.value) }

    return (<div>
        <div className="inputTime mt-2 flex flex-col gap-2 w-full">
            <div className="top flex-1">
                <p className='text-sm text-secondary pl-1 pb-1'>Start Date and Time</p>
                <input
                    defaultValue={startTime}
                    onChange={(e: any) => { setStartTime(e.target.value); setEndTimeAsStartTime(e) }}
                    type="datetime-local"
                    className='input-time w-full bg-inputBg dark:bg-darkInputBg appearance-none text-center'
                />
            </div>
            <div className="bottom flex-1">
                <p className='text-sm text-secondary pl-1 pb-1'>End Date and Time</p>
                <input
                    defaultValue={endTime}
                    onChange={(e: any) => setEndTime(e.target.value)}
                    type="datetime-local"
                    className='input-time w-full bg-inputBg dark:bg-darkInputBg appearance-none text-center'
                />
            </div>
        </div>

    </div>
    )
}

export default Once
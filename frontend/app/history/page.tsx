'use client'
import TaskCard from '@/components/TaskCard'
import { FiCalendar } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { TiWeatherSunny } from 'react-icons/ti'

const History = () => {

    const [historyData, setHistoryData] = useState<any>({})

    useEffect(() => {
        const stored = localStorage.getItem("tasksByDate")

        if (stored) {
            setHistoryData(JSON.parse(stored))
        }

    }, [])

    // convert object → array of [date, tasks]
    const entries = Object.entries(historyData).reverse()

    return (
        <div className='relative'>

            {/* header */}
            <div className="bg-[#4b2e1e] w-full h-16 grid px-2 fixed top-0">
                <div className="flex items-center justify-between h-18">
                    <h1 className="text-white font-semibold">History</h1>
                    <FiCalendar size={20} className="text-white" />
                </div>
            </div>

            <div className='bg-[#F5EFE6] w-full min-h-screen rounded-t-2xl p-3 mt-16'>

                {
                    entries.length === 0 ? (
                        <p className="text-gray-400 text-sm">No history yet</p>
                    ) : (
                        entries.map(([date, tasks]: any) => (
                            <div key={date} className="mb-4">

                                {/* date */}
                                <p className='text-sm font-bold text-[#4b2e1e] mb-2'>
                                    {date}
                                </p>

                                {/* tasks */}
                                <div className='grid gap-2'>
                                    {
                                        tasks.map((task: any) => (
                                            <TaskCard
                                                key={task.id}
                                                id={task.id}
                                                title={task.title}
                                                timing={`${task.timing} ${task.format.toUpperCase()}`}
                                                completed={task.completed}
                                                Icon={TiWeatherSunny}
                                                readonly
                                            />
                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    )
                }

            </div>
        </div>

    )
}

export default History

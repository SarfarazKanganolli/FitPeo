import React from 'react'


import DocAppoint from "@/data/upcomingAppoint.js"


const UpcomingSchedule = ({}) => {



    return (
        <div className='mt-10 bg-[#f5f9ff] px-5 text-[#3834a8] font-medium'>
            <h1 className='text-xl'>The Upcoming Schedule</h1>


            {DocAppoint.map((schedules, idx) => (
                <div key={idx} className=' pt-5'>
                    <h1 className='text-gray-400 text-base'>{`On ${schedules.title}`}</h1>
                    <div className='flex  gap-x-5 py-4 flex-wrap gap-y-2'>


                        {schedules.schedule.map((task, index) => (
                            <div key={index} className='text-sm flex flex-col gap-y-1 bg-[#dee3fa] px-7 py-5 rounded-3xl'>
                                <div className='flex gap-x-4'>   
                                    <p>{task.appoint}</p>
                                    <img className='w-6' src={task.imgSrc} alt="" />
                                 
                                </div>

                                <p>{task.time}</p>
                            </div>

                        ))}
                    </div>

                </div>
            ))}
        </div>
    )
}

export default UpcomingSchedule
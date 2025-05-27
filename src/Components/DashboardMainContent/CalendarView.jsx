import React from 'react'

import DoubleArrow from "@/assets/doubleArrow.svg"

import { doctor, apointDates } from "@/data/calendar.js"


const CalendarView = () => {

    const doctorName = "Dr.Kevin DJones";
   

    return (
        <div className='w-full h-auto flex flex-col lg:pr-5 '>
            <div className='py-5 px-5 flex justify-between items-center text-fitblue  ' >
                <h1 className='font-medium'>October 21</h1>
                <img className='w-20 h-5 text-fitblue' src={DoubleArrow} alt="" />
            </div>


            <div className='w-full grid-cols-7 grid place-items-center text-fitblue px-2 pb-5  '>
                {apointDates.map((days, idx) => (
                    <div key={idx} className='w-full text-center flex flex-col  gap-y-2 cursor-pointer rounded-2xl hover:bg-[#edf4ff] py-4'>
                        <p>{days.title}</p>
                        <p className='font-bold'>{days.date}</p>

                        <div className='pt-2 flex flex-col gap-y-3 px-2'>
                            {days.time.map((timer, index) => (
                                <p className='hover:bg-[#3733a6] hover:text-white text-[#3733a6] rounded-md ' key={index}>{timer}</p>
                            )
                            )}
                        </div>



                    </div>
                ))}

            </div>

            <div className='flex gap-y-3 flex-wrap w-full px-2 py-5 gap-x-2 '>
                {doctor.map((doctor, index) => (
                    <div key={index} className={`w-auto text-sm flex flex-col gap-y-2 rounded-4xl font-medium cursor-pointer ${ doctorName != doctor.doctors ?  "bg-fitblue text-white" : "bg-fitlightblue text-fitblue"  } px-7 lg:px-10 py-3`}>
                        <div className='flex justify-between gap-x-4'>
                             <h1>{doctor.title}</h1>
                             <img className='w-8' src={doctor.imgSrc} alt="" />
                        </div>
                       
                        <p>{doctor.time}</p>
                        <p>{doctor.doctors}</p>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default CalendarView
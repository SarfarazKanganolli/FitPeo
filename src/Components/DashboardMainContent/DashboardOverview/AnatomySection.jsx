import React from 'react'

import Body from "@/assets/body.png"
import Arrow from "@/assets/arrow.svg"

import organs from '@/data/anatomy.js'
import { Progress } from "../../ui/avatar"

const AnatomySection = () => {


    return (
        <div className='flex flex-col px-2 lg:px-4 xl:px-8 lg:pt-0 sm:px-12 bg-white '>
            <div className='flex justify-between items-center text-fitblue'>
                <h1 className='py-5 text-2xl font-semibold '>Dashboard</h1>
                <p className='text-sm'>This Week </p>
            </div>

            <div className='w-full h-auto flex flex-col sm:justify-center  sm:flex-row lg:justify-between gap-x-5 lg:gap-x-5 '>

                <div className="relative w-full h-auto flex justify-center gap-x-5 pb-8">
                    <div className="relative">
                        <img
                            className="w-52 h-full lg:w-64 rounded-2xl object-cover "
                            src={Body}
                            alt=""
                        />

                        <h1 className="absolute top-[25%] right-[-30%] xl:top-[22%] xl:right-[-5%] 2xl:top-[20%] 2xl:right-[0%] text-xs lg:text-sm rounded-sm text-center px-2 py-1 bg-fitblue text-white whitespace-nowrap">
                            Healthy Heart
                        </h1>

                       
                        <h1 className="absolute top-[60%] left-[10%] xl:top-[50%] xl:left-[-5%] 2xl:top-[55%] 2xl:left-[10%] text-xs lg:text-sm rounded-sm text-center px-2 py-1 bg-fitblue text-white whitespace-nowrap">
                            Legs
                        </h1>
                    </div>
                </div>

                <div className='w-full sm:w-96 lg:w-[50%] h-auto flex flex-col gap-y-2'>
                    <div className='w-full lg:w-full sm:w-full flex flex-row overflow-x-scroll lg:overflow-x-hidden sm:flex-col gap-y-5 gap-x-5  '>
                        {organs.map((organ, idx) => (
                            <div key={idx} className='w-full lg:w-auto lg:px-5 bg-fitgray rounded-sm flex flex-col justify-center items-start px-5 gap-y-1  '>
                                <div className='flex items-center gap-x-5 '>
                                    <img className='py-4 w-12 ' src={organ.imgSrc} alt="" />
                                    <p>{organ.title}</p>
                                </div>

                              <Progress  barClassName={organ.color} className='lg:w-42 w-36' value={organ.health} />
                                <p className='pb-4'>{organ.date}</p>

                            </div>
                        ))}

                    </div>

                    <div className='flex gap-x-2 items-center text-fitblue self-end hover:opacity-65 cursor-pointer'>
                           <p className=' pb-2'>Details</p>
                           <img className='w-8 pb-1' src={Arrow} alt="" />
                    </div>
                 
                </div>


            </div>
        </div>
    )
}

export default AnatomySection
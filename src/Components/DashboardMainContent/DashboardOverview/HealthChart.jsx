import React from 'react'

import Chart from "@/assets/chart.png"


const HealthChart = () => {
  return (
    <div className='w-full h-auto my-10 px-10 '>

      <div className='w-full bg-fitgray rounded-xl py-5'>
        <div className='flex justify-between items-center px-5'>
                 <h1 className=' text-lg font-medium text-fitblue'>Activity</h1>
                 <p className='text-sm opacity-40'>3 Appointments on this week</p>
        </div>
 
        <img className='w-full h-60  mix-blend-multiply' src={Chart} alt="" />
      </div>

    </div>
  )
}

export default HealthChart
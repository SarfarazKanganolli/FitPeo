import React, { useState } from 'react'
import AppSidebar from './Components/AppSidebar'

import Header from './Components/Header'
import AnatomySection from './Components/DashboardMainContent/DashboardOverview/AnatomySection'
import CalendarView from './Components/DashboardMainContent/CalendarView'
import UpcomingSchedule from './Components/DashboardMainContent/UpcomingSchedule'
import HealthChart  from './Components/DashboardMainContent/DashboardOverview/HealthChart'


const App = () => {

  const [open, setOpen] = useState(false);


  return (
    <div className='w-full h-screen flex flex-col'>
      <div className="w-full h-auto relative">
        <Header toggleSidebar={() => setOpen(!open)} open={open} />
      </div>


      <div className='w-full h-full grid grid-cols-1 lg:grid-cols-5 over'>
        {open && (
          <div className="lg:hidden absolute  top-20 right-0 w-full h-full bg-white z-10 shadow-lg overflow-y-auto">

            <AppSidebar />
          </div>
        )}
        <div className='col-span-1 w-full sticky top-2 h-full lg:flex items-start hidden '>
          <AppSidebar />



        </div>

        <div className='col-span-2'>
          <AnatomySection />
          <HealthChart/>
        </div>

        <div className='col-span-2 bg-[#f5f9ff]'>
          <CalendarView />
          <UpcomingSchedule />
        </div>



      </div>
    </div>
  )
}

export default App
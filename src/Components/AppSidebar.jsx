
import Settings from "../assets/settings.svg"

import {tools ,items } from "@/data/sidebar.js"


export default function AppSidebar() {

  return (
    <div className="w-full h-auto flex flex-col bg-fitgray pl-10 pt-10 pb-20 top-0 sticky ">
      <h1 className="opacity-50">General</h1>

      <div className="w-full h-full pb-2">
        <ul className="flex flex-col gap-y-5 pt-5">
          {items.map((links, index) => (
            <div key={index} className="flex items-center gap-x-2  opacity-55 hover:opacity-90 cursor-pointer">
              <img className="w-6" src={links.icon} alt="" />
              <li >{links.title}</li>
            </div>

          ))}
        </ul>

        <ul className="flex flex-col gap-y-5 pt-10">
          <h1>Tools</h1>
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center gap-x-2 opacity-55 hover:opacity-90 cursor-pointer" >
              <img className="w-6" src={tool.icon} alt="" />
              <li >{tool.title}</li>
            </div>

          ))}
        </ul>

        <div className="flex pt-40 pb-7 gap-x-2 items-center  opacity-55 hover:opacity-90 cursor-pointer">
          <img className="w-6" src={Settings} alt="" />
          <h1>Settings</h1>
        </div>
      </div>



    </div>
  )
}


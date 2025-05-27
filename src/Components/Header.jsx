import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../Components/ui/avatar"
import Hamburger from "@/assets/hamburger.svg"
import Cross from "@/assets/cross.svg"

const Header = ({ toggleSidebar, open }) => {
    return (
        <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-5 bg-green-300'>

            {/* for Title */}
            <div className='h-20 col-span-1 text-2xl font-medium bg-fitgray flex justify-between px-10 items-center lg:pl-10'>
                <h1 className="text-2xl font-bold">
                    <span className="text-[#6cf4f8]">Health</span>
                    <span className="text-fitblue">care.</span>
                </h1>


                {/* Hamburger (mobile only) */}
                <div className="lg:hidden">
                    <img onClick={toggleSidebar} src={!open ? Hamburger : Cross} alt="Toggle Sidebar" className={`cursor-pointer ${!open ? "w-7 p-1" : "w-10"}`}/>
                </div>
            </div>

            {/* for elsethings */}
            <div className=' w-full lg:col-span-4 h-20 flex  bg-white px-5'>

                <div className='w-full xl:w-full h-full bg-white lg:col-span-2 flex gap-x-2 justify-center'>

                    <div className='items-center relative w-full lg:w-[90%] md:w-lg h-full flex  '>
                        <button className='absolute left-4 z-10 cursor-pointer'>
                            <svg width="20" height="40" viewBox="0 0 24 24" fill="none" stroke="#000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.5817 19 3 15.4183 3 11C3 6.5817 6.5817 3 11 3C15.4183 3 19 6.5817 19 11Z" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>

                        <input className='absolute w-full pl-14 text-lg bg-white h-10 outline-none border-gray-200 border-1 rounded-sm' type="text" />

                    </div>

                    <div className='pt-1'>
                        <svg className="cursor-pointer" width="30" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#3d15d1" fillRule="evenodd" clipRule="evenodd" d="M14.802 19.8317C15.4184 19.7699 15.8349 20.4242 15.5437 20.9539C15.3385 21.3271 15.0493 21.6529 14.7029 21.9197C14.3496 22.1918 13.9397 22.4006 13.5 22.5408C13.0601 22.6812 12.593 22.7522 12.1242 22.7522C11.6554 22.7522 11.1883 22.6812 10.7484 22.5408C10.3087 22.4006 9.8988 22.1918 9.5456 21.9197C9.1991 21.6529 8.9099 21.3271 8.7047 20.9539C8.4135 20.4242 8.83 19.7699 9.4464 19.8317C9.6387 19.851 11.1433 19.9981 12.1242 19.9981C13.1051 19.9981 14.6097 19.851 14.802 19.8317Z" />
                            <path fill="#3d15d1" fillRule="evenodd" clipRule="evenodd" d="M8.529 2.0876C10.7932 1.0045 13.4465 0.9676 15.7423 1.9874L15.9475 2.0785C18.3532 3.1471 19.8934 5.4622 19.8934 8.0096V9.273C19.8934 10.2885 20.1236 11.2918 20.5681 12.213L20.8335 12.7632C22.0525 15.29 20.465 18.2435 17.6156 18.7498L17.455 18.7783C13.93 19.4046 10.3154 19.4046 6.7904 18.7783C3.9027 18.2653 2.375 15.1943 3.7724 12.7115L3.9994 12.3082C4.5599 11.3124 4.8533 10.1981 4.8533 9.066V7.7923C4.8533 5.3744 6.277 3.1648 8.529 2.0876Z" />
                        </svg>

                    </div>

                </div>

                <div className='w-full lg:col-span-2 md:bg-white lg:bg-fitgray md:flex md:items-center gap-x-2 hidden justify-end '>
                    {/* avatar */}
                    <Avatar className="w-10 h-10 cursor-pointer ">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <button className='cursor-pointer'>
                        <svg fill="#3d15d1" width="60" height="60" viewBox="-9.89 -9.89 45.14 45.14" xmlns="http://www.w3.org/2000/svg" stroke="#3d15d1">
                            <path d="M23.86,0H1.5C0.673,0,0,0.671,0,1.5v22.361c0,0.828,0.672,1.5,1.5,1.5h22.36c0.828,0,1.5-0.672,1.5-1.5V1.5C25.36,0.671,24.688,0,23.86,0z M19.306,14.182h-5.125v5.125c0,0.83-0.672,1.5-1.5,1.5c-0.828,0-1.5-0.67-1.5-1.5v-5.125H6.056c-0.828,0-1.5-0.67-1.5-1.5c0-0.829,0.672-1.5,1.5-1.5h5.125V6.057c0-0.829,0.672-1.5,1.5-1.5c0.83,0,1.5,0.671,1.5,1.5v5.125h5.125c0.828,0,1.5,0.671,1.5,1.5C20.806,13.512,20.134,14.182,19.306,14.182z" />
                        </svg>

                    </button>

                </div>


                <div>

                </div>

            </div>
        </div>
    )
}

export default Header

// import React from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// const Header = () => {
//     return (
//         <div className='w-full h-20 bg-green-200 grid grid-cols-1 lg:grid-cols-6'>
//             <div className=' lg:col-span-1 text-2xl font-medium py-5 lg:py-0 bg-red-400 flex items-center pl-5 '>
//                 <h1>Healthcare. </h1>
//             </div>
//             <div className='lg:col-span-5 flex justify-between items-center bg-fuchsia-300'>
//                 <div className='bg-red-500 flex gap-2 my-5 lg:my-0 lg:gap-x-5 px-2'>
//                     <div className='relative w-full md:w-lg h-10 flex  '>
//                         <button className='absolute left-4 z-10 cursor-pointer'>
//                             <svg width="25px" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3d15d1">
//                                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
//                                 </g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
//                                     stroke="#v" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

//                         </button>


//                         <input className='absolute w-full pl-14 text-lg bg-white h-10 outline-none border-gray-200 border-1 rounded-sm' type="text" />

//                     </div>


//                     <div>
//                         <svg className='cursor-pointer' width="30px" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
//                             </g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="notification-bell">
//                                 <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"
//                                     d="M14.802 19.8317C15.4184 19.7699 15.8349 20.4242 15.5437 20.9539C15.3385 21.3271 15.0493 21.6529 14.7029 21.9197C14.3496 22.1918 13.9397 22.4006 13.5 22.5408C13.0601 22.6812 12.593 22.7522 12.1242 22.7522C11.6554 22.7522 11.1883 22.6812 10.7484 22.5408C10.3087 22.4006 9.89883 22.1918 9.54556 21.9197C9.1991 21.6529 8.90988 21.3271 8.70472 20.9539C8.41354 20.4242 8.83002 19.7699 9.44644 19.8317C9.63869 19.851 11.1433 19.9981 12.1242 19.9981C13.1051 19.9981 14.6097 19.851 14.802 19.8317Z" fill="#3d15d1">
//                                 </path> <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M8.52901 2.08755C10.7932 1.00445 13.4465 0.967602 15.7423 1.98737L15.9475 2.07851C18.3532 3.14707 19.8934 5.4622 19.8934 8.0096L19.8934 9.27297C19.8934 10.2885 20.1236 11.2918 20.5681 12.213L20.8335 12.7632C22.0525 15.29 20.465 18.2435 17.6156 18.7498L17.455 18.7783C13.93 19.4046 10.3154 19.4046 6.79044 18.7783C3.90274 18.2653 2.37502 15.1943 3.77239 12.7115L3.99943 12.3082C4.55987 11.3124 4.85335 10.1981 4.85335 9.06596L4.85335
//                                      7.79233C4.85335 5.3744 6.27704 3.16478 8.52901 2.08755Z" fill="#3d15d1"></path> </g> </g> </g></svg>
//                     </div>
//                 </div>

//                 <div className='md:flex  items-center gap-x-3 hidden '>
//                     {/* avatar */}
//                     <Avatar className="w-10 h-10 cursor-pointer ">
//                         <AvatarImage src="https://github.com/shadcn.png" />
//                         <AvatarFallback>CN</AvatarFallback>
//                     </Avatar>

//                     <button className='cursor-pointer'>
//                         <svg fill="#3d15d1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60" viewBox="-9.89 -9.89 45.14 45.14" xml:space="preserve" stroke="#3d15d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g>
//                             <path d="M23.86,0H1.5C0.673,0,0,0.671,0,1.5v22.361c0,0.828,0.672,1.5,1.5,1.5h22.36c0.828,0,1.5-0.672,1.5-1.5V1.5 C25.36,0.671,24.688,0,23.86,0z M19.306,14.182h-5.125v5.125c0,0.83-0.672,1.5-1.5,1.5c-0.828,0-1.5-0.67-1.5-1.5v-5.125H6.056 c-0.828,0-1.5-0.67-1.5-1.5c0-0.829,0.672-1.5,1.5-1.5h5.125V6.057c0-0.829,0.672-1.5,1.5-1.5c0.83,0,1.5,0.671,1.5,1.5v5.125 h5.125c0.828,0,1.5,0.671,1.5,1.5C20.806,13.512,20.134,14.182,19.306,14.182z">
//                             </path> </g> </g></svg>
//                     </button>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header
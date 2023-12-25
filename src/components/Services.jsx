import React from 'react'

function Services() {
  return (
    <>
      <div className="main-container py-16">
        <h1 className="text-5xl font-bold text-center underline">My Services</h1>
        <div className="service-container flex mt-12 space-x-6 px-10">
            <div className='bg-slate-100  cursor-pointer hover:bg-gray-100 p-5 text-center service  shadow-lg rounded-xl space-y-4'>
            <i class="text-5xl fa-brands fa-aws"></i>
                <h1 className='text-4xl'>Web development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, magnam doloribus! Vel, et reprehenderit. Rerum qui rem eum saepe cupiditate?</p>
                <button className='px-3 py-2 bg-orange-600 rounded-full shadow-lg text-2xl'>check</button>
            </div>
            <div className='bg-slate-100  cursor-pointer hover:bg-gray-100 p-5 text-center service shadow-lg rounded-xl space-y-4'>
            <i class="text-5xl fa-solid fa-mobile"></i>
                <h1 className='text-4xl'>Android development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, magnam doloribus! Vel, et reprehenderit. Rerum qui rem eum saepe cupiditate?</p>
                <button className='px-3 py-2 bg-orange-600 rounded-full shadow-lg text-2xl'>check</button>
            </div>
            <div className='bg-slate-100 cursor-pointer hover:bg-gray-100  p-5 text-center service  shadow-lg rounded-xl space-y-4'>
            <i class="text-5xl fa-solid fa-server"></i>
                <h1 className='text-4xl'>Backend development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, magnam doloribus! Vel, et reprehenderit. Rerum qui rem eum saepe cupiditate?</p>
                <button className='px-3 py-2 bg-orange-600 rounded-full shadow-lg text-2xl'>check</button>
            </div>
           
        </div>
      </div>
    </>
  )
}

export default Services

import React from 'react'
import bannerBackground from "../assets/Banner_wallpaper.svg";
function Expertice() {
  return (
    <>
      <div className="main-container mt-4">
        <h1 className=' mb-16 text-5xl font-bold underline text-center' >My Expertise</h1>

        <div 
         style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
        className="box-container flex  py-16">
            <div className='w-2/3  flex justify-center items-center  text-white'>
                <div className=' text-center space-y-4'>
                <h1 className='text-4xl font-bold'>I love These Technologies</h1>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fugit dolore <br/>
                expedita fugiat ex esse sint perspiciatis optio nam tempora!</p>
                <button className=' text-2xl px-4 py-3 bg-orange-600 rounded-full shadow-lg'>Hire me</button>
                </div>
            </div>
            <div className='w-2/3 flex justify-center'>
                <div className=' flex space-x-3 justify-center items-center flex-wrap'>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>Core Java</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>J2EE</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>Hibernate(ORM Tool)</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>Spring Boot</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>Spring Framework</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>Spring Security</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>Servlet</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>HTML</p>
                <p className='bg-gray-300 w-fit px-4 py-2  hover:bg-orange-500 cursor-pointer rounded-full'>CSS</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>JavaScript</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>ReactJS</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>MySQL</p>
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>RESTAPIES</p> 
                <p className='bg-gray-300 w-fit px-3 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>AWS Cloud</p> 
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>EC2</p> 
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>Deploying</p> 
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>Microservices</p> 
                <p className='bg-gray-300 w-fit px-4 py-2 hover:bg-orange-500 cursor-pointer  rounded-full'>MongoDB</p> 
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Expertice

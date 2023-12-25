import React, { useState } from 'react'
import bannerImage from "../assets/b1-modified.png"
function About() {
   const [data, setData]=useState({
    image:{bannerImage},
    title:"Java developer & Web developer",
    desc1:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione dignissimos non consequuntur, necessitatibus cumque possimus quos laboriosam nulla tempore! Neque!",
    desc2:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, doloribus minus labore officiis corporis vel aspernatur animi assumenda atque dolorum?",
    actionButton:{
      title:"Read More",
      url:"/read-more"
    }

   })

  return (
    <>
      <div className="maincontainter bg-gray-100 py-16">
        <h1 className='text-5xl pb-16 underline font-bold text-center'>About Me</h1>
        <div className='flex items-center'>
            <div className='w-full flex justify-center'>
                {/* image contanier */}
                <img src={bannerImage}  alt="" height={350} width={350} />
            </div>
            <div className='w-full flex justify-center'>
                {/* text container */}
                <div className='space-y-5 w-2/3'>
                <h1 className='text-5xl font-semibold'>{data.title}</h1>
                <p>{data.desc1}</p>
                <p>{data.desc2}

                </p>
                <br />
                <a href={data.actionButton.url}  className="bg-orange-600 text-white px-4 py-2 shadow rounded-full">{data.actionButton.title}</a>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default About

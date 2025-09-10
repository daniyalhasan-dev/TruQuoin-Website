import React from 'react'

const Footer = () => {
  return (
     <>
       <div className='bg-black rounded-t-3xl'>
        <div className='grid md:grid-cols-4 w-[80vw] mx-auto py-20 gap-8 md:text-left text-center'>
            <div className=''>
                <img src="logo.png" alt="" className="w-auto h-auto pb-5 md:mx-0 mx-auto" />
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   </p>
            </div>
            <div className=''>
                <h1 className='font-bold pb-10 text-[#EE5A02]'>TruQoin</h1>
                <ul className='space-y-4 text-white'>
                  <li><a href="">Earn</a></li>
                  <li><a href="">Trade</a></li>
                  <li><a href="">Spend</a></li>
                </ul>
            </div>
            <div className=''>
                <h1 className='font-bold pb-10 text-[#EE5A02]'>Company</h1>
                <ul className='space-y-4 text-white'>
                  <li><a href="">Doc</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className=''>
                <h1 className='font-bold pb-10 text-[#EE5A02]'>Web</h1>
                <img src="about2.png" alt="" />
            </div>
        </div>
       </div>
       
     </>
  )
}

export default Footer
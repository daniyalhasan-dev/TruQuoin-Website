import React from 'react'
import Navbar from './Navbar'
import Mobile from './Carousel'

export const Home = () => {
  return (
    <>
    <div  className='flex justify-center flex-col gap-2 items-center  mt-4 text-5xl font-medium'>
      <h1>Welcome to our </h1>
      <h1>Ecosystem!</h1>
    </div>
    <div className='text-center mt-10'>
      <p>TrūQoin™ – A Decentralized Autonomous Organization </p>
    </div>
    <div className='w-[80vw] mx-auto'>
      <img src="/banner.png" alt="Banner" className=''/>
    </div>
    <div className='flex flex-row justify-center gap-3 mt-10'>
      <img src="/userprofiles.png" alt="Profiles" />
      <h1 className='font-bold pt-1'>20k Verified Users</h1>
    </div>
    <div className='text-center'>
      <p>Rewarding activities – that build sustainable growth.</p>
      <button className='mt-7 border border-amber-700 px-18 py-2 rounded-lg hover:border-black duration-300 hover:text-amber-700'>Get Started</button>
    </div>
    <div className='flex justify-center flex-col items-center mt-30'>
      <h1 className='text-3xl font-bold'>Our Mission</h1>
      <p className='pt-4'>To simplify and normalize the acquisition and use of</p>
      <p>cryptocurrency and digital assets.</p>
    </div>
    <div className='lg:flex hidden w-[100%] max-w-[1076px] mx-auto gap-4 justify-center items-center pt-10'>
      <img src="/iPhone 1.png" alt="" className=' h-auto'/>
      <img src="/iPhone 2.png" alt="" />
      <img src="/iPhone 3.png" alt="" />
    </div>
    <div className='flex bg- h-screen  lg:hidden'>
          <Mobile/>

    </div>
    <div className='text-center'>One location – One App for all your digital assets</div>
    </>
  )
}

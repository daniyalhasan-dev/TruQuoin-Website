import React from 'react'

const Footer = () => {
  return (
     <>
       <div className='' style={{background:"linear-gradient(93deg,rgba(74, 74, 74, 1) 0%, rgba(32, 32, 32, 1) 100%)",}}>
        <div className='flex w-[80vw] mx-auto py-20'>
            <div className='w-[24vw]'>
                <img src="logo.png" alt="" className="w-auto h-auto pb-10" />
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   </p>
            </div>
            <div>
                <h1 className='font-bold'>TruQoin</h1>
            </div>
        </div>
       </div>
     </>
  )
}

export default Footer
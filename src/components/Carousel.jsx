import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Mobile = () => (
  <>
  <div className='px-4 bg-black'>

    <Carousel arrows style={{backgroundColor:"black", padding :""}} infinite={false}>
      <div className='w-[100%] flex justify-center items-center' >
        <img src="/iPhone 1.png" alt="iPhone" className=' mx-auto w-[320px]' />
      </div>
      <div className='w-[100%] flex justify-center items-center px-5' >
        <img src="/iPhone 2.png" alt="iPhone" className=' mx-auto w-[320px]' />
      </div>
      <div className='w-[100%] flex justify-center items-center' >
        <img src="/iPhone 3.png" alt="iPhone" className=' mx-auto w-[320px]' />
      </div>

      
    </Carousel>
  </div>
    
  </>
);
export default Mobile;
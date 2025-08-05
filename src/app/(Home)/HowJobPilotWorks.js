import Image from 'next/image'
import React from 'react'
import img from '../../Assets/Process.png'

const HowJobPilotWorks = () => {
  return (
    <>
      <div className='w-[100%] bg-[#f1f2f4] pt-[70px] pb-[70px]'>
        <div className='uni_container'>
            <h1 className='text-center text-[35px] font-[500]'>How jobpilot work</h1>
            <Image className='w-[100%] h-auto mt-[55px]' src={img} alt='bg_img'/>
        </div>
      </div>
    </>
  )
}

export default HowJobPilotWorks

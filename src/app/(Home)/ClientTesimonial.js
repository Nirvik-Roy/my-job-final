import React from 'react'
import ReactSlider from './ReactSlider'

const ClientTesimonial = () => {
     console.log(process.env.BASE_URL)
  return (
    <>
      <div className='bg-[#f1f2f4] w-[100%] pt-[70px] pb-[70px]'>
        <div className='uni_container'>
            <h1 className='text-[32px] font-[500] text-center'>Clients Testimonial</h1>
            <ReactSlider/>
        </div>
      </div>
    </>
  )
}

export default ClientTesimonial

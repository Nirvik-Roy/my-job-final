import React from 'react'
import '../../../Assets/Rectangle 43 (1).png'
import Image from 'next/image'
import logo from '../../../Assets/Rectangle 43 (1).png'
const page = () => {
  return (
    <>
      <div className='bg-[#fff] pt-[30px] pb-[50px]'>
        <div className='uni_container'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center gap-4'>
              <Image className='w-[80px]' src={logo} alt='logo' />
              <div className='flex flex-col gap-1 '>
                <h1 className='text-[25px] font-[500]'>Senior Ux Designer</h1>
                <div className='flex justify-between items-center gap-2'>
                  <div className='flex justiy-start items-center gap-1 '>
                    <i className="fa-solid fa-link text-[#0964c4] text-[12px]"></i>
                    <p className='text-[13px] text-[#808080]'>https://instagram.com</p>
                  </div>
                  <div className='flex justiy-start items-center gap-1 '>
                    <i className="fa-solid fa-phone text-[#0964c4] text-[12px]"></i>
                    <p className='text-[13px] text-[#808080]'>(406) 555-0120</p>
                  </div>
                  <div className='flex justiy-start items-center gap-1 '>
                    <i className="fa-solid fa-envelope text-[#0964c4] text-[12px]"></i>
                    <p className='text-[13px] text-[#808080]'>career@instagram.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <i className="fa-regular fa-bookmark text-[20px] text-[#0767d0] cursor-pointer "></i>
              <button className='w-[200px] bg-[#0767d0] text-[#fff] font-[500] pt-[11px] pb-[11px] cursor-pointer'>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page

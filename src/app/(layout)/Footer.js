import React from 'react'
import footerlogo from '../../Assets/Logo (1).png'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
      <div className='footer_wrapper bg-[#000] pt-[70px] pb-[70px]'>
        <div className='uni_container flex justify-between'>
          <div className='w-[25%]'>
            <Image src={footerlogo} className='w-[100px]' />
            <p className='text-gray-400 font-[400] text-[13px] mt-[20px]'>Call Now:<span className='text-[#fff] font-[500]'> (319) 555-0115</span></p>
            <p className='text-gray-400 font-[400] text-[13px] mt-[20px]'>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
          </div>
          <div className='w-[15%]'>
            <h1 className='text-[18px] font-[500] text-[#fff]'>Quick Link</h1>
            <p className='text-gray-400 font-[400] text-[14px] mt-[20px] cursor-pointer'>About</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Contact</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Pricing</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Blog</p>

          </div>
          <div className='w-[15%]'>
            <h1 className='text-[18px] font-[500] text-[#fff]'>Candidate</h1>
            <p className='text-gray-400 font-[400] text-[14px] mt-[20px] cursor-pointer'>Browse Jobs</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Browse Employers</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Candidate Dashboard</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Saved Jobs</p>
          </div>
          <div className='w-[15%]'>
            <h1 className='text-[18px] font-[500] text-[#fff]'>Employers</h1>
            <p className='text-gray-400 font-[400] text-[14px] mt-[20px] cursor-pointer'>Post a Job</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Browse Candidates</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Employers Dashboard</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Applications</p>
          </div>

          <div className='w-[15%]'>
            <h1 className='text-[18px] font-[500] text-[#fff]'>Support</h1>
            <p className='text-gray-400 font-[400] text-[14px] mt-[20px] cursor-pointer'>Faqs</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Privacy Policy</p>
            <p className='text-gray-400 font-[400] text-[14px] mt-[15px] cursor-pointer'>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className='bg-[#000] pt-[10px] pb-[10px] border border-t-gray-400'>
        <div className='uni_container flex justify-between items-center'>
          <p className='text-gray-400 font-[400] text-[12px] cursor-pointer'>@ 2024 MyJob - Job Portal. All rights Rserved</p>
          <div className='flex gap-4 justify-start items-center text-[15px]'>
            <i className="fa-brands fa-facebook-f text-gray-400"></i>
            <i className="fa-brands fa-youtube text-gray-400"></i>
            <i className="fa-brands fa-instagram text-gray-400"></i>
            <i className="fa-brands fa-x-twitter text-gray-400"></i>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
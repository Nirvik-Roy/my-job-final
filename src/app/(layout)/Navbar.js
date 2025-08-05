import Link from 'next/link'
import React from 'react'
import logo from '../../Assets/Logo.png'
import Image from 'next/image'
import flag from '../../Assets/image 1.png'
import search from '../../Assets/fi_search.png'
const Navbar = () => {
    return (
        <>
            <div className='bg-gray-200 pt-[8px] pb-[8px]'>
                <div className='uni_container flex justify-between align-items-center'>
                    <div className='flex justify-start align-items-center gap-5 text-[13px] font-normal text-gray-500'>
                        <Link href={'/'}>Home</Link>
                        <Link href={''}>Find Job</Link>
                        <Link href={''}>Employers</Link>
                        <Link href={''}>Candidates</Link>
                        <Link href={''}>Pricing Plans</Link>
                        <Link href={''}>Customer Supports</Link>
                    </div>
                    <div className='flex justify-start align-items-center gap-5'>
                        <div className='flex justify-start items-center gap-2' >
                            <i className="fa-solid fa-phone-volume text-[12px] "></i>
                            <p className='text-[13px] font-[500]'>+1-202-555-0178</p>
                        </div>
                    </div>
                </div>


            </div>


            <div className='bg-white-500 pt-[15px] pb-[15px] border-b-1 border-gray-300 '>
                <div className='uni_container flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-10 w-[65%]'>
                        <Image className='w-[100px]' src={logo} alt='company_logo ' />
                        <div className='flex  border items-center border-gray-300 w-[65%] h-[46px] ps-[10px] rounded rounded-[5px]'>
                            <div className='flex items-center justify-between w-[19%] h-[50%] border border-0 border-r-[1px] border-gray-300'>
                                <div className='flex items-center gap-2'>
                                    <Image className='w-[20px]' src={flag} alt='flag' />
                                    <p className='text-[14px]'>India</p>
                                </div>
                                <i className="fa-solid fa-angle-down text-gray-400 text-[12px] pr-5"></i>
                            </div>

                            <div className='relative w-[81%] h-[100%]' >
                                <input className='w-[100%] h-[100%] ps-[34px] text-[14px] outline-0' placeholder='Job tittle, keyword, company' type='text' />
                                <Image src={search} alt={search} className='w-[18px] top-[13px] left-[7px] absolute ' />
                            </div>


                        </div>

                    </div>


                    <div className='flex justify-start items-center gap-4'>
                        <button className='h-[45px] border border-blue-300 text-blue-600 rounded rounded-[5px] ps-[40px] pr-[40px] cursor-pointer font-[600]'>Sign In</button>
                        <button className='h-[45px] border border-blue-300 bg-[#0764c2] text-[#fff] font-[600] rounded rounded-[5px] ps-[40px] pr-[40px] cursor-pointer'>Post A Job</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
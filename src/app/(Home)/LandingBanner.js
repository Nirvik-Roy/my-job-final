import React from 'react'
import search from '../../Assets/fi_search.png'
import location from '../../Assets/fi_map-pin.png'
import bannerImg from '../../Assets/Illustration.png'
import icon from '../../Assets/Icon.png'
import icon2 from '../../Assets/Icon (1).png'
import icon3 from '../../Assets/Icon (2).png'
import Image from 'next/image'
const LandingBanner = () => {
    return (
        <>
            <div className='w-[100%] min-h-[75vh] pb-[50px] bg-[#f7f7f7]'>
                <div className='uni_container h-[100%]'>
                    <div className='w-[100%] pt-[50px] flex justify-between items-center'>
                        <div className='w-[50%] flex flex-col gap-[20px]'>
                            <h1 className='text-[40px]/[50px] font-[500] '>Find a job that suits your interest & skills.</h1>
                            <p className='text-[15px] text-gray-500 font-[400]'>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
                            <div className='w-[100%] bg-[#fff] rounded-[5px] ps-[20px] pt-[5px] pb-[5px] pr-[0px] h-[55px] flex items-center gap-2 '>
                                <div className='relative w-[37.5%] h-[50%] border border-0 border-r border-gray-300'>
                                    <input className='ps-[28px] pr-[10px]  text-[13px] outline-0' placeholder='Job tittle, Keyword...' />
                                    <Image className='absolute top-[3px] left-[0px] w-[20px]' src={search} alt='search_logo' />
                                </div>

                                <div className='relative w-[38%]  h-[50%]'>
                                    <input className='ps-[28px] pr-[10px] text-[13px] outline-0' placeholder='Your Location' />
                                    <Image className='absolute top-[3px] left-[0px] w-[20px]' src={location} alt='search_logo' />
                                </div>

                                <button className='h-[100%] bg-[#0a65cd] ps-[25px] pr-[25px] rounded-[5px] text-[#fff] font-[500]'>Find Job</button>
                            </div>
                            <p className='mt-[15px] text-[13px] text-gray-400'>Suggestion:<span className='text-[#000]'> Designer, Programing,</span><span className='text-[#0a65cd]'> Digital Marketing,</span><span className='text-[#000]'> Video,</span><span className='text-[#000]'>Animation</span></p>

                        </div>

                        <div className='w-[35%] flex justify-center'>
                            <Image src={bannerImg} className='w-[100%]' alt='bannerImg' />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[40px]'>
                        <div className='p-[10px] w-[24%] flex justify-start items-center gap-3 bg-[#fff] rounded-[5px] shadow-[0px 4px 4px 0px #0004c] '>
                            <Image className='w-[40px]' src={icon} alt='icon' />
                            <div>
                                <p className='font-[500] text-[18px]'>1,75,324</p>
                                <small className='font-[500] text-[12px] text-gray-500 '>Live Job</small>
                            </div>
                        </div>

                        <div className='p-[10px] w-[24%] flex justify-start items-center gap-3 bg-[#fff] rounded-[5px]'>
                            <Image className='w-[40px]' src={icon2} alt='icon' />
                            <div>
                                <p className='font-[500] text-[18px]'>97,354</p>
                                <small className='font-[500] text-[12px] text-gray-500 '>Companies</small>
                            </div>
                        </div>


                        <div className='p-[10px] w-[24%] flex justify-start items-center gap-3 bg-[#fff] rounded-[5px]'>
                            <Image className='w-[40px]' src={icon3} alt='icon' />
                            <div>
                                <p className='font-[500] text-[18px]'>38,47,154</p>
                                <small className='font-[500] text-[12px] text-gray-500 '>Candidates</small>
                            </div>
                        </div>


                        <div className='p-[10px] w-[24%] flex justify-start items-center gap-3 bg-[#fff] rounded-[5px]'>
                            <Image className='w-[40px]' src={icon} alt='icon' />
                            <div>
                                <p className='font-[500] text-[18px]'>7,532</p>
                                <small className='font-[500] text-[12px] text-gray-500 '>New Jobs</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LandingBanner

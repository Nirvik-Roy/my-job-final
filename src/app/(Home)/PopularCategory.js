import React from 'react'

const PopularCategory = () => {
    return (
        <>
            <div className='w-[100%] pt-[70px] pb-[70px]'>
                <div className='uni_container'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[30px] font-[500]'>Popular Category</h1>
                        <div className='flex justify-start items-center gap-2 cursor-pointer'>
                            <p className='text-[16px] font-[500] text-[#0767d0]'>View All</p>
                            <i className="fa-solid fa-arrow-right text-[#0767d0] text-[12px]"></i>
                        </div>

                    </div>
                    <div className='flex justify-between flex-wrap gap-y-[50px] mt-[40px]'>
                        <div className='w-[23%] p-[20px] flex justify-start items-center shadow shadow-[0px 4px 4px #000fc] gap-4'>
                            <div className='bg-[#e6effc] pt-[12px] pb-[12px] ps-[15px] pr-[15px] rounded rounded-[7px]'>
                                <i className="fa-solid fa-pen-nib  text-[#0a65cd]"></i>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <p className='font-[500] text-[15px]'>Graphics & Design</p>
                                <span className='font-[400] text-[13px] text-gray-600'>357 Open position</span>
                            </div>
                        </div>


                        <div className='w-[23%] p-[20px] flex justify-start items-center shadow shadow-[0px 4px 4px #000fc] gap-4'>
                            <div className='bg-[#e6effc] pt-[12px] pb-[12px] ps-[15px] pr-[15px] rounded rounded-[7px]'>
                                <i className="fa-solid fa-code  text-[#0a65cd]"></i>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <p className='font-[500] text-[15px]'>Code & Programing</p>
                                <span className='font-[400] text-[13px] text-gray-600'>312 Open position</span>
                            </div>
                        </div>




                        <div className='w-[23%] p-[20px] flex justify-start items-center shadow shadow-[0px 4px 4px #000fc] gap-4'>
                            <div className='bg-[#e6effc] pt-[12px] pb-[12px] ps-[15px] pr-[15px] rounded rounded-[7px]'>
                                <i className="fa-solid fa-bullhorn  text-[#0a65cd]"></i>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <p className='font-[500] text-[15px]'>Digital Marketing</p>
                                <span className='font-[400] text-[13px] text-gray-600'>297 Open position</span>
                            </div>
                        </div>


                        <div className='w-[23%] p-[20px] flex justify-start items-center shadow shadow-[0px 4px 4px #000fc] gap-4'>
                            <div className='bg-[#e6effc] pt-[12px] pb-[12px] ps-[15px] pr-[15px] rounded rounded-[7px]'>
                                <i className="fa-solid fa-tv  text-[#0a65cd]"></i>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <p className='font-[500] text-[15px]'>Video & Animation</p>
                                <span className='font-[400] text-[13px] text-gray-600'>247 Open position</span>
                            </div>
                        </div>


                        <div className='w-[23%] p-[20px] flex justify-start items-center shadow shadow-[0px 4px 4px #000fc] gap-4'>
                            <div className='bg-[#e6effc] pt-[12px] pb-[12px] ps-[15px] pr-[15px] rounded rounded-[7px]'>
                                <i className="fa-solid fa-music  text-[#0a65cd]"></i>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <p className='font-[500] text-[15px]'>Music & Audio</p>
                                <span className='font-[400] text-[13px] text-gray-600'>204 Open position</span>
                            </div>
                        </div>


                        <div className='w-[23%] p-[20px] flex justify-start items-center shadow shadow-[0px 4px 4px #000fc] gap-4'>
                            <div className='bg-[#e6effc] pt-[12px] pb-[12px] ps-[15px] pr-[15px] rounded rounded-[7px]'>
                                <i className="fa-solid fa-chart-simple  text-[#0a65cd]"></i>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <p className='font-[500] text-[15px]'>Account & Finance</p>
                                <span className='font-[400] text-[13px] text-gray-600'>167 Open position</span>
                            </div>
                        </div>


                        <div className='w-[23%] p-[20px] flex justify-start items-center shadow shadow-[0px 4px 4px #000fc] gap-4'>
                            <div className='bg-[#e6effc] pt-[12px] pb-[12px] ps-[15px] pr-[15px] rounded rounded-[7px]'>
                                <i className="fa-solid fa-briefcase-medical  text-[#0a65cd]"></i>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <p className='font-[500] text-[15px]'>Health & Care</p>
                                <span className='font-[400] text-[13px] text-gray-600'>125 Open position</span>
                            </div>
                        </div>


                        <div className='w-[23%] p-[20px] flex justify-start items-center shadow shadow-[0px 4px 4px #000fc] gap-4'>
                            <div className='bg-[#e6effc] pt-[12px] pb-[12px] ps-[15px] pr-[15px] rounded rounded-[7px]'>
                                <i className="fa-solid fa-database  text-[#0a65cd]"></i>
                            </div>
                            <div className='flex flex-col gap-0'>
                                <p className='font-[500] text-[15px]'>Data & Science</p>
                                <span className='font-[400] text-[13px] text-gray-600'>57 Open position</span>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCategory

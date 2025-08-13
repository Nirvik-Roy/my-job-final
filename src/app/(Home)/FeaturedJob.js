'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../Assets/Employers Logo.png'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import LoaderNew from '../LoaderNew'
const FeaturedJob = ({ jobList }) => {
    const router = useRouter();
    const [allJobs, setallJobs] = useState([])
    const { jobs, isloading, isError } = useSelector(state => state.AllJob)
    useEffect(() => {
        setallJobs(jobs)
        return (() => {
            setallJobs(null)
        })
    }, [jobs])
    return (
        <>
            {!jobList && <div className='pt-[70px] pb-[70px]'>
                <div className='uni_container'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[30px] font-[500]'>Featured job</h1>
                        <div className='flex justify-start items-center gap-2 cursor-pointer'>
                            <p className='text-[16px] font-[500] text-[#0767d0]'>View All</p>
                            <i className="fa-solid fa-arrow-right text-[#0767d0] text-[12px]"></i>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-8 mt-[40px]'>
                        {isloading && <LoaderNew />}
                        {isError && <p>No Jobs Found...</p>}
                        {allJobs?.map((e, i) => {
                            if (i < 10) {
                                return (
                                    <div onClick={(() => router.push('/single-job/2'))} key={i} className='w-[100%] flex justify-between items-center rounded rounder-[15px] p-[20px] border border-[#eaebf7]'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <Image src={logo} alt='logo_img' />
                                            <div className='flex flex-col gap-3'>
                                                <h1 className='text-[18px] font-[500]' style={{
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap'
                                                }}>{e.title}</h1>
                                                <div className='flex justify-start items-center gap-3'>
                                                    <div className='flex justify-start items-center gap-1'>
                                                        <i className="fa-solid fa-location-dot text-[#ccc] text-[12px]"></i>
                                                        <p className='text-[12px] font-[400] text-gray-600' style={{
                                                            textOverflow: 'ellipsis',
                                                            overflow: 'hidden',
                                                            whiteSpace: 'nowrap'
                                                        }}>{e.location}</p>
                                                    </div>
                                                    <div className='flex justify-start items-center gap-1'>
                                                        <i className="fa-solid fa-dollar-sign text-[#ccc] text-[12px]"></i>
                                                        <p className='text-[12px] font-[400] text-gray-600'>{(300000 / 1000).toFixed(0)}k-{(500000 / 1000).toFixed(0)}K</p>
                                                    </div>
                                                    <div className='flex justify-start items-center gap-1'>
                                                        <i className="fa-solid fa-calendar text-[#ccc] text-[12px]"></i>
                                                        <p className='text-[12px] font-[400] text-gray-600'>4 Days Remaining</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <i className="fa-regular fa-bookmark text-[20px] text-[#0767d0] cursor-pointer "></i>
                                            <button className='w-[200px] bg-[#0767d0] text-[#fff] font-[500] pt-[11px] pb-[11px] cursor-pointer'>Apply Now</button>
                                        </div>
                                    </div>
                                )
                            }

                        })}

                    </div>
                </div>
            </div>}

            {jobList && <div className='pt-[0px] pb-[50px] bg-[#fff]'>
                <div className='uni_container'>
                    <div className='flex flex-col gap-y-8 mt-[20px]'>
                        {[1, 2, 3, 4, 5].map((e, i) => {
                            return (
                                <div onClick={(() => router.push('/single-job/2'))} key={i} className='w-[100%] flex justify-between items-center rounded rounder-[15px] p-[20px] border border-[#eaebf7] '>
                                    <div className='flex justify-start items-center gap-3'>
                                        <Image src={logo} alt='logo_img' />
                                        <div className='flex flex-col gap-3'>
                                            <h1 className='text-[18px] font-[500]'>Senior UX Designer</h1>
                                            <div className='flex justify-start items-center gap-3'>
                                                <div className='flex justify-start items-center gap-1'>
                                                    <i className="fa-solid fa-location-dot text-[#ccc] text-[12px]"></i>
                                                    <p className='text-[12px] font-[400] text-gray-600'>Australia</p>
                                                </div>
                                                <div className='flex justify-start items-center gap-1'>
                                                    <i className="fa-solid fa-dollar-sign text-[#ccc] text-[12px]"></i>
                                                    <p className='text-[12px] font-[400] text-gray-600'>$30K-$35K</p>
                                                </div>
                                                <div className='flex justify-start items-center gap-1'>
                                                    <i className="fa-solid fa-calendar text-[#ccc] text-[12px]"></i>
                                                    <p className='text-[12px] font-[400] text-gray-600'>4 Days Remaining</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <i className="fa-regular fa-bookmark text-[20px] text-[#0767d0] cursor-pointer "></i>
                                        <button className='w-[200px] bg-[#0767d0] text-[#fff] font-[500] pt-[11px] pb-[11px] cursor-pointer'>Apply Now</button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>}

        </>
    )
}

export default FeaturedJob

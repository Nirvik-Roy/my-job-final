'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../Assets/Employers Logo.png'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { GetApplyJobs } from '../Store/Slices/GetApplyJobSlice'
import LoaderNew from '../LoaderNew'
import Cookies from 'js-cookie'
const FeaturedJob = ({ jobList }) => {
    const router = useRouter();
    const [allJobs, setallJobs] = useState([])
    const { jobs, isloading } = useSelector(state => state.AllJob)
    const [findJobs, setfindJobs] = useState([]);
    const { getloadingData, applyJobsData } = useSelector(state => state.get_applyJobs)
    const [appliedJobsId, setappliedJobsId] = useState([])
    const { searchedJob, isError, isLoading } = useSelector(state => state.jobSearch)
    const { isLogin } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [noFilterJobsFound, setnoFilterJobsFound] = useState(false)
    useEffect(() => {
        if (applyJobsData?.length) {
            const ids = applyJobsData.map(el => el._id);
            setappliedJobsId(ids);
        } else {
            setappliedJobsId([]);
        }
        return () => setappliedJobsId([]);
    }, [applyJobsData, getloadingData]);

    useEffect(() => {
        const userType = Cookies.get('user_type');
        if (userType === 'JobSeeker' && jobs?.length > 0 && appliedJobsId?.length >= 0) {
            const filteredJobs = jobs.filter(e => !appliedJobsId.includes(e._id));
            setallJobs(filteredJobs.length ? filteredJobs : []);
            if (filteredJobs.length === 0) {
                setnoFilterJobsFound(true)
            }
        } else {
            setallJobs(jobs);
        }
    }, [jobs, appliedJobsId, isLogin]);


    useEffect(() => {
        if (searchedJob?.length > 0) {
            const filteredJobs = searchedJob.filter(e => !appliedJobsId?.includes(e._id))
            setfindJobs(filteredJobs.length ? filteredJobs : [])
            if (filteredJobs.length === 0) {
                setnoFilterJobsFound(true)
            }else{
                setnoFilterJobsFound(false)
            }
        } else if (isError) {
            setfindJobs(null)
        } else {
            const filteredJobs = jobs.filter(e => !appliedJobsId?.includes(e._id))
            setfindJobs(jobs.length ? filteredJobs : [])
            if (filteredJobs.length === 0) {
                setnoFilterJobsFound(true)
            }else{
                setnoFilterJobsFound(false)
            }
        }
    }, [searchedJob, isError, jobs, appliedJobsId])


    useEffect(() => {
        dispatch(GetApplyJobs())
    }, [])

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
                        {noFilterJobsFound && <p>No Recent Jobs Found</p>}
                        {allJobs?.map((e, i) => {
                            if (i < 10) {
                                return (
                                    <div onClick={(() => router.push(`/single-job/${e._id}`))} key={i} className='w-[100%] flex justify-between items-center rounded rounder-[15px] p-[20px] border border-[#eaebf7]'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <Image src={logo} alt='logo_img' />
                                            <div className='flex flex-col gap-3'>
                                                <h1 className='text-[18px] font-[500]' style={{
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap'
                                                }}>{e.jobTitle}</h1>
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
                        {isloading && <LoaderNew />}
                        {isLoading && <div style={{
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.5)',
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            zIndex: '8',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <LoaderNew />
                        </div>}
                        {/* {isError && <p>No Jobs Found...</p>} */}
                        {isError && <p>No Jobs Found...</p>}
                        {noFilterJobsFound && <p>No Recent Jobs Found</p>}
                        {findJobs?.map((e, i) => {
                            return (
                                <div onClick={(() => {
                                    router.push(`/single-job/${e._id}`)
                                })} key={i} className='w-[100%] flex justify-between items-center rounded rounder-[15px] p-[20px] border border-[#eaebf7]'>
                                    <div className='flex justify-start items-center gap-3'>
                                        <Image src={logo} alt='logo_img' />
                                        <div className='flex flex-col gap-3'>
                                            <h1 className='text-[18px] font-[500]' style={{
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap'
                                            }}>{e.jobTitle}</h1>
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


                        })}

                    </div>
                </div>
            </div>}

        </>
    )
}

export default FeaturedJob

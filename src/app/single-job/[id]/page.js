'use client'

import React, { useEffect, useState } from 'react'
import '../../../Assets/Rectangle 43 (1).png'
import Image from 'next/image'
import logo from '../../../Assets/Rectangle 43 (1).png'
import { useParams } from 'next/navigation'
import Cookies from 'js-cookie'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ApplyJob } from '../../Store/Slices/ApplyJobSlice'
import { useDispatch, useSelector } from 'react-redux'
const page = () => {
  const dispatch = useDispatch()
  const { applyLoading, appliedJobIds } = useSelector(state => state.apply_job)
  const [appliedJobs, setAppliedJobs] = useState([])
  const [singleJob, setSingleJob] = useState([])
  const { id } = useParams()
  const getJobsByID = async () => {
    const token = Cookies.get('job_token')
    if (token && id) {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/allJobs/${id}`);
        if (res?.data?.success == true) {
          setSingleJob([res.data?.payload.job])
        }
      } catch (err) {
        toast.error(err.response?.data?.message || err.message || 'Unexpected Error Occured')
      }
    }
  }
  useEffect(() => {
    getJobsByID()
  }, [])

  const handleApplyJob = (job_id) => {
    dispatch(ApplyJob({
      jobId: job_id
    }))
  }
  useEffect(() => {
    if (appliedJobIds.length > 0) {
      setAppliedJobs(appliedJobIds)
    }
    else {
      setAppliedJobs([])
    }
  }, [appliedJobIds, applyLoading])
  return (
    <>
      <div className='bg-[#fff] pt-[30px] pb-[50px]'>
        <div className='uni_container'>
          {singleJob?.map((e, i) => (
            <div key={e._id} className='flex justify-between items-center'>
              <div className='flex justify-start items-center gap-4'>
                <Image className='w-[80px]' src={logo} alt='logo' />
                <div className='flex flex-col gap-1 '>
                  <h1 className='text-[25px] font-[500]'>{e.jobTitle}</h1>
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
                <button onClick={(() => handleApplyJob(e._id))} className='w-[200px] bg-[#0767d0] text-[#fff] font-[500] pt-[11px] pb-[11px] cursor-pointer'>{appliedJobs.includes(e._id) ? 'Applied' : 'Apply Now'}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page

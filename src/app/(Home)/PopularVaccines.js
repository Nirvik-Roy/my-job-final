'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoaderNew from '../LoaderNew';

const PopularVaccines = () => {
    const { isloading, jobs, isError } = useSelector(state => state.AllJob);
    const [allJobs, setallJobs] = useState([])

    useEffect(() => {
        setallJobs(jobs)
        return (() => {
            setallJobs([])
        })
    }, [jobs])
    return (
        <>
            <div className='w-[100%] min-h-[50vh] pt-[50px] pb-[50px]'>
                <div className='uni_container'>

                    <h2 className='text-[30px] font-[500]'>Most Popular Vacancies</h2>
                    <div className='flex  mt-[50px] flex-wrap gap-[25px] items-center'>
                        {isloading && <LoaderNew />}
                        {isError && <p>No Jobs Found...</p>}
                        {allJobs?.map((e, i) => {
                            if (i < 20) {
                                return (
                                    <div className='w-[17.5%]' key={i}>
                                        <p className='font-[500]' style={{
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden'
                                        }}>{e.jobTitle}</p>
                                        <small className='text-[12px] text-gray-400'>45,904 Open Positions</small>
                                    </div>
                                )
                            }


                        })}
                    </div>
                </div>


            </div>
        </>
    )
}

export default PopularVaccines

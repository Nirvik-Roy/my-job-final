'use client'
import Image from 'next/image'
import search from '../../Assets/fi_search.png'
import location from '../../Assets/fi_map-pin.png'
import FeaturedJob from '../(Home)/FeaturedJob'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux'
import { AdvanceJobSearch } from '../Store/Slices/JobSearch'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

const page = () => {
    const dispatch = useDispatch();
    const token = Cookies.get('job_token')
    const SearchJobData = useSelector(state => state.jobSearch)
    const [inputValue, setInputValue] = useState({
        title: '',
        jobType: '',
        minSalary: '',
    })
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true
    };
    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (token) {
            if (inputValue.jobType != '' || inputValue.title != '' || inputValue.minSalary != '') {
                dispatch(AdvanceJobSearch(inputValue))
            } else {
                toast.error('Please fill all the fields')
            }
        }else{
            toast.error('plz login to search job')
        }

    }
    return (
        <>
            <div className='w-[100%] pt-[30px] pb-[30px] bg-[#f1f2f4]'>
                <div className='uni_container'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[20px] font-[600]'>Find Job</h1>
                        <p className='text-[14px]'><span className='text-[#808080]'>Home/ </span>Find job</p>
                    </div>
                    <div className='mt-[20px] w-[100%] bg-[#fff] rounded-[5px] ps-[20px] pt-[5px] pb-[5px] pr-[0px] h-[55px] flex items-center gap-2 '>
                        <div className='relative w-[29.2%] h-[50%] border border-0 border-r border-gray-300'>
                            <input onChange={handleChange} name='title' className='ps-[28px] pr-[10px]  text-[13px] outline-0' placeholder='Job tittle, Keyword...' />
                            <Image className='absolute top-[3px] left-[0px] w-[17px]' src={search} alt='search_logo' />
                        </div>

                        <div className='relative w-[29.2%]  h-[50%]'>
                            <select onChange={handleChange} name='jobType' className='ps-[28px] pr-[10px] text-[13px] outline-0 w-[100%]'>
                                <option>Job Type</option>
                                <option>Full-time</option>
                                <option>Internship</option>
                            </select>
                            <i className=" absolute top-[5px] left-[0px] text-[15px] text-[#0a65cd] fa-regular fa-user"></i>
                        </div>

                        <div className='relative w-[29.2%]  h-[50%]'>
                            <input onChange={handleChange} name='minSalary' className='ps-[28px] pr-[10px]  text-[13px] outline-0' placeholder='Min salary...' />
                            <i className=" absolute top-[5px] left-[0px] text-[15px] text-[#0a65cd] fa-solid fa-dollar-sign"></i>
                        </div>



                        <button onClick={handleSubmit} className='h-[100%] bg-[#0a65cd] ps-[25px] pr-[25px] rounded-[5px] text-[#fff] font-[500]'>Find Job</button>
                    </div>


                </div>
            </div>
            <div className='bg-[#fff] pt-[20px] '>
                <div className='uni_container'>
                    <div className='w-[100%] flex justify-end items-center gap-[10px]'>
                        <select className='w-[180px] text-[13px] outline-0 border border-1 border-[#ccc] rounded-[5px] pt-[10px] pb-[10px] ps-[10px] '>
                            <option>Latest</option>
                            <option>Old</option>
                        </select>

                        <select className='w-[180px] text-[13px] outline-0 border border-1 border-[#ccc] rounded-[5px] pt-[10px] pb-[10px] ps-[10px] '>
                            <option>12 per page</option>
                            <option>3 per page</option>
                            <option>6 per page</option>
                        </select>

                    </div>

                    <FeaturedJob jobList={true} />

                    <div className='w-[fit-content]] ms-[auto] mr-[auto] flex gap-3 justify-center pb-[100px] items-center cursor-pointer'>
                        <div className='w-[35px] h-[35px] bg-[#e7effa] rounded-[50%] text-[12px] flex justify-center items-center text-[#0a65cd]'>
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                        {[1, 2, 3, 4, 5].map((e, i) => (
                            <div key={i} className='w-[30px] h-[30px] bg-[#0a65cd] rounded-[50%] flex justify-center items-center text-[12px] text-[#fff]'>
                                <p>{e}</p>
                            </div>
                        ))}
                        <div className='w-[35px] h-[35px] bg-[#e7effa] rounded-[50%] text-[12px] flex justify-center items-center text-[#0a65cd]'>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page

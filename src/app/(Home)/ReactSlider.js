'use client'

import React from 'react'
import Slider from 'react-slick';
import rating from '../../Assets/Rating.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import admin from '../../Assets/Image (11).png'
import admin2 from '../../Assets/Image (12).png'
import admin3 from '../../Assets/Image (13).png'
const ReactSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: 60
    };
    return (
        <>
            <div className=' mt-[30px]'>
                <Slider {...settings}>
                    {[admin, admin2, admin3].map((e, i) => {
                        return (
                            <div key={i} className='w-[96%] min-w-[96%] max-w-[96%] pt-[30px] pb-[30px] ps-[20px] pr-[20px] bg-[#fff] rounded-[12px]'>
                                <Image src={rating} alt='rating_img' className='w-[40%]' />
                                <p className='text-[14px] text-gray-700 font-[400] mt-[10px] '>“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2 mt-5'>
                                        <Image src={e} className='w-[30px]' alt='admin_img' />
                                        <div className='flex flex-col gap-0'>
                                            <p className='font-[500] text-[12px]'>Robert Fox</p>
                                            <span className='text-400 text-gray-700 text-[10px]'>UI/UX Designer</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div>

        </>
    )
}

export default ReactSlider

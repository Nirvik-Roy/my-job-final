import React from 'react'

const PopularVaccines = () => {
    return (
        <>
            <div className='w-[100%] min-h-[50vh] pt-[50px] pb-[50px]'>
                <div className='uni_container'>
                    <h2 className='text-[30px] font-[500]'>Most Popular Vacancies</h2>
                    <div className='flex justify-between mt-[50px]'>
                        {[1, 2, 3, 4].map((e, i) => {
                            return (
                              
                                    <div key={i} className='w-[18%] flex flex-col gap-[30px]'>
                                        {[1, 2, 3].map((e, i) => (
                                            <div key={i}>
                                                <p className='font-[500]'>Anesthesiologists</p>
                                                <small className='text-[12px] text-gray-400'>45,904 Open Positions</small>
                                            </div>
                                        ))}


                                    </div>
                                
                            )
                        })}


                    </div>
                </div>


            </div>
        </>
    )
}

export default PopularVaccines

import React from 'react'

const Personal = () => {
    return (
        <>
            <div className='mt-[10px]'>
                <h2 className='text-[18px] font-[600]'>Basic Information</h2>
                <form className='flex flex-wrap gap-[20px] w-[100%] mt-[20px]'>
                    <div className='flex flex-col gap-[8px] w-[48%]'>
                        <label>Profile Picture</label>
                        <div className='border-dashed  border-[2] border-[#ccc] w-[100%] h-[180px] rounded-[8px] relative flex justify-center items-center'>
                            <input type='file' className='absolute top-0 left-0 w-[100%] h-[100%] opacity-[0]' />
                            <i className="fa-solid fa-arrow-up-from-bracket text-[50px]"></i>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px] w-[48%]'>
                        <label>Full Name</label>
                        <input placeholder='Enter full name...' className='w-[100%] h-[40px] bg-[transparent] rounded-[8px] border border-[#ccc] pr-[10px] pl-[10px] outline-none' />
                    </div>
                    <div className='flex flex-col gap-[8px] w-[48%]'>
                        <label>Title/Headline</label>
                        <input placeholder='Enter title...' className='w-[100%] h-[40px] bg-[transparent] rounded-[8px] border border-[#ccc] pr-[10px] pl-[10px] outline-none' />
                    </div>

                    <div className='flex flex-col gap-[8px] w-[48%]'>
                        <label>Experience</label>
                        <input placeholder='Enter your total experience...' className='w-[100%] h-[40px] bg-[transparent] rounded-[8px] border border-[#ccc] pr-[10px] pl-[10px] outline-none' />
                    </div>

                    <div className='flex flex-col gap-[8px] w-[48%]'>
                        <label>Educations</label>
                        <input placeholder='Enter your highest qualifactions...' className='w-[100%] h-[40px] bg-[transparent] rounded-[8px] border border-[#ccc] pr-[10px] pl-[10px] outline-none' />
                    </div>

                    <div className='flex flex-col gap-[8px] w-[48%]'>
                        <label>Personal Website</label>
                        <input placeholder='Enter your portfolio link ' className='w-[100%] h-[40px] bg-[transparent] rounded-[8px] border border-[#ccc] pr-[10px] pl-[10px] outline-none' />
                    </div>
                    <button className='text-[#fff] text-[16px] font-[500] pt-[12px] pb-[12px] pl-[40px] pr-[40px] bg-[#0a65cd] cursor-pointer'>Save Changes</button>
                </form>

                <div className='mt-[20px] w-[100%]'>
                    <h2 className='text-[16px] font-[400]'>Your Cv/Resume</h2>

                    <div className='flex flex-wrap gap-[20px] w-[100%] mt-[8px]'>
                        <div className='p-[20px] w-[250px] bg-[#F1F2F4] flex items-center gap-[8px] rounded-[8px] '>
                            <i className="fa-solid fa-file-pdf text-[#505050]"></i>
                            <div>
                                <p className='text-[12px] font-[500] mb-[-8px]'>Professional Resume</p>
                                <span className='text-[11px] font-[400] text-[#505050]'>3.5 MB</span>
                            </div>
                        </div>

                        <div className='p-[20px] w-[250px] border border-dashed border-[2] border-[#ccc] flex items-center gap-[8px] rounded-[8px] relative'>
                            <i className="fa-solid fa-arrow-up-from-bracket text-[#505050]" ></i>
                            <input type='file' className='w-[100%] h-[100%] absolute top-0 left-0 opacity-0'/>
                            <div>
                                <p className='text-[12px] font-[500] mb-[-8px]'>Add Cv/Resume</p>
                                <span className='text-[11px] font-[400] text-[#505050]'>Browse file or drop here. only pdf</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Personal

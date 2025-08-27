'use client'

import { useRouter } from 'next/navigation'

const DashboardSidebar = () => {
    const router = useRouter()
    return (
        <>
            <div className=" flex flex-col gap-6 w-[200px] border-r-1 border-[#ccc] pt-[20px] pb-[20px] pr-[20px] pl-[0px]">
                <div className="flex cursor-pointer items-center gap-2">
                    <i className="fa-solid fa-layer-group text-[#5e5e5e]"></i>
                    <p className="text-[12px] font=[600] text-[#5e5e5e] " onClick={(()=>router.push('/dashboard'))}>Overview</p>
                </div>

                <div className="flex cursor-pointer items-center gap-2">
                    <i className="fa-regular fa-user text-[#5e5e5e]"></i>
                    <p className="text-[12px] font=[600] text-[#5e5e5e] ">Employers Profile</p>
                </div>


                <div className="flex cursor-pointer items-center gap-2">
                    <i className="fa-solid fa-suitcase text-[#5e5e5e]"></i>
                    <p className="text-[12px] font=[600] text-[#5e5e5e]" onClick={(()=>router.push('/posted-job'))} >My Jobs</p>
                </div>

                <div className="flex cursor-pointer items-center gap-2">
                    <i className="fa-solid fa-arrow-right-from-bracket text-[#5e5e5e]"></i>
                    <p className="text-[12px] font=[600] text-[#5e5e5e] ">Log Out</p>
                </div>
            </div>
        </>
    )
}

export default DashboardSidebar

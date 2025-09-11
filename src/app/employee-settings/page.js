'use client'

import { useState } from "react"
import DashboardSidebar from "../dashboard/DashboardSidebar"
import Personal from "./Personal"
import EmployeeProfile from "./EmployeeProfile"

const page = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className="uni_container flex justify-between relative">
                <DashboardSidebar />
                <div className="dashboard_content" style={{
                    padding: '5px 50px 50px 50px',
                    width: '100%'
                }}>
                    <div className="flex gap-[20px] justify-start items-center mt-[10px] mb-[10px] cursor-pointer">
                        <div className="flex gap-[5px] justify-start items-center" onClick={(() => setToggle(false))}>
                            <i className="fa-regular fa-user text-[#0a65cd] text-[18px]"></i>
                            <p className="text-[#0a65cd] text-[16px] font-[400]" >Personal</p>
                        </div>
                        <div className="flex gap-[5px] justify-start items-center" onClick={(() => setToggle(true))}>
                            <i className="fa-solid fa-address-card text-[#0a65cd] text-[18px]"></i>
                            <p className="text-[#0a65cd] text-[16px] font-[400]" >Profile</p>
                        </div>
                    </div>
                    <hr className="text-[#ccc]" />
                    {!toggle && <Personal />}
                    {toggle && <EmployeeProfile />}
                </div>
            </div>
        </>
    )
}

export default page

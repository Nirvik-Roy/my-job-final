'use client'
import './Dashboard.css'
import DashboardSidebar from "./DashboardSidebar"
import Employers from './Employers'
const page = () => {
    return (
        <>

            <div className="uni_container flex justify-between  relative">
                <DashboardSidebar />
                <Employers/>
            </div>
            <p style={{
                color: '#505050',
                fontWeight: '500',
                padding: '10px 0px',
                textAlign: 'center',
                fontSize: '13px',
                borderTop: '1px solid #ccc'
            }}>@ 2025 MyJob - Job Portal. All rights Rserved</p>
        </>
    )
}

export default page

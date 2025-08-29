'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetPostedJobs } from "../Store/Slices/GetPostedJobsSlice"
import LoaderNew from "../LoaderNew"
import Cookies from "js-cookie"
import { DeletePostedJobs } from "../Store/Slices/DeletePostedJobsSlice"
import { toast } from "react-toastify"
import DashboardSidebar from "../dashboard/DashboardSidebar"
import '../dashboard/Dashboard.css'
import { useRouter } from 'next/navigation'
const page = () => {
    const { PostedJobsData, fetchedError, isLoading } = useSelector(state => state.postedJobs);
    const dispatch = useDispatch()
    const [postJobData, setpostJobData] = useState([])
    const userType = Cookies.get('user_type')
    const router = useRouter()
    const { deleteLoading, deleteError, deleteSuccess } = useSelector(state => state.deletePostedJob)
    useEffect(() => {
        if (userType == 'Employer') {
            dispatch(GetPostedJobs())
        }
    }, [deleteSuccess, deleteLoading, deleteError])
    useEffect(() => {
        if (PostedJobsData) {
            setpostJobData(PostedJobsData)
        } else {
            setpostJobData([])
        }
        return () => {
            setpostJobData([])
        }
    }, [PostedJobsData, isLoading, deleteLoading, deleteSuccess, deleteError])

    const DeleteJobs = (_id) => {
        if (userType === 'Employer' && _id) {
            dispatch(DeletePostedJobs(_id))
        } else {
            toast.error('Unexpected Error Occured....')
        }
    }
    return (
        <>
            <div className="uni_container flex justify-between relative">
                <DashboardSidebar />
                <div className="dashboard_content" style={{
                    padding: '0px 10px'
                }}>
                    <table className='block overflow-auto h-[70vh] mt-4'>

                        <thead className='sticky top-0'>
                            <tr>
                                <th className='w-[250px] min-w-[250px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px] rounded-[5px 0px 0px 5px]'>
                                    JOBS
                                </th>
                                <th className='w-[200px] min-w-[200px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                    JOB LEVEL
                                </th>
                                <th className='w-[180px] min-w-[180px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                    POST DATE
                                </th>
                                <th className='w-[135px] min-w-[135px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                    EDIT
                                </th>
                                <th className='w-[135px] min-w-[135px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                    DELETE
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {fetchedError && <p>No posted jobs found...</p>}
                            {postJobData?.map((e, i) => (
                                <tr key={e._id}>
                                    <td className='p-[15px] pb-[10px] border-b-1 border-[#ccc]'>
                                        <h5 className='font-[500] text-[14px] '>{e.jobTitle}</h5>
                                        <p className='text-[#8e8e8e] text-[400] text-[12px]'>{e.jobType} . ${e.minSalary / 1000}k-${e.maxSalary / 1000}k</p>
                                    </td>

                                    <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' >{e.jobLevel}</td>
                                    <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' >
                                        {new Date(e.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' ><i onClick={(()=>{router.push(`/edit-job/${e._id}`)})} className="fa-solid fa-pen-to-square cursor-pointer text-[lightgreen]"></i></td>
                                    <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' ><i onClick={(() => DeleteJobs(e._id))} className="fa-solid fa-trash cursor-pointer text-[red]"></i></td>
                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>

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

'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetPostedJobs } from "../Store/Slices/GetPostedJobsSlice"
import LoaderNew from "../LoaderNew"
import Cookies from "js-cookie"
import { DeletePostedJobs } from "../Store/Slices/DeletePostedJobsSlice"
import { toast } from "react-toastify"

const Employers = () => {
    const { PostedJobsData, fetchedError, isLoading } = useSelector(state => state.postedJobs);
    const dispatch = useDispatch()
    const [postJobData, setpostJobData] = useState([])
    const userType = Cookies.get('user_type')
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
            {isLoading && <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '8',
                background: 'rgba(0,0,0,0.5)',
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100vh'
            }}>
                <LoaderNew />
            </div>}
            <div className="dashboard_content" >
                <div className='flex flex-col'>
                    <h3 className='text-[15px] font-[500]'>Hello,Instagram</h3>
                    <small className='text-[#505050] text-[13px] font-[400]'>Here is your daily activities and applications</small>
                </div>

                <div className='flex gap-4 mt-4'>
                    <div className='flex pt-[15px] pb-[15px] pr-[15px] pl-[15px] justify-between rounded-[5px] w-[31%] bg-[#e7effa]'>
                        <div className='flex flex-col'>
                            <strong className='font-[500] text-[20px]'>589</strong>
                            <small>Open Jobs</small>
                        </div>

                        <div className='flex pt-[10px] pb-[10px] pr-[15px] pl-[15px] rounded-[5px] justify-center items-center  bg-[#fff]'>
                            <i className=" text-[#0c65cd] fa-solid fa-suitcase"></i>
                        </div>
                    </div>

                    <div className='flex pt-[15px] pb-[15px] pr-[15px] pl-[15px] justify-between rounded-[5px] w-[31%] bg-[#fff6e5]'>
                        <div className='flex flex-col'>
                            <strong className='font-[500] text-[20px]'>62</strong>
                            <small>Posted Jobs</small>
                        </div>

                        <div className='flex pt-[10px] pb-[10px] pr-[15px] pl-[15px] rounded-[5px] justify-center items-center  bg-[#fff]'>
                            <i className=" text-[orange] fa-solid fa-suitcase"></i>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-4'>
                    <h6 className='font-[600] text-[16px]' >Recently Posted Jobs</h6>
                    <p className='text-[14px] text-[#505050]'>View All</p>
                </div>

                <table className='block overflow-auto h-[50vh] mt-4'>

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
                            <th className='w-[120px] min-w-[120px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                EDIT
                            </th>
                            <th className='w-[120px] min-w-[120px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
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
                                <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' ><i className="fa-solid fa-pen-to-square cursor-pointer text-[lightgreen]"></i></td>
                                <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' ><i onClick={(() => DeleteJobs(e._id))} className="fa-solid fa-trash cursor-pointer text-[red]"></i></td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Employers

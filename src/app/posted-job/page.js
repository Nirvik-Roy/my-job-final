import Employers from "../dashboard/Employers"
import DashboardSidebar from "../dashboard/DashboardSidebar"
import '../dashboard/Dashboard.css'
const page = () => {
    return (
        <>
            <div className="uni_container flex justify-between relative">
                <DashboardSidebar />
                <div className="dashboard_content" style={{
                    padding:'0px 10px'
                }}>
                    <table className='block overflow-auto h-[70vh] mt-4'>
                        <thead className="sticky top-0">
                            <tr>
                                <th className='w-[250px] min-w-[250px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px] rounded-[5px 0px 0px 5px]'>
                                    JOBS
                                </th>
                                <th className='w-[200px] min-w-[200px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                    TYPE
                                </th>
                                <th className='w-[180px] min-w-[180px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                    POST DATE
                                </th>
                                <th className='w-[120px] min-w-[120px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                    EDIT
                                </th>
                                <th className='w-[150px] min-w-[150px] text-left font-[400] text-[12px] text-[#505050] bg-[#f1f2f4] pt-[8px] pl-[15px] pb-[8px]'>
                                    DELETE
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
                                <tr key={e}>
                                    <td className='p-[15px] pb-[10px] border-b-1 border-[#ccc]'>
                                        <h5 className='font-[500] text-[14px] '>UI/UX Designer</h5>
                                        <p className='text-[#8e8e8e] text-[400] text-[12px]'>Full Time . $150k-$350k</p>
                                    </td>

                                    <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' >Full Time</td>
                                    <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' >7th October 1969</td>
                                    <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' ><i className="fa-solid fa-pen-to-square cursor-pointer text-[lightgreen]"></i></td>
                                    <td className='font-[400] text-[14px] p-[15px] pb-[10px] border-b-1 border-[#ccc]' ><i className="fa-solid fa-trash cursor-pointer text-[red]"></i></td>
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

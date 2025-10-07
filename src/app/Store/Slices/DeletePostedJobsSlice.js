import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const DeletePostedJobs = createAsyncThunk('DeletePostedJobs', async (job_id,{rejectWithValue}) => {
    const token = Cookies.get('job_token');
    const userType = Cookies.get('user_type');
    if (token && userType === 'Employer' && job_id) {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}job/cancel-job/${job_id}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            if (res.data?.success) {
                toast.success('Job removed successfully...')
                return res.data
            }
        } catch (err) {
            toast.error(err.response.data.message || err.message || 'Job can not be removed')
            return rejectWithValue('')
        }
    } else {
        return rejectWithValue('')
    }
})


const DeletePostedJobsSlice = createSlice({
    name:'deletePostedJob',
    initialState:{
        deleteLoading:false,
        deleteError:false,
        deleteSuccess:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(DeletePostedJobs.pending,(state,action)=>{
            state.deleteLoading = true,
            state.deleteError = false,
            state.deleteSuccess = false
        })
        builder.addCase(DeletePostedJobs.fulfilled,(state,action)=>{
            state.deleteLoading = false,
            state.deleteError = false,
            state.deleteSuccess = true
        })
        builder.addCase(DeletePostedJobs.rejected,(state,action)=>{
            state.deleteError = true,
            state.deleteLoading = false,
            state.deleteSuccess =false
        })
    }
})

export default DeletePostedJobsSlice.reducer;
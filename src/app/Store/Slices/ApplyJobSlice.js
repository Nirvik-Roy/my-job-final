import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const ApplyJob = createAsyncThunk('ApplyJob', async (job_id) => {
    const token = Cookies.get('job_token');
    const userType = Cookies.get('user_type');
    if (token && userType === 'JobSeeker' && job_id) {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}job/apply-job`, job_id, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            if (res) {
                toast.success(res.data.message)
            }
            return res.data

        } catch (err) {
            toast.error(err.response.data.message)
            return rejectWithValue(err.response?.data.message || "Something went wrong");
        }
    } else {
        toast.error('Please login as a jobSeeker to apply')
        return rejectWithValue('Please login as a jobSeeker to apply')
    }
})

const ApplyJobSlice = createSlice({
    name: 'apply_job',
    initialState: {
        applyLoading: false,
        applyError: false,
        appliedJobIds: []
    },
    extraReducers: (builder) => {
        builder.addCase(ApplyJob.pending, (state) => {
            state.applyLoading = true;
            state.applyError = false;
        })
        builder.addCase(ApplyJob.fulfilled, (state, action) => {
            state.applyLoading = false;
            state.applyError = false;
            state.appliedJobIds = action.payload?.payload?.jobIds
        })
        builder.addCase(ApplyJob.rejected, (state, action) => {
            state.applyLoading = false;
            state.applyError = true;
        })
    }

})

export default ApplyJobSlice.reducer


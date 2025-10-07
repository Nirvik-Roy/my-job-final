import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const GetApplyJobs = createAsyncThunk('GetApplyJobs', async (_,{rejectWithValue}) => {
    const token = Cookies.get('job_token');
    if (token) {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/applied-jobs`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            return res?.data
        } catch (err) {
            console.log(err)
        }
    } else {
        return rejectWithValue('Please login as a jobSeeker to apply')
    }
})

const GetApplyJobSlice = createSlice({
    name: 'get_applyJobs',
    initialState: {
        getloadingData: false,
        getApplyError: false,
        applyJobsData: []
    },
    extraReducers: (builder) => {
        builder.addCase(GetApplyJobs.pending, (state, action) => {
            state.getloadingData = true
            state.getApplyError = false
        })
        builder.addCase(GetApplyJobs.fulfilled, (state, action) => {
            state.getloadingData = false,
                state.getApplyError = false
            state.applyJobsData = action.payload.payload?.applied_jobs
        })
        builder.addCase(GetApplyJobs.rejected, (state, action) => {
            state.getloadingData = false,
                state.getApplyError = true
        })
    }
})

export default GetApplyJobSlice.reducer;
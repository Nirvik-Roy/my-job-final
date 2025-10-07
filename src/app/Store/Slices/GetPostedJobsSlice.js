import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const GetPostedJobs = createAsyncThunk('GetPostedJobs', async (_,{rejectWithValue}) => {
    const token = Cookies.get('job_token');
    const userType = Cookies.get('user_type');
    if (token && userType === 'Employer') {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/posted-jobs`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            if (res.data?.success) {
                return res.data
            }
        } catch (err) {
            console.log(err.message || 'Unexpected Error Occured')
            return rejectWithValue('Please login as a jobSeeker to apply')
        }
    } else {
        return rejectWithValue('Please login as a jobSeeker to apply')
    }
})


const GetPostedJobsSlice = createSlice({
    name: 'postedJobs',
    initialState: {
        isLoading: false,
        fetchedError: false,
        PostedJobsData: []
    },
    extraReducers: (builder) => {
        builder.addCase(GetPostedJobs.pending, (state, action) => {
            state.isLoading = true,
                state.fetchedError = false
        })
        builder.addCase(GetPostedJobs.fulfilled, (state, action) => {
            state.isLoading = false,
            state.fetchedError = false,
            state.PostedJobsData = action.payload?.payload
        })
        builder.addCase(GetPostedJobs.rejected, (state, action) => {
            state.isLoading = false,
                state.fetchedError = true,
                state.PostedJobsData = []
        })
    }
})

export default GetPostedJobsSlice.reducer;
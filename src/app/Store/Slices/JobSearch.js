const { createSlice, createAsyncThunk, isRejectedWithValue } = require("@reduxjs/toolkit");
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const JobSearch = createAsyncThunk('JobSearch', async (searchParams) => {
    const token = Cookies.get('job_token')
    if (token) {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/allJobs?search=${searchParams}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return res?.data
        } catch (err) {
            return rejectWithValue(err.response?.data || "Something went wrong");
        }
    }
})

export const AdvanceJobSearch = createAsyncThunk('AdvanceJobSearch', async (searchParams) => {
    const { jobType, minSalary, title } = searchParams
    const token = Cookies.get('job_token')
    if (token) {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/allJobs?jobTitle=${title}&jobType=${jobType}&minSalary=${minSalary}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return res?.data
        } catch (err) {
            toast.error(err.response.data.message || err.message || 'Unexpected Error Occured')
            return rejectWithValue(err.response?.data || "Something went wrong");
        }
    }
})

const JobSearchSlice = createSlice({
    name: 'jobSearch',
    initialState: {
        searchedJob: [],
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(JobSearch.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(AdvanceJobSearch.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(JobSearch.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchedJob = action.payload?.payload?.jobs
            state.isError = false
        })
        builder.addCase(AdvanceJobSearch.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchedJob = action.payload?.payload?.jobs
            state.isError = false
        })
        builder.addCase(JobSearch.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true,
                state.searchedJob = []
        })
        builder.addCase(AdvanceJobSearch.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true,
            state.searchedJob = []
        })
    }
})

export default JobSearchSlice.reducer
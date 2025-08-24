const { createSlice, createAsyncThunk, isRejectedWithValue } = require("@reduxjs/toolkit");
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const JobSearch = createAsyncThunk('JobSearch', async (searchParams) => {
    const token = Cookies.get('job_token')

    if (token) {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/allJobs?limit=${searchParams?.limit || 12}&search=${searchParams?.searchTitle}&page=${searchParams?.currentPage || 1}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return res?.data
        } catch (err) {
            return rejectWithValue(err.response?.data || "Something went wrong");
        }
    } else {
        toast.error('Plz Login to search jobs')
        return rejectWithValue("Something went wrong");
    }
})

export const AdvanceJobSearch = createAsyncThunk('AdvanceJobSearch', async (searchParams) => {
    const { advancesearchParams, value } = searchParams
    const token = Cookies.get('job_token')
    if (token) {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/allJobs?jobTitle=${advancesearchParams?.title || ''}&jobType=${advancesearchParams?.jobType || ''}&minSalary=${advancesearchParams?.minSalary || ''}&limit=${value?.limit || 12}&page=${value?.currentPage || 1}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return res?.data
        } catch (err) {
            toast.error(err.response.data.message || err.message || 'Unexpected Error Occured')
            return rejectWithValue(err.response?.data || "Something went wrong");
        }
    } else {
        toast.error('Plz Login to search jobs')
        return rejectWithValue("Something went wrong");
    }
})

const JobSearchSlice = createSlice({
    name: 'jobSearch',
    initialState: {
        searchedJob: [],
        isLoading: false,
        isError: false,
        searchTitle: '',
        searchJobType: '',
        searchMinSalary: '',
        advanceSearch: false,
    },
    reducers: {
        addSearchValue(state, action) {
            state.searchTitle = action?.payload;
        },
        addAdvanceSearchValue(state, action) {
            state.searchTitle = action.payload?.searchTitle || ''
            state.searchJobType = action.payload?.searchJobType || ''
            state.searchMinSalary = action.payload?.searchMinSalary || ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(JobSearch.pending, (state) => {
            state.isLoading = true
            state.isError = false
            state.advanceSearch = false
        })
        builder.addCase(AdvanceJobSearch.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
            state.advanceSearch = false
        })
        builder.addCase(JobSearch.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchedJob = action.payload?.payload?.jobs
            state.isError = false
            state.advanceSearch = false
        })
        builder.addCase(AdvanceJobSearch.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchedJob = action.payload?.payload?.jobs
            state.isError = false
            state.advanceSearch = true
        })
        builder.addCase(JobSearch.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true,
                state.searchedJob = []
            state.advanceSearch = false
        })
        builder.addCase(AdvanceJobSearch.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true,
                state.searchedJob = []
            state.advanceSearch = false
        })
    }
})

export default JobSearchSlice.reducer
export const { addSearchValue, addAdvanceSearchValue } = JobSearchSlice.actions
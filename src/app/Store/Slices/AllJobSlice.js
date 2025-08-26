import axios from "axios";
import { toast } from "react-toastify";
import { AdvanceJobSearch, JobSearch } from "./JobSearch";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const allJob = createAsyncThunk('allJob', async (pagi_params) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/allJobs?page=${pagi_params?.currentPage || 1}&limit=${(pagi_params?.limit) || 100}`);
        return res.data
    } catch (err) {
        toast.error(err.response?.data?.message)
        return rejectWithValue(err.response?.data || "Something went wrong");
    }
})

const AllJobSlice = createSlice({
    name: 'AllJob',
    initialState: {
        isloading: false,
        jobs: [],
        isError: false,
        pagination: {}
    },
    extraReducers: (builder) => {
        builder.addCase(allJob.pending, ((state) => {
            state.isloading = true;
            state.isError = false
        }))
        builder.addCase(allJob.fulfilled, ((state, action) => {
            state.isloading = false
            state.isError = false
            state.jobs = action.payload?.payload?.jobs
            state.pagination = action.payload.payload?.pagination
        }))
        builder.addCase(allJob.rejected, ((state, action) => {
            state.isloading = false;
            state.isError = true
            state.jobs = []
        }))

        builder.addCase(JobSearch.fulfilled, (state, action) => {
            state.isloading = false,
            state.isError = false,
            state.pagination = action.payload.payload?.pagination
        })

        builder.addCase(AdvanceJobSearch.fulfilled, (state, action) => {
            state.isloading = false,
                state.isError = false,
                state.pagination = action.payload.payload?.pagination
        })

    }
})

export default AllJobSlice.reducer

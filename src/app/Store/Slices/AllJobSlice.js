import axios from "axios";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const allJob = createAsyncThunk('allJob', async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/allJobs?limit=30`);
        return res.data
    } catch (err) {
        toast.error( err.response?.data?.message)
        return rejectWithValue(err.response?.data || "Something went wrong");
    }
})

const AllJobSlice = createSlice({
    name: 'AllJob',
    initialState: {
        isloading: false,
        jobs: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(allJob.pending, ((state) => {
            state.isloading = true;
        }))
        builder.addCase(allJob.fulfilled, ((state, action) => {
            state.isloading = false
            state.jobs = action.payload?.payload?.jobs
        }))
        builder.addCase(allJob.rejected, ((state, action) => {
            state.isloading = false;
            state.isError = true
        }))
    }
})

export default AllJobSlice.reducer

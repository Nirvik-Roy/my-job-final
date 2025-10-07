import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const SaveJob = createAsyncThunk('SaveJob', async (job_id,{rejectWithValue}) => {
    const token = Cookies.get('job_token');
    const userType = Cookies.get('user_type');

    if (token && userType === 'JobSeeker') {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}job/bookmark-job`, job_id, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            if (res?.data?.success) {
                toast.success(res?.data?.message||'Job Saved Succesfully')
                return res.data
            }
        } catch (err) {
            toast.error(err.response?.data.message || err.message||'Job not saved')
            return rejectWithValue(err.response?.data.message || "Something went wrong");
        }
    } else {
        toast.error('Plz login as a jobSeeker to apply/save jobs')
        return rejectWithValue("Something went wrong");
        
    }
})

const SaveJobSlice = createSlice({
    name: 'savedJob',
    initialState: {
        isLoading: false,
        isError: false,
        saveJobIds: []
    },
    extraReducers: (builder) => {
        builder.addCase(SaveJob.pending, (state, action) => {
            state.isLoading = true,
                state.isError = false
        })
        builder.addCase(SaveJob.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.saveJobIds= action.payload?.payload?.jobIds
        })
        builder.addCase(SaveJob.rejected, (state, action) => {
            state.isError = false;
            state.isLoading = false;
        })
    }
})

export default SaveJobSlice.reducer
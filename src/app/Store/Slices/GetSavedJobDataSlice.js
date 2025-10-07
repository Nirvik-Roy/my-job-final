import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const getSaveJobData = createAsyncThunk('getSaveJobData', async (_,{rejectWithValue}) => {
    const token = Cookies.get('job_token');
    const userType = Cookies.get('user_type');
    if (token && userType === 'JobSeeker') {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/bookmark-job`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            if (res?.data?.success) {
                return res.data
            }
        } catch (err) {
            toast.error(err.response?.data.message)
            return rejectWithValue(err.response?.data.message || "Something went wrong");
        }
    } else {
        return rejectWithValue( "Something went wrong");
    }
})

const GetSavedJobDataSlice = createSlice({
    name: 'getSavedJob',
    initialState: {
        isLoading: false,
        isError: false,
        savedJobdata:[]
    },
    extraReducers: (builder) => {
        builder.addCase(getSaveJobData.pending, (state, action) => {
            state.isLoading = true,
                state.isError = false
        })
        builder.addCase(getSaveJobData.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.savedJobdata = action.payload.payload?.applied_jobs || []
        })
        builder.addCase(getSaveJobData.rejected, (state, action) => {
            state.isError = false;
            state.isLoading = false;
        })
    }
})

export default GetSavedJobDataSlice.reducer
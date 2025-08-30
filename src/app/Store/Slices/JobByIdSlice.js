import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const JobByID = createAsyncThunk('JobByID', async (_idParams) => {
    const token = Cookies.get('job_token')
    if (token && _idParams) {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}job/allJobs/${_idParams}`,{
                headers:{
                    'Authorization': `${token}`
                }
            })
            if (res.data?.success) {
                return res.data
            }
        } catch (err) {
            toast.error(err.response.data?.message || err.message || 'Unxepected Error Occured')
            return rejectWithValue("Something went wrong");
        }
    } else {
        return rejectWithValue("Something went wrong");
    }
})

const JobByIDSlice = createSlice({
    name:'jobById',
    initialState:{
        jobLoading:false,
        jobError:false,
        jobIdData:[]
    },
    extraReducers:(builder)=>{
       builder.addCase(JobByID.pending,(state)=>{
        state.jobLoading = true,
        state.jobError = false
       })

       builder.addCase(JobByID.fulfilled,(state,action)=>{
        state.jobError = false,
        state.jobLoading = false
        state.jobIdData = action.payload.payload?.job
       })

       builder.addCase(JobByID.rejected,(state,action)=>{
        state.jobError = true,
        state.jobLoading = false,
        state.jobIdData = []
       })
    }
})

export default JobByIDSlice.reducer
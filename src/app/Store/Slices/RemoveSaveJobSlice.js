const { createSlice, createAsyncThunk, isRejectedWithValue } = require("@reduxjs/toolkit");
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const RemoveSaveJob = createAsyncThunk('RemoveSaveJob', async (id) => {
    const token = Cookies.get('job_token');
    const userType = Cookies.get('user_type')
    if (token && id && userType === 'JobSeeker') {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}job/bookmark-job/${id}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
             toast.success('Job Unsaved Success')
             return res.data
            
        } catch(err) {
             toast.error(err.message)
             console.log(err)
        }
    } else {
        toast.error('Plz login as JobSeeker to save/unsave jobs')
        return rejectWithValue("Something went wrong");
    }
})

const RemoveSaveJobSlice = createSlice({
    name:'removesaveJob',
    initialState:{
        removeLoading:false,
        isError:false,
        freshJobIds:[]
    },

    extraReducers:(builder)=>{
        builder.addCase(RemoveSaveJob.pending,(state)=>{
            state.removeLoading = true,
            state.isError = false,
            state.freshJobIds=[]
        })

        builder.addCase(RemoveSaveJob.fulfilled,(state,action)=>{
            state.removeLoading=false,
            state.isError = false,
            state.freshJobIds = action.payload.payload?.jobIds
        })

        builder.addCase(RemoveSaveJob.rejected,(state,action)=>{
            state.removeLoading=false,
            state.isError=true,
            state.freshJobIds=[]
        })
    }
})

export default RemoveSaveJobSlice.reducer
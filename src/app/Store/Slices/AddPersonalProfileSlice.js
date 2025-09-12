import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const AddPersonalProfile = createAsyncThunk('AddPersonalProfile', async (profileData) => {
    const token = Cookies.get('job_token');
    if (profileData && token) {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}user/add-personal-profile`, profileData, {
                headers: {
                    Authorization: `${token}`
                }
            })

            if (res?.data.success) {
                toast.success('User Profile Added Successfully');
                return res.data;
            }
        } catch (err) {
            toast.error(err.response?.data?.message || err.message || 'Profile Add/Update Failed');
            return rejectWithValue('')
        }
    } else {
        return rejectWithValue('')
    }
})


const AddPersonalProfileSlice = createSlice({
    name:'addUserProfile',
    initialState:{
        userProfileUpdating:false,
        userProfileUpdateFailed:false,
        userProfileData:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(AddPersonalProfile.pending,(state)=>{
            state.userProfileUpdating = true;
            state.userProfileUpdateFailed = false
        })
        builder.addCase(AddPersonalProfile.fulfilled,(state,action)=>{
            state.userProfileUpdateFailed = false,
            state.userProfileUpdating = false,
            console.log(action.payload)
        })
        builder.addCase(AddPersonalProfile.rejected,(state)=>{
            state.userProfileUpdateFailed = true,
            state.userProfileUpdating = false
        })
    }
})

export default AddPersonalProfileSlice.reducer
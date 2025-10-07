import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const FetchUserProfile = createAsyncThunk('FetchUserProfile', async (_,{rejectWithValue}) => {
    const token = Cookies.get('job_token');
    const userType = Cookies.get('user_type');
    if (token && userType === 'JobSeeker') {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}user/fetch-user-profile`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            if (res.status === 200) {
                toast.success('Job Fetched Success');
                return res.data
            }
        } catch (err) {
            toast.error(err.response?.data.message || err.message || 'Unexpected Error Occured');
            return rejectWithValue(err.response?.data.message || "Something went wrong");
        }
    } else {
        return rejectWithValue("Something went wrong");
    }
})


const fetchUserProfileSlice = createSlice({
    name: 'fetchUser',
    initialState: {
        isLoading: false,
        isError: false,
        userProfileData: []
    },
    extraReducers: (builder) => {
        builder.addCase(FetchUserProfile.pending, (state) => {
            state.isLoading = true,
                state.isError = false
        })

        builder.addCase(FetchUserProfile.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isError = false,
                state.userProfileData = action.payload.payload?.userProfile
        })

        builder.addCase(FetchUserProfile.rejected, (state, action) => {
            state.isError = true,
                state.isLoading = false,
                state.userProfileData = []
        })
    }
})

export default fetchUserProfileSlice.reducer
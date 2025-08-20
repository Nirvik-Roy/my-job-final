import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const Auth = createAsyncThunk('Auth', async (loginParams) => {
    const { formData } = loginParams
    if (formData) {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}user/login`, formData)
            toast.success(res?.data?.message)
            return res.data;
        } catch (err) {
            toast.error(err.response?.data?.message)
            return rejectWithValue(err.response?.data || "Something went wrong");
        }
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        isLoading: false,
    },
    reducers: {
        verifyToken(state, action) {
            const token = Cookies.get('job_token');
            if (token) {
                state.isLogin = true
            }
        },
        logout(state, action) {
            Cookies.remove('job_token');
            Cookies.remove('user_type')
            state.isLogin = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(Auth.pending, (state, action) => {
            state.isLoading = true;

        })
        builder.addCase(Auth.fulfilled, (state, action) => {
            if (action.payload.payload.accessToken) {
                state.isLogin = true;
                state.isLoading = false;
                Cookies.set('job_token', action.payload.payload.accessToken)
                Cookies.set('user_type', action.payload.payload.data.typeOfUser)
            }
        })
        builder.addCase(Auth.rejected, (state, action) => {
            state.isLoading = false;
            state.isLogin = false;
        })
    }
})
export const { verifyToken, logout } = AuthSlice.actions
export default AuthSlice.reducer;
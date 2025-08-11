import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Slices/AuthSlice';
import AllJobSlice from './Slices/AllJobSlice'

const store = configureStore({
    reducer:{
        auth: AuthSlice,
        AllJob:AllJobSlice
    }
})

export default store;
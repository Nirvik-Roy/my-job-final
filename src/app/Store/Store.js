import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Slices/AuthSlice';
import AllJobSlice from './Slices/AllJobSlice'
import JobSearchSlice from './Slices/JobSearch'
const store = configureStore({
    reducer:{
        auth: AuthSlice,
        AllJob:AllJobSlice,
        jobSearch:JobSearchSlice
    }
})

export default store;
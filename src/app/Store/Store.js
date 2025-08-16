import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Slices/AuthSlice';
import AllJobSlice from './Slices/AllJobSlice'
import JobSearchSlice from './Slices/JobSearch'
import ApplyJobSlice from './Slices/ApplyJobSlice'
import GetApplyJobSlice from './Slices/GetApplyJobSlice'
const store = configureStore({
    reducer: {
        auth: AuthSlice,
        AllJob: AllJobSlice,
        jobSearch: JobSearchSlice,
        apply_job: ApplyJobSlice,
        get_applyJobs:GetApplyJobSlice
    }
})

export default store;
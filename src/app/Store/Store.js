import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Slices/AuthSlice';
import AllJobSlice from './Slices/AllJobSlice'
import JobSearchSlice from './Slices/JobSearch'
import ApplyJobSlice from './Slices/ApplyJobSlice'
import GetApplyJobSlice from './Slices/GetApplyJobSlice'
import SaveJobSlice from './Slices/SaveJobSlice'
import GetSavedJobDataSlice from './Slices/GetSavedJobDataSlice'
import RemoveSaveJobSlice from './Slices/RemoveSaveJobSlice'
const store = configureStore({
    reducer: {
        auth: AuthSlice,
        AllJob: AllJobSlice,
        jobSearch: JobSearchSlice,
        apply_job: ApplyJobSlice,
        get_applyJobs:GetApplyJobSlice,
        savedJob:SaveJobSlice,
        getSavedJob:GetSavedJobDataSlice,
        removesaveJob:RemoveSaveJobSlice
    }
})

export default store;
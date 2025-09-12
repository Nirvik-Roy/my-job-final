import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const ImageUpload = createAsyncThunk('ImageUpload', async (Images) => {
    if (Images) {
        try {
            const formData = new FormData()
            formData.append('image', Images)
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}upload-image`, formData)
            if (res.data?.payload.imageUrl != '') {
                toast.success('Uploading Images....')
                return res.data
            }
        } catch (err) {
            toast.error(err.response.data.message || err.message || 'Image Uploading Failed');
            return rejectWithValue('')
        }
    } else {
        return rejectWithValue('')
    }
})


const ImageUploadSlice = createSlice({
    name:'imageUpload',
    initialState:{
        isUploading:false,
        isUploadingFailed:false,
        imgUrl:""
    },

    extraReducers:(builder)=>{
        builder.addCase(ImageUpload.pending,(state)=>{
            state.isUploading=true,
            state.isUploadingFailed=false
        
        })
        builder.addCase(ImageUpload.fulfilled,(state,action)=>{
            state.isUploading = false,
            state.isUploadingFailed = false,
            state.imgUrl = action.payload.payload?.imageUrl
        })
        builder.addCase(ImageUpload.rejected,(state,action)=>{
            state.isUploading = false,
            state.isUploadingFailed = true,
            state.imgUrl = ''
        })
    }
})

export default ImageUploadSlice.reducer
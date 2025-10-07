import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const PdfUpload = createAsyncThunk('PdfUpload', async (files,{rejectWithValue}) => {
    if (files?.length > 0) {
        try {
            const formData = new FormData();
            files.forEach((e) => {
                formData.append('documents', e)
            })

            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}upload-document`, formData)
            if (res?.data?.success) {
                toast.success('Uploading Pdf....')
                return res.data.payload.documents
            }
        } catch (err) {
            toast.error(err.response.data.message || err.message || 'Image Uploading Failed');
            return rejectWithValue('')
        }
    } else {
        return rejectWithValue('')
    }
})


const PdfUploadSlice = createSlice({
    name: 'pdfUpload',
    initialState: {
        isPdfUploading: false,
        isPdfUploadFailed: false,
        documents: [],
    },

    extraReducers: (builder) => {
        builder.addCase(PdfUpload.pending, (state) => {
            state.isPdfUploading = true,
                state.isPdfUploadFailed = false
        })
        builder.addCase(PdfUpload.fulfilled, (state, action) => {
            state.isPdfUploading = false,
                state.isPdfUploadFailed = false,
                state.documents = action.payload
        })
        builder.addCase(PdfUpload.rejected, (state) => {
            state.isPdfUploadFailed = true,
                state.isPdfUploading = false
        })
    }
})

export default PdfUploadSlice.reducer
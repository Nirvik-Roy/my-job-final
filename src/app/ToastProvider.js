'use client'

import React from 'react'
import { ToastContainer } from "react-toastify";
const ToastProvider = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default ToastProvider

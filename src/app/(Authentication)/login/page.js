'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Auth, verifyToken } from '../../Store/Slices/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
const page = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { isLogin ,isLoading} = useSelector(state => state.auth)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    //Handle Input Data
    const HandleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //Sending data to Login API
    const HandleSubmit = (e) => {
        e.preventDefault()
        if (formData.email != '' && formData.password != '') {
            dispatch(Auth({ formData: formData }))
        }
    }
    useEffect(() => {
        if (isLogin && !isLoading) {
            setTimeout(() => {
                router.push('/')
            }, 2000)
        }
    }, [isLogin,isLoading,router])
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>

                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        onChange={HandleChange}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        onChange={HandleChange}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end ">


                                <div className="text-sm">
                                    <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                                        Don't have a account ?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={HandleSubmit}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default page

import React from 'react'

const page = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Verify Your Identity
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        We sent a 6-digit code to your email for password reset
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                                    Verification Code
                                </label>
                                <div className="flex justify-between space-x-2">
                                    {[...Array(6)].map((_, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            maxLength={1}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            className="w-full h-12 text-center text-xl border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500">
                                    Enter the 6-digit code sent to your email
                                </p>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Verify & Continue
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="text-center text-sm">
                                <p className="text-gray-600">
                                    Didn't receive the code?{' '}
                                    <button className="font-medium text-blue-600 hover:text-blue-500">
                                        Resend Code
                                    </button>
                                </p>
                                <p className="mt-2 text-gray-600">
                                    Or{' '}
                                    <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                        return to login
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

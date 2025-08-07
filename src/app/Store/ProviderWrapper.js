'use client'
import React, { useEffect } from 'react'
import store from './Store'
import { Provider, useDispatch } from 'react-redux'
import { verifyToken } from './Slices/AuthSlice'

const ProviderWrapper = ({children}) => {
  return (
    <>
      <Provider store={store}>
            {children}
      </Provider>
    </>
  )
}

export default ProviderWrapper

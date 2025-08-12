import React from 'react'

const LoaderNew = () => {
    return (
        <>
            {/* <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                background: 'rgba(0,0,0,0.5)',
                height: '100vh',
                zIndex: '9',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
          
            </div> */}
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <span className='loader'></span>
            </div>


        </>
    )
}

export default LoaderNew

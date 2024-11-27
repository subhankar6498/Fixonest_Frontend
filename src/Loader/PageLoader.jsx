import React from 'react'
import { Watch } from 'react-loader-spinner'

const PageLoader = () => {

    return (
        <>
            <div className='center'>
                <div className='ring'></div>
                <span className='load_span'>Loading...</span>
            </div>

        </>
    )
}

export default PageLoader
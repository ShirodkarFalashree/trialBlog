import React from 'react'
import { Outlet } from 'react-router'

const Holder = () => {
  return (
    <div className='bg-yellow-500 w-[1290px] h-[649px]'>
        <Outlet />
    </div>  
  )
}

export default Holder
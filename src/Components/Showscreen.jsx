import React from 'react'
import { Articles } from './Articles'

export const Showscreen = ({children}) => {
  return (
    <div className='back w-full min-h-[100VH] pt-14 pb-12'>
            <Articles/>
            <Articles/>
            <Articles/>
            <Articles/>
            <Articles/>
            <Articles/>
            {children}
    </div>
  )
}

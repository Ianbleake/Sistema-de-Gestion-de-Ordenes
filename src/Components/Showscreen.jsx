import React from 'react'
import { Articles } from './Articles'

export const Showscreen = ({children}) => {
  return (
    <div className='back mt-14 mb-12 sm:'>
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

import React from 'react'
import { Banner } from "../Banner"
import { Articles } from "../Articles"
import { Navbar } from "../Navbar"

export const Layout = ({
    children
}) => {
    return (
        <div className='w-full min-h-[100VH] bg-green-100 flex flex-col relative'>
            <Banner />
            <Articles />
            {children}
            <Navbar />
        </div>
    )
}

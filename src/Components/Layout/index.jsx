import React from 'react'
import { Product } from '../Pages/Product'
import { Admin } from '../Pages/Admin'
import { Home } from '../Pages/Home'
import { Banner } from '../Banner'
import { Navbar } from '../Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className='w-full min-h-[100VH] bg-green-100 flex flex-col relative'>
            <BrowserRouter>
            <Banner/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
            <Navbar/>
            </BrowserRouter>
        </div>
    )
}

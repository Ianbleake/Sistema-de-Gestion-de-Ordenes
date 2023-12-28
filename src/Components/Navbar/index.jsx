import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdList } from "react-icons/io";
import { IoMdBriefcase } from "react-icons/io";
import { IoMdBasket } from "react-icons/io";

export const Navbar = () => {
    return (
        <footer className='w-full h-12 bg-emerald-700 text-white fixed bottom-0 z-50 flex justify-around items-center'>
                <a href="/"><IoMdHome className='h-32 w-10'/></a>
                <a href="/product"><IoMdList className='h-32 w-10'/></a>
                <a href="/admin"><IoMdBriefcase className='h-32 w-10'/></a>
                <a href="/carrito"><IoMdBasket className='h-32 w-10'/></a>
        </footer>
    )
}

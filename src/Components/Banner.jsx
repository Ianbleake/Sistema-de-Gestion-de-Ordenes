import React from "react";
import { Palmera} from "./Icons"
import { IoMdSearch } from "react-icons/io";

export const Banner = () => {
    return (
        <header className='bg-emerald-700 z-50 rounded-b-lg h-16 w-full flex justify-between items-center text-white font-varela text-2xl fixed'>
            <div id='Logo' className='flex flex-shrink p-4 items-center'>
                <div className='flex flex-1 h-max-auto'>
                    <Palmera
                        width={30}
                    />
                </div>
                <div><h1>Banner</h1></div>
            </div>
            <div className='p-2'>
                <button className="flex items-center justify-end">
                    <IoMdSearch className='h-32 w-10'/>
                </button>
            </div>
        </header>
    );
}

import React from "react";
import { Search, Palmera } from "./Icons"

export const Banner = () => {
    return (
        <header className='bg-nav rounded-b-lg h-16 flex justify-between items-center text-white font-varela text-2xl'>
            <div id='Logo' className='flex flex-shrink p-4 items-center'>
                <div className='flex flex-1 h-max-auto'>
                    <Palmera
                        width={30}
                    />
                </div>
                <div><h1>PlayaLinda</h1></div>
            </div>
            <div className='p-2'>
                <button className="flex items-center justify-end">
                    <Search
                        width={30}
                    />
                </button>
            </div>
        </header>
    );
}

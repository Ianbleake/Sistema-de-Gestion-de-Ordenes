import React from "react";
import { Search, Palmera} from "./Icons"

export const Banner = () => {
    return (
        <header className='bg-nav z-50 rounded-b-lg h-16 w-full flex justify-between items-center text-white font-varela text-2xl fixed'>
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
                    <Search
                        width={30}
                    />
                </button>
            </div>
        </header>
    );
}

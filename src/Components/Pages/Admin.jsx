import React from 'react'

export const Admin = () => {
  return (
    <div className='bg-slate-50 w-full min-h-[100VH] pt-16 pb-12 grid grid-cols-5'>
      <div id='Menu' className=' w-full h-[87VH] flex flex-col'>
        <div className='card h-32 mt-2'>A</div>
        <div className='card h-32 mt-2'>A</div>
        <div className='card h-32 mt-2'>A</div>
        <div className='card h-32 mt-2'>A</div>
        <div className='card h-32 mt-2'>A</div>
        <div className='card h-32 mt-2'>A</div>
      </div>
      <div id='Contenido' className='bg-gray-400 w-full h-[87VH] col-span-4'>

      </div>
    </div>
  )
}

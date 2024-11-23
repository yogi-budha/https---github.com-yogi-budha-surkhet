import React from 'react'
import ph from '../assets/ph1.jpg'

function Banner() {
  return (
    <div className='relative w-full flex justify-center items-center mt-10'>
    <img className='w-full md:w-[60%] rounded-3xl' src={ph} alt="" />
    <h1 className='absolute text-2xl md:text-4xl font-bold text-slate-800 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Welcome to Surkhet</h1>
    <p className='absolute text-sm md:text-lg lg:text-xl text-blue-900 font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Surkhet, located in the mid-western region of Nepal, is a captivating destination that offers a blend of natural beauty, cultural heritage, and adventure</p>
  </div>
  
  )
}

export default Banner
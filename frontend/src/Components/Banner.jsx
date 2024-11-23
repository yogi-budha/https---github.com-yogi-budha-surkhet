import React from 'react'
import ph from '../assets/ph1.jpg'

function Banner() {
  return (
    <div className='w-full flex justify-center items-center mt-10'>
        <img className='w-[60%] rounded-3xl ' src={ph} alt="" />
    </div>
  )
}

export default Banner
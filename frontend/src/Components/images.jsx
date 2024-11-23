import React from 'react'

function Images({image}) {

  console.log(image.image)
  return (
    <div className=' w-72 h-80 bg-slate-200 dark:bg-slate-600 shadow-2xl hover:scale-105 hover:ease-in-out duration-1000 rounded-2xl p-6 mt-10'>
      
      

 
      <div className=' w-full h-full flex flex-col gap-1 justify-between' >
        <div className='w-full h-full overflow-hidden'>

        <img className='  h-full object-cover  rounded-md  object-top'  src={`${import.meta.env.VITE_backendUrl}/uploads/${image.image}`} alt="" />
        </div>
       
        </div>
      </div>


      

   
  )
}

export default Images
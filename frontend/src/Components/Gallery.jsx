import React, { useContext, useState } from 'react'
import AllCard from './AllCard'
import Images from './images'
import { ProductDataProvider, productsData } from '../Context/Storeproduct'

function Gallery() {
    const {image,filterOut,fetchImage} = useContext(productsData)

    function categoryFilter(category){
        if(category == "All"){
            fetchImage()
        }else{

            filterOut(category)
            
        }
        }
    

    const [categoryBy,setCategoryBy] = useState(["All","Temple","Hospital","Campus","School","Church","Hotel","Others"])
  return (
    <div className='w-full flex justify-center items-center mb-16'>
        <div className='w-[70%]'>

        <h1 className='  m-10 text-blue-500 font-bold text-2xl' >Gallery</h1>

        <div className=' w-full flex justify-between mb-3 dark:text-slate-100'>

            {
                categoryBy.map((category,i)=>(
                    <p key={i} onClick={()=>categoryFilter(category)} className=' cursor-pointer font-semibold border border-slate-500 px-2 py-1 rounded-full hover:text-slate-500 hover:border-slate-400'>{category}</p>
                ))
            }

             

           
         
        </div>

        <div className='flex flex-wrap gap-4 justify-between items-center '>
            {
                
    image.map((images,i)=><Images key={i} image={images}/>)
}
        </div>

        </div>
        
        </div>
  )
}

export default Gallery
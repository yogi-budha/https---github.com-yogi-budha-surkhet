import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateProduct() {

  const [data,setData] = useState({name:"",description:"",image:"",category:""})
 
     function onChangeHandler(e){

      const {name,value} = e.target

      setData((prev)=>({...prev,[name]:value}))




     }

     function submitHandler(e){

      e.preventDefault()

      console.log(data)

      axios.post(`${import.meta.env.VITE_API_URL}/api/product`,data).then((res)=>{
   if(res.data.success== true){
      toast(res.data.message)
      setData({name:"",description:"",image:"",category:""})
    }


      })

     }


  return (
    <>
    <h1 className='text-center text-2xl md:text-3xl text-slate-700 dark:text-white'>ADDED A NEW AREA</h1>
  
    <div className='flex justify-center mt-4'>
      <div className='bg-slate-300 dark:bg-slate-600 rounded-md px-4 py-5 shadow-lg w-full md:w-[50%] lg:w-[35%]'>
        <ToastContainer />
        <form action="" className='flex flex-col w-full justify-center items-center gap-6'>
          <input onChange={(e) => onChangeHandler(e)} name={"name"} value={data.name} className='border border-slate-500 w-full md:w-[80%] px-3 py-2 rounded-md bg-transparent bg-slate-800 text-white font-semibold outline-none' type="text" placeholder='Place name' />
          <input onChange={(e) => onChangeHandler(e)} name={"description"} value={data.description} className='border border-slate-500 w-full md:w-[80%] px-3 py-2 rounded-md bg-transparent bg-slate-800 text-white font-semibold outline-none' type="text" placeholder='Description of place' />
          <input onChange={(e) => onChangeHandler(e)} name={"image"} value={data.image} className='border border-slate-500 w-full md:w-[80%] px-3 py-2 rounded-md bg-transparent bg-slate-800 text-white font-semibold outline-none' type="text" placeholder='Image URL' />
          <input onChange={(e) => onChangeHandler(e)} name={"category"} value={data.category} className='border border-slate-500 w-full md:w-[80%] px-3 py-2 rounded-md bg-transparent bg-slate-800 text-white font-semibold outline-none' type="text" placeholder='Category' />
          <input onClick={(e) => submitHandler(e)} className='bg-blue-800 px-3 py-2 w-full md:w-[45%] rounded-lg text-white font-semibold cursor-pointer' type="button" value="ADD NEW AREA" />
        </form>
      </div>
    </div>
  </>
  
  )
}

export default CreateProduct
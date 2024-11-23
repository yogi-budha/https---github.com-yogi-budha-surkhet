import {  useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";


function UpdateProduct() {

     const { id } = useParams()

     const  navigate = useNavigate();


    // const {value,setValue} = useContext(productsData)

  const [data,setData] = useState({name:"",description:"",image:""})
 
     function onChangeHandler(e){

      const {name,value} = e.target

      setData((prev)=>({...prev,[name]:value}))


     }

     function submitHandler(e){

      e.preventDefault()


   

            axios.post(`${import.meta.env.VITE_API_URL}/api/productupdate`,{id,data}).then((res)=>{

                console.log(res)

                if(res.data.success == true){
                    toast(res.data.message)
                  }

                  navigate("/")


            }).catch((error)=>{
                console.log(error)
            })

     }


  return (
    <>
    <h1 className='text-center text-2xl md:text-3xl text-slate-500 dark:text-white'>Update A AREA</h1>
  
    <div className='flex justify-center mt-4'>
      <div className='bg-slate-300 dark:bg-slate-600 rounded-md px-4 py-5 shadow-lg w-full md:w-[50%] lg:w-[35%]'>
        <ToastContainer />
        <form action="" className='flex flex-col w-full justify-center items-center gap-6'>
          <input onChange={(e) => onChangeHandler(e)} name={"name"} value={data.name} className='border border-slate-500 w-full md:w-[80%] px-3 py-2 rounded-md bg-transparent bg-slate-800 text-white font-semibold outline-none' type="text" placeholder='place name' />
          <input onChange={(e) => onChangeHandler(e)} name={"description"} value={data.description} className='border border-slate-500 w-full md:w-[80%] px-3 py-2 rounded-md bg-transparent bg-slate-800 text-white font-semibold outline-none' type="text" placeholder='Description of the place' />
          <input onChange={(e) => onChangeHandler(e)} name={"image"} value={data.image} className='border border-slate-500 w-full md:w-[80%] px-3 py-2 rounded-md bg-transparent bg-slate-800 text-white font-semibold outline-none' type="text" placeholder='Image URL' />
          <input onClick={(e) => submitHandler(e)} className='bg-blue-800 px-3 py-2 w-full md:w-[45%] rounded-lg text-white font-semibold cursor-pointer' type="button" value="UPDATE A AREA" />
        </form>
      </div>
    </div>
  </>
  
  )
}

export default UpdateProduct
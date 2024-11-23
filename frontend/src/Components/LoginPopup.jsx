import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

function LoginPopup({setShowLogin,currState,setCurrState}) {


  

    const [data,setData] = useState({name:"",email:"",password:""}) 

    const onchangeHandler = (e)=>{
        setData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const submitHandler = (e)=>{
        e.preventDefault()

        if(currState == 'Login'){

            axios.post("http://localhost:4000/api/userlogin",data).then((res)=>{
              
                res.data.success ? toast(res.data.message) : toast(res.data.message)
                localStorage.setItem('token',res.data.token)
                setShowLogin(false)
            })
        }

        if(currState == 'Sign up'){

            axios.post("http://localhost:4000/api/userRegister",data).then((res)=>{

                res.data.success ? toast(res.data.message) : toast(res.data.message)
                localStorage.setItem('token',res.data.token)
                setShowLogin(false)
            })


         } }
    return (

        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50">
          <div className=" flex justify-center items-center mt-28">
        <div className="w-80 h-auto bg-slate-400 px-5 py-5 flex flex-col gap-5 rounded-md  ">
          <div className="flex justify-between items-center font-bold text-2xl">
            <h2 className=" "  >{currState}</h2>
         <h3 className=" cursor-pointer"  onClick={() => setShowLogin(false)}>X</h3>
          </div>
          <form className="flex flex-col gap-3">
            {currState === 'Login' ? (
              <></>
            ) : (
              <input type="text" name='name' onChange={onchangeHandler} value={data.name} placeholder="Enter your Name" required />
            )}

            <input name='email' onChange={onchangeHandler} value={data.email}  type="email" placeholder="abc@gmail.com" />
            <input name='password' onChange={onchangeHandler} value={data.password}  type="password" placeholder="password" />
          </form>
          <button className="text-white bg-red-500 px-2 py-1 rounded-lg text-lg font-bold" onClick={submitHandler}>{currState == 'Sign up' ? 'Create account' : 'Login'}</button>
          <div className="flex gap-3">
            <input type="checkbox" name="" required id="" />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currState === 'Sign up' ? (
            <p>
              Already have an account?{' '}
              <span className="cursor-pointer text-red-700"  onClick={() => setCurrState('Login')}>Login here</span>
            </p>
          ) : (
            <p>
              Create a new account?{' '}
              <span className="cursor-pointer text-red-700" onClick={() => setCurrState('Sign up')}>Click here</span>
            </p>
          )}
        </div>
      </div>
        </div>
   
)}
export default LoginPopup
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { productsData } from "../Context/Storeproduct"




function Navbar({setShowLogin,setCurrState}) {

  const {themeMode,setThemeMode, fetchproductData,gettoken} = useContext(productsData)

  const themeChangeHandler=()=>{

 if(themeMode=="dark"){
  setThemeMode("light")

 }else{
  setThemeMode("dark")
 }
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])

  console.log(themeMode)


  return (
    <div className="py-7 w-full flex justify-center">

    <div className="w-full md:w-[55%] flex flex-col md:flex-row justify-between">
  
      <Link to={"/"}>
        <div className="flex items-center text-blue-500 text-3xl font-bold gap-3">
          <h1 className="tracking-widest" onClick={() => fetchproductData()}>SURKHET</h1>
        </div>
      </Link>
  
      <div className="flex gap-4 text-lg items-center justify-center mt-4 md:mt-0">
        <Link to={"/createCard"} className="bg-slate-400 dark:bg-slate-500 dark:text-black bg-opacity-25 px-2 py-1 rounded-md font-bold">
          <i className="ri-add-fill"></i>
        </Link>
        <i onClick={themeChangeHandler} className="cursor-pointer bg-slate-400 dark:bg-slate-500 bg-opacity-25 px-2 rounded-md ri-sun-fill py-1"></i>
      </div>
  
    </div>
  
    {gettoken() ? (
      <div className="flex gap-4 font-bold justify-center items-center px-5 mt-4 md:mt-0">
        <div className="cursor-pointer border px-2 py-1 rounded-lg bg-red-500 text-white text-xl" onClick={() => { localStorage.setItem("token", ""); fetchproductData() }}>
          Logout
        </div>
      </div>
    ) : (
      <div className="flex gap-4 font-bold justify-center items-center px-5 mt-4 md:mt-0">
        <div className="cursor-pointer border px-2 py-1 rounded-lg bg-red-500 text-white text-xl" onClick={() => { setShowLogin(true); setCurrState("Login") }}>
          Login
        </div>
        <div className="cursor-pointer border px-2 py-1 rounded-lg bg-slate-400 text-white text-xl" onClick={() => { setCurrState("Sign up"); setShowLogin(true) }}>
          Signup
        </div>
      </div>
    )}
  
  </div>
  
  )
}

export default Navbar
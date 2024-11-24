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

    document.getElementById('menu-btn').addEventListener('click', function() { const menu = document.getElementById('mobile-menu'); menu.classList.toggle('hidden'); });
  },[themeMode])

  console.log(themeMode)

  


  return (
<>
<nav className="bg-gray-800 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <Link to={"/"}>
      <div className="flex items-center text-blue-500 text-3xl font-bold gap-3">
        <h1 className="tracking-widest" onClick={() => fetchproductData()}>SURKHET</h1>
      </div>
    </Link>
    <div className="hidden md:flex space-x-4">
      <Link to={"/createCard"} className="bg-slate-400 dark:bg-slate-500 dark:text-black bg-opacity-25 px-2 py-1 rounded-md font-bold">
        <i className="ri-add-fill"></i>
      </Link>
      <i onClick={themeChangeHandler} className="cursor-pointer bg-slate-400 dark:bg-slate-500 bg-opacity-25 px-2 rounded-md ri-sun-fill py-1"></i>
      {gettoken() ? (
        <div className="cursor-pointer border px-2 py-1 rounded-lg bg-red-500 text-white text-xl" onClick={() => { localStorage.setItem("token", ""); fetchproductData() }}>
          Logout
        </div>
      ) : (
        <>
          <div className="cursor-pointer border px-2 py-1 rounded-lg bg-red-500 text-white text-xl" onClick={() => { setShowLogin(true); setCurrState("Login") }}>
            Login
          </div>
          <div className="cursor-pointer border px-2 py-1 rounded-lg bg-slate-400 text-white text-xl" onClick={() => { setCurrState("Sign up"); setShowLogin(true) }}>
            Signup
          </div>
        </>
      )}
    </div>
    <div className="md:hidden">
      <button id="menu-btn" className="text-white focus:outline-none">
        <i className="ri-menu-line text-3xl"></i>
      </button>
    </div>
  </div>
  <div id="mobile-menu" className="hidden md:hidden  right-0 mt-2 py-2 w-48 rounded-md shadow-lg bg-gray-800">
    <Link to={"/createCard"} className="block text-white px-4 py-2">
      <i className="ri-add-fill"></i> Add
    </Link>
    <i onClick={themeChangeHandler} className="block cursor-pointer text-white px-4 py-2 ri-sun-fill">Theme</i>
    {gettoken() ? (
      <div className="block cursor-pointer text-white px-4 py-2" onClick={() => { localStorage.setItem("token", ""); fetchproductData() }}>
        Logout
      </div>
    ) : (
      <>
        <div className="block cursor-pointer text-white px-4 py-2" onClick={() => { setShowLogin(true); setCurrState("Login") }}>
          Login
        </div>
        <div className="block cursor-pointer text-white px-4 py-2" onClick={() => { setCurrState("Sign up"); setShowLogin(true) }}>
          Signup
        </div>
      </>
    )}
  </div>
</nav>


</>
  
  )
}

export default Navbar
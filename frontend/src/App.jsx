import { Outlet } from "react-router-dom"
import Home from "./Page/Home"
import 'remixicon/fonts/remixicon.css'
import Navbar from "./Components/Navbar"
import { useState } from "react"
import LoginPopup from "./Components/LoginPopup"


function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [currState, setCurrState] = useState('Login')
  return (
    <>
     {showLogin ? <LoginPopup setShowLogin={setShowLogin} currState={currState} setCurrState={setCurrState}/> : <></>}
    <div className="w-full min-h-screen bg-slate-300 dark:bg-slate-900 relative">
     <Navbar setShowLogin={setShowLogin}  setCurrState={setCurrState}/>
      <Outlet />
    </div>
    </>
   
  )
}

export default App

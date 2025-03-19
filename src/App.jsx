import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Course from './pages/Course'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './contexts/Authprovider'
import toast from 'react-hot-toast'
function App() {
  // const [count, setCount] = useState(0)
  const [authuser, setauthuser]=useAuth()
  const location=useLocation()

  useEffect(() => {
    if(location.pathname ==='/course' && !authuser){
      toast.error("Please login first ")
    }
  
    
  }, [location.pathname , authuser])
  


  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/course' element={authuser ? < Course/> : <>
        
        <Navigate to="/"></Navigate>
      </>}></Route>
      <Route path='/signup' element={<Signup></Signup>}> </Route>

    </Routes>
    <Toaster></Toaster>
      

    </>
  )
}

export default App

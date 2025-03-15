import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Course from './pages/Course'
import Signup from './components/Signup'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/course' element={<Course></Course>}></Route>
      <Route path='/signup' element={<Signup></Signup>}> </Route>

    </Routes>
      

    </>
  )
}

export default App

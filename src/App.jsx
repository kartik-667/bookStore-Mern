import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='mt-24'></div>
      <Banner></Banner>
      <Freebook></Freebook>
      <Footer></Footer>

    </>
  )
}

export default App

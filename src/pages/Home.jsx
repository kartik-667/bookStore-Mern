import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
import  { Toaster } from 'react-hot-toast';

function Home() {
  return (
    <>
     <Navbar></Navbar>
      <Toaster />
      <div className='mt-24'></div>
      <Banner></Banner>
      <Freebook></Freebook>
      <Footer></Footer>
      
    </>
  )
}

export default Home

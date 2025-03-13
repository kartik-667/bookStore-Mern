import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Home() {
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

export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import list from '../../public/list'
import Card from '../components/Card'
function Course() {
    console.log(list);
    
  return (
    <>
      <Navbar></Navbar>
      <div className="content min-h-screen mt-28 p-4 flex flex-col justify-center">
            <div className="top flex flex-col justify-center items-center">
                <h1 className='text-5xl font-bold ' >We're delighted you are <span className='text-blue-500'>here! :)</span> </h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illum sequi facere quod consequuntur animi perferendis laborum eligendi quasi iure.</p>
                <Link to="/">
                <button className='bg-blue-500 mb-4 hover:bg-blue-700 duration-200 text-white p-3 m-3 rounded-md w-16'>
                    Back
                </button></Link>
            </div>
            <hr />
            <div className="bottom grid grid-cols-3 m-4 p-4">
                {list.map((ele)=> <Card key={ele.id} item={ele}></Card>)}
            </div>


      </div>
      <Footer></Footer>
    </>
  )
}

export default Course

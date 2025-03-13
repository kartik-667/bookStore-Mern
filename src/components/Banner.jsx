import React from 'react'

function Banner() {
  return (
    <>
    <div id="mainbox " className='flex p-4 '>
        <div className="left w-1/2">
            <h1 className='text-7xl font-bold'>Hello, welcome here to learn <span className='text-blue-700'>something new everyday!!!</span></h1>
            <h2 className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus laudantium odio pariatur doloribus itaque odit rem accusantium ipsam praesentium.</h2>
            <input type="text" className="border w-2/3  block p-1 rounded-md hover:border-blue-300 outline-none" name="" id="" placeholder="✉️ Enter your email to login "/>
            <button className="hover:border-black-300  border-2 w-[6rem] p-2 rounded-sm hover:bg-blue-400">Login</button>
        </div>
        <div className="right w-1/2 p-4">
        <img className='w-full h-full object-contain rounded-md ' src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdyaXRpbmclMjBhJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D" alt="image " /></div>
    </div>
      
    </>
  )
}

export default Banner

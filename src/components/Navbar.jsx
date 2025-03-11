import React from 'react'

function Navbar() {
  return (
    <>
     <div id="main" className="border border p-4 h-auto w-full flex justify-between">
        <div className="left">
            <h1 className="cursor-pointer text-4xl font-bold hover:text-blue-300" >bookStore</h1>
        </div>
        <div className="middle ">
            <ul className="flex gap-6 p-4 text-lg">
                <li><a className="hover:text-blue-300" href="">Home</a></li>
                <li><a  className="hover:text-blue-300" href="">Course</a></li>
                <li><a  className="hover:text-blue-300" href="">Contact</a></li>
                <li><a className="hover:text-blue-300"  href="">About</a></li>
            </ul>
        </div>
        <div className="right flex gap-1">
            <input type="text" className="border w-[200px]  p-1 rounded-md hover:border-blue-300" name="" id="" placeholder="Search here                   🔍"/>
            <button className="hover:border-black-300 border-2 w-[6rem] p-2 rounded-sm hover:bg-blue-400">Login</button>
        </div>
     </div>
      
    </>
  )
}

export default Navbar

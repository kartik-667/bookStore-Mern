// import React, { useEffect, useState } from 'react'

// function Navbar() {
//   const [scrolling, setscrolling] = useState(false)

//   useEffect(() => {
//     const handlescroll=()=>{
//       if(window.scrollY >0){
//         setscrolling(true)
//       }else{
//         setscrolling(false)
//       }
//     }
//     window.addEventListener("scroll",handlescroll)
//     return ()=> window.removeEventListener("scroll",handlescroll)
  
   
//   }, [scrolling])
  


//   return (
//     <>
//      <div id="main" className={` border border p-4 h-auto w-full flex justify-between  top-0 left-0 fixed bg-white${scrolling?"shadow-md transition-all duration-200"  `} >
//         <div className="left">
//             <h1 className="cursor-pointer text-4xl font-bold hover:text-blue-300" >bookStore</h1>
//         </div>
//         <div className="middle ">
//             <ul className="flex gap-6 p-4 text-lg">
//                 <li><a className="hover:text-blue-500" href="">Home</a></li>
//                 <li><a  className="hover:text-blue-500" href="">Course</a></li>
//                 <li><a  className="hover:text-blue-500" href="">Contact</a></li>
//                 <li><a className="hover:text-blue-500"  href="">About</a></li>
//             </ul>
//         </div>
//         <div className="right flex gap-1">
//             <input type="text" className="border w-[200px]  p-1 rounded-md hover:border-blue-300 outline-none" name="" id="" placeholder="Search here                   🔍"/>
//             <button className="hover:border-black-300 border-2 w-[6rem] p-2 rounded-sm hover:bg-blue-400">Login</button>
//         </div>
        
//      </div>
      
//     </>
//   )
// }

// export default Navbar
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Login from './Login';
function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [ismodalopen, setismodalopen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Removed `scrolling` from dependencies to avoid unnecessary re-renders

  return (
    <>
      <div
        id="main"
        className={`border z-10  p-4 h-auto w-full flex justify-between top-0 left-0 fixed bg-white ${
          scrolling ? "shadow-md transition-all duration-200 ease-in-out bg-slate-100" : ""
        }`}
      >
        <div className="left">
          <h1 className="cursor-pointer text-4xl font-bold hover:text-blue-300">bookStore</h1>
        </div>
        <div className="middle">
          <ul className="flex gap-6 p-4 text-lg">
            <li>
              <Link to="/">
              <a className="hover:text-blue-500" href="/">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/course">
              <a className="hover:text-blue-500" href="/course">Course</a>
                </Link>
              
            </li>
            <li>
              <Link to="/contact">
              <a className="hover:text-blue-500" href="/contact">Contact</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
              <a className="hover:text-blue-500" href="/about">About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right flex gap-1">
          <input
            type="text"
            className="border w-[200px] p-1 rounded-md hover:border-blue-300 outline-none"
            placeholder="Search here 🔍"
          />
          {/* <button className="hover:border-black-300 border-2 w-[6rem] p-2 rounded-sm hover:bg-blue-400">
            Login
          </button> */}
          <button onClick={()=> setismodalopen(true)} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"  className='bg-blue-500 mb-4 hover:bg-blue-700 duration-200 text-white p-3 m-3 rounded-md w-20'>
                    Login
                </button>
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>
        </div>
      </div>
      {ismodalopen && <Login onClose={()=> setismodalopen(false)}></Login>}
    </>
  );
}

export default Navbar;
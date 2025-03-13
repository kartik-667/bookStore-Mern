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

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

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
              <a className="hover:text-blue-500" href="">Home</a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="">Course</a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="">Contact</a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="">About</a>
            </li>
          </ul>
        </div>
        <div className="right flex gap-1">
          <input
            type="text"
            className="border w-[200px] p-1 rounded-md hover:border-blue-300 outline-none"
            placeholder="Search here 🔍"
          />
          <button className="hover:border-black-300 border-2 w-[6rem] p-2 rounded-sm hover:bg-blue-400">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
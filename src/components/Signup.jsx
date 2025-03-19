// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import axios from 'axios'
// function Signup() {

//   const [name, setname] = useState("")
//   const [email,setemail]=useState("")
//   const [password, setpassword] = useState("")

//   const handlesubmit= (e)=>{
//     try {
//         e.preventDefault()
//         let data= {
//           name,email,password
//         }
    
//         async function signup(){
//           let res=await axios.post("http://localhost:6767/user/signup",data)
//           console.log(res.data);
    
//           if(res.status === 201){
//             alert('user created successfully')
//           }
//           // else if(res.status ===404){
//           //   alert("user already exist, cant signup")
//           // }
          
//         }
//         signup()
      
//     } catch (error) {
//       if (error.response) {
//         // Handle specific status codes from the backend
//         if (error.response.status === 404) {
//           alert("User already exists, cannot sign up");
//         } else {
//           alert("An error occurred. Please try again.");
//         }
//       } else {
//         // Handle network errors or other issues
//         console.error("Error:", error.message);
//         alert("An error occurred. Please check your connection and try again.");
//       }
      
      
//     }
//     // console.log(data);
    
    
//   }


//   return (
//     <>
//     {/* <h1>signup page hai ye</h1>
//     <h2>hello bhai </h2> */}
//     {/* <Navbar className="relative z-50" /> */}
    
//     <div className="fixed inset-0 flex transition-all duration-100  items-center justify-center z-50 bg-opacity-50">
//           <div className="relative p-4 w-full max-w-md max-h-full">
//             <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
//               <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   Sign in to our platform
//                 </h3>
//                 <button
                  
//                   type="button"
//                   className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                     />
//                   </svg>
//                   {/* <span className="sr-only">Close modal</span> */}
//                 </button>
//               </div>
    
//               <div className="p-4 md:p-5">
//                 <form className="space-y-4"  onSubmit={(e)=> handlesubmit(e)} >
//                   <div>
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                       Name
//                     </label>
//                     <input value={name} onChange={(e)=> setname(e.target.value)} type="text"  placeholder='your name here' className='bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'/>
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                       Your email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={email}
//                       onChange={(e)=> setemail(e.target.value)}
//                       id="email"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                       placeholder="name@company.com"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label  htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                       Your password
//                     </label>
//                     <input
//                     value={password} onChange={(e)=> setpassword(e.target.value)}
//                       type="password"
//                       name="password"
//                       id="password"
//                       placeholder="••••••••"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                       required
//                     />
//                   </div>
    
//                   <div className="flex justify-between">
//                     <div className="flex items-start">
//                       {/* <input
//                         id="remember"
//                         type="checkbox"
//                         className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//                         required
//                       />
//                       <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                         Remember me
//                       </label> */}
//                     </div>
                    
//                   </div>
    
//                   <button
//                     type="submit"
//                     className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Sign Up
//                   </button>
    
                  
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//     </>

    
//   )
// }

// export default Signup
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import {Link} from 'react-router-dom'
function Signup() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handlesubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    try {
      const res = await axios.post('http://localhost:6767/user/signup', data);
      console.log(res.data);

      if (res.status === 201) {
        // alert('User created successfully');
        
        toast.success('Signed in successfully');
        localStorage.setItem('users',JSON.stringify(res.data.user))

      
      }
    } catch (error) {
      if (error.response) {
        // Handle specific status codes from the backend
        if (error.response.status === 404) {
          console.log(toast);
          
          toast.error('User already exists, cannot sign up');
          // alert('User already exists, cannot sign up');
        } else {
          
          toast.error('An error occurred. Please try again.');
          // alert('An error occurred. Please try again.');
        }
      } else {
        // Handle network errors or other issues
        toast.error('An error occurred. Please check your connection and try again.');
        console.error('Error:', error.message);
        // alert('An error occurred. Please check your connection and try again.');
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex transition-all duration-100 items-center justify-center z-50 bg-opacity-50">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {/* <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg> */}
              </button>
            </div>

            <div className="p-4 md:p-5 flex flex-col" >
              <form className="space-y-4" onSubmit={handlesubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    placeholder="Your name here"
                    className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign Up
                </button>
              </form>
              <div className='flex justify-center w-full'>

              <Link to="/">
                              <button className='bg-blue-500  mb-4 hover:bg-blue-700 duration-200 text-white p-3 m-3 rounded-md w-16'>
                                  Back
                              </button></Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

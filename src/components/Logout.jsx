import React from 'react'
import { useAuth } from '../contexts/Authprovider'
import toast from 'react-hot-toast'
function Logout() {

    const [authuser, setauthuser]=useAuth()
    const handleLogout= ()=>{
        try {
            // setauthuser({
            //     ...authuser,
            //     user:null
            // })
            setauthuser(null)
            localStorage.removeItem("users")
            toast.success("Logout successful")
            setTimeout(() => {
                window.location.reload()
            },2000);
            
            
        } catch (error) {
            toast.error("Some error occured, cant logout")
            return
            
        }
    }


  return (
    <button onClick={handleLogout} className='bg-red-500 mb-4 hover:bg-red-700 duration-200 text-white p-3 m-3 rounded-md w-20'>
                    Logout
                </button>
  )
}

export default Logout

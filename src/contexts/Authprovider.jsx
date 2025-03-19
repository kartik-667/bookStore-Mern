import React, { createContext, useContext, useState } from 'react'

const Authcontext= createContext()

function Authprovider({children}){
    const initialuser=localStorage.getItem("users")
    const [authuser, setauthuser] = useState(
        initialuser ? JSON.parse(initialuser) : undefined
    )
    return (
        <Authcontext.Provider value={[authuser,setauthuser]}>
            {children}

        </Authcontext.Provider>
    )

}

const useAuth=()=> useContext(Authcontext) //custom hook

export {useAuth,Authprovider,Authcontext}

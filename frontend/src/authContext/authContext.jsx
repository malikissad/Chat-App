import React from "react"
import { createContext, useState } from "react" 
import { jwtDecode } from "jwt-decode"


const AuthContext = createContext(null)

export function AuthProvider({children}){

    const [token, settoken] = useState("")
    const [user, setuser] = useState("")

    // login function : fetch et stocké le accesstoken s'il existe
    async function login(username, password){
        try{
            const response = await fetch('http://localhost:3000/auth/login',{
                method: 'POST',
                headers: {
                 'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                 username: username,
                 password: password
                })
            })
            
            
            // settoken(data.AccessToken)
            // setuser(jwtDecode(data.AccessToken))
            return response

        }catch(err){
            return "erreur : " + err.message
        }
    } 
    

    
    return (
        <AuthContext.Provider value={{token, user, login}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContext

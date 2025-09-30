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

        if(!response.ok){
            return {status: response.status, message: response.message}
        }
        // return response.status 

        const data = await response.json()
        settoken(data.AccessToken)
        const access = jwtDecode(data.AccessToken)
        setuser(access)        
        
        return response

        }catch(err){
            return "erreur : " + err.message
        }
    } 


   // tester la validité du accesstoken
    async function Protected(){
        try{
            const  response = await fetch('http://localhost:3000/auth/protected', {
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json',
                "Authorization": `Bearer ${token}`
            }}
        )
        const data = await response.json() 
        return data
        }catch(err){
            return "erreur : " +err.message 
        }
    }

    
    return (
        <AuthContext.Provider value={{token, user, login, Protected}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContext

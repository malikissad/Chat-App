    import React from "react"
    import { createContext, useState } from "react" 
    import { jwtDecode } from "jwt-decode"


    const AuthContext = createContext(null)

    export function AuthProvider({children}){

        
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
                

                
                const data = await response.json()
                // return data
                if(response.status == 200){
                //  settoken(data)
                 //  setuser(jwtDecode(data.AccessToken))
                //  const user = jwtDecode(data.AccessToken)
                 localStorage.setItem('user', JSON.stringify(jwtDecode(data.AccessToken)))
                 localStorage.setItem('token', JSON.stringify(data.AccessToken))
                }
                
                return {response ,data}

            }catch(err){
                return "erreur : " + err.message
            }
        } 

        async function Protected(){
            const response = await fetch('http://localhost:3000/auth/protected', {
                method : 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await response.json()
            return data.message
        }

        return (
            <AuthContext.Provider value={{login, Protected}}>
                {children}
            </AuthContext.Provider>

        )
    }

    export default AuthContext

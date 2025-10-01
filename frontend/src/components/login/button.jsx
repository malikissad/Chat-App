import {useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import  AuthContext from "../../authContext/authContext.jsx"


function Button({text, username, password, seterreur}) {
    
    const navigate = useNavigate()
    const {user, login} = useContext(AuthContext)
    const [data, setdata] = useState("")
    
    async function handleclick(){
        const data = await login(username, password)
        setdata(data)
        if(data.status == 404){
            seterreur("user n'existe pas")
        }else if(data.status == 401){
            seterreur("mot de passe ou username sont fausses")
        }
        return data
    }

    useEffect(()=>{
        if(user){
            console.log(user)
            navigate('/chat')
        }
    },[user])
    
    return (
        
        <div className="w-full h-[50%] flex justify-center">
            <button 
            onClick={async ()=> {
                console.log(data)
               await handleclick()
            }}
            className="w-[80%] h-full bg-white rounded-lg font-semibold shadow-xl
             hover:bg-purple-200 hover:text-purple-800 transition hover:duration-400 ">{text}</button>
        </div>
    )
    }

export default Button
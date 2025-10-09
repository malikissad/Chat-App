import React, { useContext, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../authContext/authContext.jsx'
function Button({username, password, seterreur}){
    
    const {token, user, login} = useContext(AuthContext)
    const navigate = useNavigate()
    async function hundleClick(){
        const response = await login(username, password)

        if(response.response.status == 400 || response.response.status == 401 || response.response.status == 404 || response.response.status == 409){
            seterreur(response.data.message)
        }

        return response
    }  

    useEffect(()=>{
    if(token){ 
        console.log(token)
        console.log(user)
        navigate('/Chat')
    }
    },[token])
    
    
    return (
        <>
        <button 
         onClick={async (e) => { 
            console.log(await hundleClick())}}
         className="group w-[60%] h-[60%] bg-black rounded-2xl transition-all duration-400
                 hover:bg-white hover:ring-black  hover:ring-2 hover:text-black button-shadow">
            <p className="text-xl font-bold text-white group-hover:text-black">Login</p>
        </button>
        </>
    )
}

export default Button
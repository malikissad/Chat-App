import React, { useContext, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../authContext/authContext.jsx'
function Button({username, password, seterreur}){
    
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    async function hundleClick(){
        try{
            const response = await login(username, password)

            // return response.data
            if(response.response.status == 400 || response.response.status == 401 || response.response.status == 404 || response.response.status == 409){
             seterreur(response.data.message)
            }
         return response.data

        }catch(err){
            return err.message
        }
    }  

    useEffect(()=>{

        const info = JSON.parse(localStorage.getItem('user'))
        console.log(localStorage.getItem('user'))

        if(info.avatar == null){
            navigate('/info')
            console.log(localStorage.getItem('token'))
        }else{
            navigate('/chat')
        }
    },[])
    
    
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
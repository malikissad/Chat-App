import React, { useContext, useEffect} from "react"
import AuthContext from '../../authContext/authContext.jsx'
function Button({username, password, seterreur}){
    
    const {token, user, login} = useContext(AuthContext)

    async function hundleClick(){
        const response = await login(username, password)
        const data = await response.json()

        if(response.status == 400){
            seterreur(data.message)
        }else if(response.status == 401){
            seterreur(data.message)
        }else if(response.status == 404){
            seterreur(data.message)
        }else if(response.status == 500){
            seterreur(data.message)
        }

        return response
    }  
    
    
    return (
        <>
        <button 
         onClick={async (e) => { 
            console.log(token)
            console.log(user)
            console.log(await hundleClick())}}
         className="group w-[60%] h-[60%] bg-black rounded-2xl transition-all duration-400
                 hover:bg-white hover:ring-black  hover:ring-2 hover:text-black button-shadow">
            <p className="text-xl font-bold text-white group-hover:text-black">Login</p>
        </button>
        </>
    )
}

export default Button
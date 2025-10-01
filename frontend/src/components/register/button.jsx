import React from "react"
import { RegistrationFetch } from "../../services/RegistrationFetch"


function ButtonR({text, username, email, password}){
    async function handleclick(){
        const data = await RegistrationFetch(username, email, password)
        return data
    }
    return (
        <div className="w-full h-[50%] flex justify-center">
            <button 
            onClick={async (e) => console.log(await handleclick())}
            className="w-[80%] h-full bg-white rounded-lg font-semibold shadow-xl
             hover:bg-purple-200 hover:text-purple-800 transition hover:duration-400 ">{text}</button>
        </div>
    )
}

export default ButtonR
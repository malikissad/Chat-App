import React from "react"
import { AddInformationFetch } from "../../services/AddInformationFetch"
import { useEffect } from "react";

function Button({text, className, avatar ,image , bio, tel}){
    
    async function handleclick(){
        try{
            const response = await AddInformationFetch(avatar ,image , bio, tel);
            const data = await response.json()
            return data
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        console.log(avatar)
    })
    

    return (
        <div className="flex justify-center items-center w-full h-[10%] mt-3">
            <button 
             onClick={async(e) => {console.log(await handleclick())}}
             className={className}>
                <p className="text-white font font-semibold text-meduim">{text}</p>
            </button>
        </div>
    ) 
}
export default Button
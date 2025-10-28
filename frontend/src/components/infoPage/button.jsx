import React from "react"
import { AddInformationFetch } from "../../services/AddInformationFetch"
import { useEffect } from "react";

function Button({text, className, avatar, bio, tel}){
    
    async function handleclick(){
        try{
            const response = await AddInformationFetch(avatar, bio, tel);
            const data = await response.json()
            console.log(data)
            return data
        }catch(err){
            console.log({message : err.message})
        }
    }
    

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
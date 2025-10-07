import React, {useState, useEffect} from "react"
import { RegistrationFetch } from "../../services/RegistrationFetch"
function ButtonR({text, FullName, Email, Username, Password, seterreur}){
    
    
   async function handleclick(){
        try{
            const response = await RegistrationFetch({FullName, Email, Username, Password})
            const data = await response.json()
            if(response.status == 400){
                seterreur(data.message)
            }else if(response.status == 409){
                seterreur(data.message)
            }else if(response.status == 201){
                alert(data.message)
            }
            return data
        }catch(err){
            return "erreur : " + err.message
        }
    }

    useEffect(() => {
        setTimeout(()=>{
            seterreur('')
        },3000)
    })



    return (
        <div className="relative w-[60%] h-[10%] mt-[5%]">
            
            <button 
             onClick={async (e)=>{console.log(await handleclick())}}
             className="group w-full h-full bg-black rounded-2xl button-shadow 
             hover:bg-white hover:ring-2 hover:ring-black focus:button-shadow-focus">
                <p className="text-white font-bold text-xl group-hover:text-black">{text}</p>
            </button>
        </div>
    )
}
export default ButtonR
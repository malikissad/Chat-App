import React  from "react"
import { AddInformationFetch } from "../../services/AddInformationFetch"
import {BeatLoader} from 'react-spinners'
import { useNavigate } from "react-router-dom"

function Button({text, className, avatar ,image , bio, tel, loading, setloading}){
    
    const navigate = useNavigate()
    async function handleclick(){
        try{
            setloading(true)
            const response = await AddInformationFetch(avatar ,image , bio, tel);
            const data = await response.json()
            return data
        }catch(err){
            console.log({message : err.message})
        }
    }
    

    return (
        <div className="flex justify-center items-center w-full h-[10%] mt-3">
            <button 
             onClick={async(e) => {
                const data = await handleclick()
                alert(data.message || data.erreur)
                if(data.message){
                    navigate('/chat')
                }
                setloading(false) 
            }}
             className={className}>
             {loading ? <BeatLoader color="white" size={8}></BeatLoader> : <p className="text-white font font-semibold text-meduim">{text}</p>}

            </button>
        </div>
    ) 
}
export default Button
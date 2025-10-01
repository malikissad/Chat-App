import React from "react";

function InputBar({type, setusername, setpassword, setemail}) {
    
    
    return (
        <div className="w-full flex flex-col justify-center items-center"> 
            <label className="w-[78%] text-gray-300 mb-1">{type}</label>
            <input 
             className="p-3 w-[80%] h-[45%] rounded-lg bg-white/20 outline-none" 
             type={type} 
             onChange={(e) =>{
                if(type === "username"){
                    setusername(e.target.value)
                }else if(type === "Email"){
                    setemail(e.target.value)
                }else if(type === "password"){
                    setpassword(e.target.value)
                }
             }}
         />
        </div>
    )
}

export default InputBar
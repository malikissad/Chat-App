import React from "react";

function InputBar({type, setusername, setpassword}) {
    
    
    return (
        <div className="w-full flex flex-col justify-center items-center"> 
            <label className="w-[78%] text-gray-300 mb-1">{type}</label>
            <input 
             className="p-3 w-[80%] h-[45%] rounded-lg bg-white/20 outline-none" 
             type={type} 
             onChange={
                type === "username" 
                ? (e) => setusername(e.target.value) 
                : (e) => setpassword(e.target.value)
            }
         />
        </div>
    )
}

export default InputBar
import React from "react"

function Input({text, value, setFullName, setEmail, setUsername, setPassword}){
    
    const hasValue = value && value.trim() !== ""
    return(
        <div className="relative flex justify-center items-center w-[60%] h-[35%]">
            <input 
             className="peer border-grey border-2 w-full h-[70%] rounded-2xl pl-[5%] text-lg font-semibold "
             value={value}
             type={text}
             placeholder=""
             onChange={(e)=>{
                if(text === "FullName"){
                    setFullName(e.target.value)
                }else if(text === "Email"){
                    setEmail(e.target.value)
                }else if(text === "Username"){
                    setUsername(e.target.value)
                }else if(text === "Password" || text === 'password'){
                    setPassword(e.target.value)
                }
             }}
            />
            <label
            className={`absolute left-4 text-gray-500 transition-all duration-200
                   ${hasValue ? "translate-y-[-140%] text-sm" : ""} 
                   peer-focus:translate-y-[-140%] peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1`}
            >{text}</label>
        </div>
    )
}

export default Input
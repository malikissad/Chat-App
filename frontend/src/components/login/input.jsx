import React from "react"

function Input({text, setFullName, setEmail, setUsername, setPassword}){
    return(
        <div className="relative flex justify-center items-center w-[60%] h-[35%]">
            <input 
             className="peer border-grey border-2 w-full h-[70%] rounded-2xl pl-[5%] text-lg font-semibold "
             type={text}
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
             className="flex justify-center items-center text-gray-600 text-lg font-semibold bg-white w-[20%] h-[30%] 
             absolute top-7 left-[2%] transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
            >{text}</label>
        </div>
    )
}

export default Input
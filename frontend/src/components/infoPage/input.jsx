import React from "react"

function Input({text, settel}){
    return (
      <>
        <input
         onChange={(e) => settel(e.target.value)} 
         placeholder="+123"
         className="w-[80%] h-[60%] rounded-xl bg-blue-100 ring-bleu-100 ring-1 pl-3 focus:ring-2 focus:ring-[#e11d74] transition-all duartion-300 focus:outline-none" 
         type="tel" 
        />
        <label
         className="absolute left-[13%] -top-5 text-lg font-semibold text-gray-700"
         >{text}</label>
      
      </> 
    ) 
}
export default Input
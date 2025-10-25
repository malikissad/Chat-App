import React from "react"

function Button({text, className}){
    return (
        <div className="flex justify-center items-center w-full h-[10%] mt-3">
            <button className={className}>
                <p className="text-white font font-semibold text-meduim">{text}</p>
            </button>
        </div>
    ) 
}
export default Button
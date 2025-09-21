import React from "react"
import logo from "../../assets/logo.svg"

function Image(){
    return (
       <div className="flex justify-center items-center">
            <div className="h-[100%] w-[50%] flex justify-center items-center">
                <img 
                 className="h-[70%] w-[50%]"
                 src={logo}/>
            </div>
        </div>
    )
}

export default Image
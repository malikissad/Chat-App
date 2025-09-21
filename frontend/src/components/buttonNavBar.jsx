import React from "react"
import { Link } from "react-router-dom"

function ButtonNavBar({text}){
    return(
       <div className="h-[40%] w-[10%] ml-[10%]">
            <Link className="group relative flex flex-col justify-center items-center font-semibold h-full w-full rounded-lg">
              {text}
              <span className="absolute bg-black bottom-0 h-[6%] w-0 
              group-hover:transition-all group-hover:duration-500 
              group-hover:ease-in-out group-hover:w-full"></span>
            </Link>
       </div>
       
    )
}

export default ButtonNavBar
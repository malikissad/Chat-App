import React from "react"
import { Link } from "react-router-dom"

function Button(){
    return (
       <div className="h-[20%] w-full flex justify-center items-center ">
         <Link 
          className="mb-[5%] flex justify-center items-center bg-gradient-to-r from-orange-500 to-purple-500 
           h-[60%] w-[20%] text-xl text-white font-semibold rounded-3xl shadow-2xl  transition-all duration-500
           hover:bg-none hover:bg-white hover:text-black hover:ring-2 hover:ring-black"
          to="/login">commancer maintenant</Link>
       </div>
    )
}
export default Button
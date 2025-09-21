import React from "react"
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa" 
import { Link } from "react-router-dom"
function Reseau(){
    return(
      <div className="flex justify-center items-center space-x-[2%]">
        <Link>
         <FaFacebook 
         className="hover:text-blue-500"
         size={27}/>
        </Link>
       
       <Link>
         <FaInstagram 
         className="transition hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-500 hover:bg-clip-text "
         size={27}/>
        </Link>

        <Link>
         <FaLinkedin 
         className="hover:text-blue-800"
         size={27}/>
        </Link>

        <Link>
         <FaGithub size={27}/>
        </Link>
      </div>
    )
}
export default Reseau
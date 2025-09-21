import React from "react"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
function Button({text, to}){
    return(
        <motion.div 
        initial={{x:"-100%"}}
        whileInView={{x:"0%"}}
        transition={{duration:1,delay:0.5}}
        viewport={{once: true}}

        className="h-[10%] w-full flex justify-center items-center mt-[2%]">
                <Link 
                 to={to} 
                 className="h-full w-[40%] flex justify-center items-center rounded-3xl
                 bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-2xl text-lg font-semibold
                 transition-all hover:duration-300 hover:bg-none hover:bg-white hover:text-black hover:ring-2 
                 hover: ring-black"
                 >{text}
                </Link>
               </motion.div>

    )
}
export default Button
import React from "react"
import {motion} from "framer-motion"
function Cadre ({logo, titre, desc, delay, color}){
    return (
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1, delay: delay}}
          viewport={{once: true}}

          className={`flex flex-col justify-center items-center h-[80%]  ${color} m-[5%] rounded-3xl shadow-xl 
          transition-all duration-500 hover:-translate-y-[1%] hover:scale-105`}>
            <div className="h-full w-[80%] flex flex-col justify-start items-center">
                <div className="h-[30%] w-[30%] mt-[15%]">
                 <img src={logo}/>
                </div>
                <p className="text-xl font-semibold">{titre}</p>
                <p className="mt-[10%] text-lg">{desc}</p>
            </div>
        </motion.div>
    )
}

export default Cadre
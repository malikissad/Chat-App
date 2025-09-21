import React from "react"
import img from "../../assets/homme de landing page.svg"
import profile from "../../assets/profile.svg"
import {motion} from"framer-motion"
function Image(){
    return (
        <div className="relative flex justify-center items-end h-full w-full">
            <motion.img 
            initial={{x:"100%"}}
            animate={{x:"0%"}}
            transition={{duration:1,delay:0.2}}
            src={img}/>
            <motion.div 
             initial={{x:"110%"}}
             animate={{x:"0%"}}
             transition={{duration:1,delay:0.4}}
            className="absolute top-[50%] h-[30%] w-[90%] grid grid-cols-[1fr_1fr] ">
             
             <motion.div
             whileHover={{y:"-20%"}}
             transition={{duration:0.5}}
             className="bg-black/20 backdrop-blur-xl h-[30%] rounded-xl flex justify-start items-center">
                 <div className="h-full w-[20%] flex justify-center items-center">
                     <img src={profile} className="h-[60%] w-[60%] rounded-3xl"></img>
                 </div>
                 <p className="text-gray-800">Bonjour, je m'appelle williams et toi</p>
             </motion.div>
             <motion.div 
             whileHover={{y:"-20%"}}
             transition={{duration:0.5}}
             className= "bg-black/20 backdrop-blur-xl flex justify-start rounded-xl items-center mt-[40%]">
                   <div className="h-full w-[20%] flex justify-center items-center">
                     <img src={profile} className="h-[60%] w-[60%] rounded-3xl"></img>
                 </div>
                 <p className="text-white">Bonjour, je m'appelle williams et toi</p>
             </motion.div>
            
            </motion.div>
        </div>
    )
}

export default Image
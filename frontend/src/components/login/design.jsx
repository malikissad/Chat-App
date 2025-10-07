import React from "react"
import image from '../../assets/Rectangle.svg'
import {motion} from 'framer-motion'

function Design(){
    return (
        <>
         <motion.img
         src={image}
         className="h-[20%] mt-[20%]"
         />
         <p className="text-4xl font-bold text-white mt-[10%]">PieChat</p>
          
         <div className="flex justify-center items-center rounded-xl
            bg-gradient-to-tl from-blue-400 to-rose-300 w-[30%] h-[6%] mt-[6%]
            shadow-[5px_5px_5px_rgba(255,255,255,1)]">
            <p className="text-white font-semibold text-xl">build by memememe</p>
         </div>
         <p className="text-white text-xl font-meduim mt-[10%]">Discutez, partagez et connectez-vous facilement avec PieChat.</p>
        </>
    )
}

export default Design
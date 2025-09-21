import React from "react"
import {motion} from "framer-motion"
function Avis({logo, personne, desc, h, w, ml, mr, mt, mb,delay}){
    return(
      <div className="h-full w-full flex justify-center items-center">
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1, delay: delay}} 
          viewport={{once: true}}
          style={{height: `${h}`, 
                  width:`${w}`, 
                  marginLeft:`${ml}`, 
                  marginRight:`${mr}`,
                  marginTop:`${mt}`,
                  marginBottom: `${mb}`
                }}
          className="grid grid-cols-[30%_1fr] bg-black/50 backdrop-blur-lg rounded-3xl">
          
          <div className="h-full w-full flex justify-center items-center">
            <img 
            className="h-[50%] w-[50%] rounded-3xl"
            src={logo}/>
          </div>
          
          <div className="flex flex-col justify-center items-start px-[5%]">
            <p className="text-gray-800 font-bold">{personne}</p>
            <p className="text-white">{desc}</p>
          </div>
        </motion.div>
      </div>
    )
}
export default Avis
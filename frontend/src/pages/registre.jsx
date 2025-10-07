import React from "react"
import Design from '../components/login/design'
import Formulaire from "../components/register/formulaire"
import { motion} from 'framer-motion'
function Register(){
    
    
    return(
        <div className="w-full h-screen grid grid-cols-[50%_50%]">
            <motion.div
             initial={{x:"100%"}}
             animate={{x : "0%"}}
             transition={{duration : 1}}
             className="flex flex-col justify-start items-center 
              bg-gradient-to-t from-blue-400 to-rose-400 m-[5%] rounded-3xl shadow-2xl">
                <Design></Design>
            </motion.div>
            <motion.div
             initial={{opacity:0}}
             animate={{opacity : 1}}
             transition={{duration : 1, delay: 0.5}}
             className="m-[5%] flex flex-col justify-start items-center ">
                <Formulaire></Formulaire>

            </motion.div>
        </div>
    )
}

export default Register
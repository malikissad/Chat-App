import React from "react"
import login from '../assets/login.png'
import plogin from '../assets/plogin_2.svg'
import CadreR from "../components/register/cadreR"
import background from '../assets/background.svg'

import {motion} from 'framer-motion'
function Register(){
    return(
        <div 
           style={{backgroundImage: `url(${background})`}}
           className="h-screen w-full flex justify-center items-center bg-no-repeat bg-cover bg-center">
           <div 
           className="h-[70%] w-[65%] bg-white rounded-3xl grid grid-cols-[1fr_1fr]">
             <motion.div 
             initial={{x:"100%"}}
             animate={{x:"0%"}}
             transition={{duration:0.8}}
             className="rounded-3xl m-3 flex justify-center items-center "
             style={{backgroundImage: `url(${login})`}}>
                <CadreR 
                 title="create your account"
                 login="Sign Up"
                 desc="you have an account ?"
                 signup="Login"
                 h="90"
                 w="60"
                 Elements="email username password"
                 to="/Login"
                />
             </motion.div>
             <div className="flex justify-centre items-center">
                <motion.img 
                initial={{ scale:0}}
                animate={{ scale:1}}
                transition={{duration:0.8}}
                src={plogin}></motion.img>
             </div>
           </div>
        </div>
    )
}

export default Register
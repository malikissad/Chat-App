import React from "react"
import Button from "./ButtonPresentation"
import {motion} from "framer-motion"
function Presentation(){
    return(
         <div className="flex flex-col justify-center items-center">
             <motion.p 
                initial={{x:"-100%"}}
                whileInView={{x:"0%"}}
                transition={{duration:1}}
                viewport={{once: true}}
                 className="text-6xl font-semibold pl-[5%]">Discutez en toute simplicité, connectez-vous en toute sécurité</motion.p>
             <motion.p
               initial={{x:"-100%"}}
               whileInView={{x:"0%"}}
               transition={{duration:1,delay:0.2}}
               viewport={{once: true}}
               className="text-xl pl-[10%] pr-[15%] mt-[5%] text-gray-500">Notre application de chat rapide et intuitive vous permet de rester connecté avec vos amis, collègues et communautés – où que vous soyez.</motion.p>
               <Button 
               initial={{x:"-100%"}}
               whileInView={{x:"0%"}}
               transition={{duration:1,delay:0.2}}
               viewport={{once: true}}
               text="Commencer maintenant" to="/login"/>
               <Button text="Créer un compte gratuit" to="/register"/>
        </div>
    )

}
export default Presentation
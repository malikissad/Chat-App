import React from "react"
import font from "../../assets/font.svg"
import femme from "../../assets/femme.svg"
import {motion} from "framer-motion"
import Avis from "./avis" 
import profil_1 from "../../assets/profil_1.svg"
import profil_2 from "../../assets/profil_2.svg"
import profil_3 from "../../assets/profile_3.svg"
function Question(){
    return(
        <div 
         className="h-full w-full bg-cover grid grid-cols-[1fr_1fr]"
         style={{backgroundImage: `url(${font})`}}
         >
            <motion.div 
             initial={{x:"-100%"}}
             whileInView={{x:"0%"}}
             transition={{duration:1}}
             viewport={{once: true}}
             className="flex justify-center items-end">
              <img  src={femme}/>
            </motion.div>
            <div className="grid grid-rows-[20%_1fr_1fr_1fr]">
                <motion.div 
                  initial={{x:"100%"}}
                  whileInView={{x:"0%"}}
                  transition={{duration:1}}
                  viewport={{once: true}}

                  className="flex justify-center items-center">
                    <p className="text-5xl font-semibold mt-[5%]"> Votre avis sur 
                        <span className="font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent"> CCgasra</span> 
                    </p>
                </motion.div>
                <Avis 
                 logo={profil_1} 
                 personne="Karim L. – Développeur" 
                 desc="La sécurité est un vrai plus. Je sais que mes conversations pro restent confidentielles"
                 h="50%"
                 w="60%"
                 mr="40%"
                 delay="0.8"
                />

                <Avis 
                 logo={profil_2} 
                 personne="Sarah B. – Étudiante" 
                 desc="J’utilise cette app tous les jours pour mes travaux de groupe. Simple et rapide, je ne peux plus m’en passer"
                 h="60%"
                 w="60%"
                 ml="35%"
                 mb="10%"
                 delay="1"
                 />

                <Avis 
                 logo={profil_3} 
                 personne="Amel K. – Designer" 
                 desc="J’adore l’interface, c’est moderne et fluide. On s’y retrouve tout de suite."
                 h="45%"
                 w="60%"
                 mb="15%"
                 mr="20%"
                 delay="1.2"
                />
            </div>

        </div>
    )
}
export default Question
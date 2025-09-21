import React from "react"
import {motion} from "framer-motion"
import Cadre from "../Landing page/cadre.jsx"
import message from "../../assets/message.svg"
import securite from "../../assets/securite.svg"
import personne from "../../assets/personne.svg"
import multiplatforme from"../../assets/multiplatforme.svg"
import { Link } from "react-router-dom"
function Fonctionnalite(){
    const info = [
        {
            logo : message,
            titre : "Messages instantanés" ,
            desc : "Échangez en temps réel avec vos proches sans décalage.",
            delay : 0.2, 
            color : "bg-gradient-to-t from-green-300 to-yellow-400"

        },
        {
            logo : securite,
            titre : "Sécurité et confidentialité",
            desc : "Vos conversations sont protégées par un chiffrement de bout en bout.",
            delay : 0.4,
            color : "bg-gradient-to-t from-purple-400 to-orange-400"


        },
        {
            logo : personne,
            titre: "Groupes & communautés",
            desc: "Créez des groupes pour vos amis, vos équipes ou vos projets.",
            delay : 0.6,
            color : "bg-gradient-to-t from-blue-400 to-yellow-400"


        },
        {
            logo : multiplatforme,
            titre : "Partage multimédia",
            desc : "Envoyez facilement photos, vidéos, fichiers et plus encore.",
            delay : 0.8,
            color : "bg-gradient-to-t from-green-300 to-purple-500"

        }
    ]
    
    return (
        <div className="h-full w-full grid grid-rows-[20%_50%_30%] mt-[5%]">
            <div className="h-full w-full flex justify-center items-center text-5xl font-semibold"> 
               <motion.p
               initial={{y:"100%"}}
               whileInView={{y:"0%"}}
               transition ={{duration:1}}
               viewport={{once: true}}

               >
                Pourquoi choisir{" "}
                   <span
                     className="font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent h-full w-full"> 
                     CCgasra
                    </span>?
               </motion.p>
            </div>
            <div className="flex justify-center items-center">
               <div className="grid grid-cols-[1fr_1fr_1fr_1fr] w-[90%] h-full">
                {info.map((item, index) => (
                <Cadre logo={item.logo} titre={item.titre} desc={item.desc} delay={item.delay} color={item.color}/>
               ))}
               </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr]">
                <motion.div 
                 initial={{x:"-100%"}}
                 whileInView={{x:"0%"}}
                 transition={{duration:1, delay:1}}
                 viewport={{once: true}}

                 className="flex justify-end items-center mr-[10%]">
                    <Link 
                     to="/register"
                     className="flex justify-center items-center bg-black w-[45%] h-[30%] rounded-3xl bg-gradient-to-r
                      from-orange-500 to-purple-500 text-white text-lg font-semibold shadow-2xl transition-all duration-500
                      hover:bg-none hover:bg-white hover:text-black hover:ring-2 hover:ring-black">
                        Créer votre compte gratuitement
                    </Link>
                </motion.div>
                <motion.div
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{duration:1, delay:1}}
                 viewport={{once: true}}

                 className="flex justify-start items-center ml-[5%]">
                    <p className="text-3xl font-semibold flex flex-col justify-center items-center">Prêt à commencer ? 
                        <span> Rejoignez-nous dès aujourd’hui</span>
                    </p>
                </motion.div>
            </div>
            
            
        </div>
    )
}
export default Fonctionnalite
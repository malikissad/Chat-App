import InputBar from "./inputbar.jsx"
import Button from "./button.jsx" 
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { useEffect, useState } from "react"
import Erreur from "./erreur.jsx"

    function Cadre() {
        const [username, setusername] = useState("")
        const [password, setpassword] = useState("")
        const [erreur, seterreur] = useState("")


        useEffect(() => {
            setTimeout(() => {
                seterreur("")
            }, 3000)
        })

        return (
            <motion.div 
            initial= {{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className={'bg-white/20 backdrop-blur-xl rounded-xl grid grid-rows-[20%_1fr_20%] h-[85%] w-[60%]'}>
            <div className="flex flex-col justify-center items-center">
                <img src={logo} className="h-[50%] w-[50%] mb-[5%] mt-[5%]"/>
                <p className="text-xl text-gray-300 font-semibold text-shadow">Connect to your account</p>
            </div>
            <div className="relative flex flex-col justify-center items-center">
                
                <InputBar 
                 type="username"
                 setusername={setusername}
                 setpassword={setpassword}
                ></InputBar>

                <InputBar 
                 type="password"
                 setusername={setusername}
                 setpassword={setpassword}
                ></InputBar>
                
                
                <div className="w-full flex justify-end mr-[20%] ">
                    <p className="text-sm text-gray-200">Forget password ?</p>
                </div>

                {erreur &&
                    <div className="absolute bottom-[10%]">
                      <Erreur 
                       message={erreur}>
                      </Erreur>
                    </div>
                }
                                
            </div>
            <div className="flex flex-col justufy-center items-center">
                
                <Button 
                 text="Login" 
                 username={username}
                 password={password}
                 seterreur={seterreur}
                 ></Button>
                <div className="mt-5">
                    <p className="text-xs text-white/70">vous n'avez pas de compte ?  
                    <Link className="font-bold" to="/register"> Sign up</Link></p>
                </div>
            </div>

        </motion.div>
    )
}

export default Cadre
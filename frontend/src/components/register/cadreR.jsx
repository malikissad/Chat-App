import InputBar from "../login/inputbar.jsx"
import Button from "../login/button.jsx" 
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
    
function CadreR() {
               
        return (
            <motion.div 
            initial= {{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className={'bg-white/20 backdrop-blur-xl rounded-xl grid grid-rows-[20%_1fr_20%] h-[90%] w-[60%]'}>
            <div className="flex flex-col justify-center items-center">
                <img src={logo} className="h-[50%] w-[50%] mb-[5%] mt-[5%]"/>
                <p className="text-xl text-gray-300 font-semibold text-shadow">create your account</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                
                <InputBar type="username"></InputBar>
                <InputBar type="email"></InputBar>
                <InputBar type="password"></InputBar>
                
                <div className="w-full flex justify-end mr-[20%] ">
                    <p className="text-sm text-gray-200">Forget password ?</p>
                </div>
            </div>
            <div className="flex flex-col justufy-center items-center">
                
                <Button text="Sign Up"></Button>
                <div className="mt-5">
                    <p className="text-xs text-white/70">vous avez un compte déjà ?  
                    <Link className="font-bold" to="/Login"> Login</Link></p>
                </div>
            </div>

        </motion.div>
    )
}

export default CadreR
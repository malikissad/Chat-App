import InputBar from "./inputbar.jsx"
import Button from "./button.jsx" 
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
    function Cadre({title, forget, login, desc, signup, h, w, Elements, to}) {
        const elements = Elements?.split(" ")
        
        return (
            <motion.div 
            initial= {{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            style={{ height: `${h}%`, width: `${w}%` }}
            className={`bg-white/20 backdrop-blur-xl rounded-xl grid grid-rows-[20%_1fr_20%]`}>
            <div className="flex flex-col justify-center items-center">
                <img src={logo} className="h-[50%] w-[50%] mb-[5%] mt-[5%]"/>
                <p className="text-xl text-gray-300 font-semibold text-shadow">{title}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                {elements?.map((item, index) => (
                    <InputBar
                    key={index}
                    type={item}></InputBar>
                ))}
                <div className="w-full flex justify-end mr-[20%] ">
                    <p className="text-sm text-gray-200">{forget}</p>
                </div>
            </div>
            <div className="flex flex-col justufy-center items-center">
                <Button text={login}></Button>
                <div className="mt-5">
                    <p className="text-xs text-white/70">{desc} <Link className="font-bold" to={to}>{signup}</Link></p>
                </div>
            </div>
        </motion.div>
    )
}

export default Cadre
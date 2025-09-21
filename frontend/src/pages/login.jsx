import image from '../assets/login.png'
import plogin from '../assets/plogin1.svg'
import Cadre from '../components/login/cadre'
import background from '../assets/background.svg'
import {motion} from 'framer-motion'
function Login(){
    return(
        <div
           style={{ backgroundImage: `url(${background})`}}
           className='h-screen w-full flex justify-center items-center bg-no-repeat bg-cover bg-center'>
           <div 
             
             className='h-[70%] w-[65%] bg-white rounded-3xl grid grid-cols-[1fr_1fr] shadow-2xl'> 
             <div className='flex justify-center items-center'>
                 <motion.img 
                 initial={{ scale:0}}
                 animate={{ scale:1}}
                 transition={{duration:0.8}}
                 src={plogin} />
             </div>
            <motion.div
            initial={{x:"-100%"}}
             animate={{x:"0%"}}
             transition={{duration:0.8}} 
            className='m-3 rounded-3xl flex justify-center items-center shadow-2xl'
            style={{backgroundImage: `url(${image})`}}>
                <Cadre 
                 Elements="email password" 
                 title="Connect to your account" 
                 forget="Forget password ?" 
                 login="Login" 
                 desc="You don't have an account ?" 
                 signup="Sign Up" 
                 h="80" 
                 w="60"
                 to="/Register "
                />

            </motion.div>
           </div>
        </div>
    )
}


export default Login
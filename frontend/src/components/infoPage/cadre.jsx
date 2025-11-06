import font from '../../assets/font.svg'
import Input from '../infoPage/input.jsx'
import Button from './button.jsx'
import TextArea from './textArea.jsx'
import {Link} from 'react-router-dom'
import {Camera} from 'lucide-react'
import { useState } from 'react'
import {motion} from 'framer-motion'
function Cadre(){
    
    const [avatar, setavatar] = useState('')
    const [image, setimage] = useState('')
    const [bio, setbio] = useState('')
    const [tel, settel] = useState('')
    const [loading, setloading] = useState(false)

    function changeAvatar(e){
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setavatar(file)
            setimage(reader.result)
        }
    }

    return (
        <div 
         initial={{ y:'50%' }}
         animate={{ y:'0%'}}
         transition={{duration:1}}
         className="xl:h-[90%] xl:w-[30%] lg:h-[90%] lg:w-[40%] md:w-[50%] flex flex-col justify-start items-center bg-white h-[90%] sm:w-[50%] rounded-3xl cadre-shadow">
            <p className='font-bold xl:text-3xl mt-5 lg:text-2xl md:text-3xl sm:text-2xl text-2xl flex justify-center items-center'>Complete Your Profile</p>
            <p className='text-gray-700 text-sm font-semibold mt-1 xl:text-base lg:text-sm sm:text-sm text-smaul md:text-lg'>Help others get to know you better</p>            
            <div className='ralative w-full h-[20%] flex justify-center items-center'>
                <div className='md:w-7 md:h-7 md:top-[31%] md:left-[54%] top-[32%] left-[56%] w-6 h-6 peer absolute xl:top-[31%] xl:left-[52%] 
                flex justify-center items-center rounded-full bg-[#e11d74] xl:w-7 xl:h-7 sm:w-6 sm:h-6 sm:top-[30%] sm:left-[54%]
                lg:top-[29%] lg:left-[53%] lg:w-7 lg:h-7'>
                    <input
                     id='button' 
                     className='hidden'
                     type="file"
                     onChange={changeAvatar}
                     />
                    <label 
                     className='cursor-pointer'
                     htmlFor='button'>
                            <Camera className='text-white w-4 xl:w-4 lg:w-4 md:w-4 sm:w-4'></Camera>
                    </label>
                </div>
                <img 
                 className='w-[40%] h-[75%] xl:h-[70%] xl:w-[23%] md:w-[27%] md:h-[72%] lg:w-[25%] sm:w-[30%] sm:h-[60%]  
                   rounded-full object-cover mt-7 ring-4
                  ring-gray-100 hover:ring-[#e11d74] transition-all duration-500 peer-hover:ring-4
                   peer-hover:ring-[#e11d74] '
                 src={image ? image : font}
                />
            </div>

            <p className='mt-[2%] text-gray-600 text-vrsm'>Click to upload profile picture</p>

            <div className='relative flex justify-center items-center w-full h-[20%] mt-[10%]'>
                <TextArea
                 setbio={setbio} 
                 text="Bio">
                </TextArea>
            </div>
            
            <div className='relative flex justify-center items-center w-full h-[10%] mt-[8%]'>
                <Input 
                 settel={settel}
                 text="Phone Number"
                ></Input>
            </div>
            <Button 
             avatar={avatar}
             bio={bio}
             tel={tel}
             loading={loading}
             setloading={setloading}
             className='w-[80%] h-[70%] bg-[#e11d74] rounded-xl hover:bg-[#cc2570] 
              mt-[20%] transition-all duration-500 button-shadow 
              md:w-[80%] md:h-[70%]
              sm:w-[90%] sm:h-[70%]' 
             text="Save And Continue">
            </Button>

            <Link
            to="/chat" 
             className='mt-[10%] text-gray-700 '>Skip for Now</Link>
        </div>
    )
}
export default Cadre
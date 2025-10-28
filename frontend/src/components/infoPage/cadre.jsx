import font from '../../assets/font.svg'
import Input from '../infoPage/input.jsx'
import Button from './button.jsx'
import TextArea from './textArea.jsx'
import {Link} from 'react-router-dom'
import {Camera} from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'

function Cadre(){
    
    const [avatar, setavatar] = useState('')
    const [bio, setbio] = useState('')
    const [tel, settel] = useState('')

    function changeAvatar(e){
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{setavatar(file)}
    }

    useEffect(()=>{console.log(avatar)})

    return (
        <div className="flex flex-col justify-start items-center bg-white h-[90%] w-[30%] rounded-3xl cadre-shadow">
            <p className='font-bold text-3xl mt-5'>Complete Your Profile</p>
            <p className='text-gray-700 font-semibold mt-1'>Help others get to know you better</p>            
            <div className='ralative w-full h-[20%] flex justify-center items-center'>
                <div className='peer absolute top-[31%] left-[51%] flex justify-center items-center rounded-full bg-[#e11d74] w-7 h-7'>
                    <input
                     id='button' 
                     className='hidden'
                     type="file"
                     onChange={changeAvatar}
                     />
                    <label 
                     className='cursor-pointer'
                     htmlFor='button'>
                            <Camera className='text-white w-4 h-4'></Camera>
                    </label>
                </div>
                <img 
                 className='h-[70%] w-[23%] rounded-full object-cover mt-7 ring-4 ring-gray-100 hover:ring-[#e11d74] transition-all duration-500 peer-hover:ring-4 peer-hover:ring-[#e11d74]'
                 src={avatar}
                />
            </div>

            <p className='mt-[2%] text-gray-600'>Click to upload profile picture</p>

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
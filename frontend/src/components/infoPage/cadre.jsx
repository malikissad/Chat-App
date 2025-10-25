import font from '../../assets/font.svg'
import Input from '../infoPage/input.jsx'
import Button from './button.jsx'
import TextArea from './textArea.jsx'
import {Link} from 'react-router-dom'
import {Camera} from 'lucide-react'
import { useState } from 'react'

function Cadre(){
    
    const [avatar, setavatar] = useState('value')
    const [bio, setbio] = useState('')
    const [tel, settel] = useState('')

    return (
        <div className="flex flex-col justify-start items-center bg-white h-[90%] w-[30%] rounded-3xl cadre-shadow">
            <p className='font-bold text-3xl mt-5'>Complete Your Profile</p>
            <p className='text-gray-700 font-semibold mt-1'>Help others get to know you better</p>            
            <div className='ralative w-full h-[20%] flex justify-center items-center'>
                
                <button className='peer h-7 w-7 bg-[#e11d74] flex justify-center items-center rounded-full absolute top-[32%] left-[51%] hover:scale-110 transition-all duration-300'>
                    <Camera className='text-white w-4 h-4 '></Camera>
                </button>
                
                <img 
                 className='h-[70%] w-[23%] rounded-full object-cover mt-7 ring-4 ring-gray-100 hover:ring-[#e11d74] transition-all duration-500 peer-hover:ring-4 peer-hover:ring-[#e11d74]'
                 src={font}
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
             className='w-[80%] h-[70%] bg-[#e11d74] rounded-xl hover:bg-[#cc2570] mt-[20%] transition-all duration-500 button-shadow' 
             text="Save And Continue">
            </Button>

            <Link
            to="/chat" 
             className='mt-[10%] text-gray-700 '>Skip for Now</Link>
        </div>
    )
}
export default Cadre
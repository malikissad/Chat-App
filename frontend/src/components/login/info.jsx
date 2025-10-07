import React, { useState, useEffect} from "react"
import Input from "./input"
import Button from "./button"
import { Link } from "react-router-dom"
import DemoButton from "./DemoButton"

function Info(){
   const [Username, setUsername] = useState('')
   const [Password, setPassword] = useState('')
   const [erreur, seterreur] = useState('')

   useEffect(()=>{
    setTimeout(()=>{
        seterreur("")
    },3000)
   })
    return (
        <>
         <div className="relative flex flex-col justify-start items-center w-full h-full">
            <p className="font-bold text-6xl mt-[10%]">Welcome Back</p>
            <p className="mt-[2%] text-lg font-semibold text-gray-700">Bienvenue à nouveau ! On vous a manqué.</p>
            <div className="w-full h-[30%] flex flex-col justify-end items-center space-y-2">
            <Input 
              text="Username"
              setUsername={setUsername}
              setPassword={setPassword}
            ></Input>
            <Input 
              text="password"
              setUsername={setUsername}
              setPassword={setPassword}
            ></Input>
            </div>
            <div className="w-[60%] h-[10%] flex justify-end items-start font-semibold text-lg text-blue-500">
                <Link>Forget Password ?</Link>
            </div>   

             {erreur && <p className="absolute top-[60%] text-red-600 font-semibold text-lg"> {erreur}</p>}


            <div className="relative flex flex-col justify-center items-center w-full h-[20%] space-y-3 mt-[7%]">
                            
                <Button 
                 username={Username}
                 password={Password}
                 seterreur={seterreur}
                ></Button>
                <DemoButton></DemoButton>
            </div>
            <p className="mt-[3%]">Don't have an account? 
                <Link to='/register'
                className="text-blue-500 font-semibold"> Sign Up</Link>
            </p>
         </div>
        </>
    )
}
export default Info
import React, { useState } from "react"
import Input from '../login/input.jsx'
import ButtonR from "./button.jsx"
import { Link } from "react-router-dom"

function Formulaire(){
    const [FullName, setFullName] = useState("")
    const [Email, setEmail] = useState("")
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [erreur, seterreur] = useState("")

    return (
        <>
          <p className="text-5xl font-bold mt-[5%]">Get Started</p>
          <p className="mt-[2%] text-gray-500 text-lg">Rejoignez notre communauté dès maintenant</p>
          <div className="w-full h-[50%] flex flex-col justify-center items-center mt-[5%]">
            <Input 
             text="FullName"
             setFullName={setFullName}
             setEmail={setEmail}
             setUsername={setUsername}
             setPassword={setPassword}
            ></Input>

            <Input 
             text="Email"
             setFullName={setFullName}
             setEmail={setEmail}
             setUsername={setUsername}
             setPassword={setPassword}
            ></Input>
            <Input 
             text="Username"
             setFullName={setFullName}
             setEmail={setEmail}
             setUsername={setUsername}
             setPassword={setPassword}
            ></Input>
            <Input 
             text="Password"
             setFullName={setFullName}
             setEmail={setEmail}
             setUsername={setUsername}
             setPassword={setPassword}
            ></Input>
          </div>
          <div className="relative w-[60%] h-[10%] flex justify-start items-start">
            <div className="w-full flex justify-start items-center">
                <input 
                  className="ml-[2%] scale-150 accent-black"
                  type="checkbox"
               />
                <p className="text-gray-600 font-semibold ml-[2%]">Agree To Terms And Conditions</p>
            </div>
            {erreur && <p className="absolute text-red-600 left-[30%] top-[70%] text-lg font-semibold">{erreur}</p>}

          </div>
         
           <ButtonR 
             text="Sign Up"
             FullName={FullName}
             Email={Email}
             Username={Username}
             Password={Password}
             seterreur={seterreur}>
           </ButtonR>
          
          <p className="mt-[2%]">Already, have an account? <Link className="text-lg font-semibold text-blue-500" to='/login'>Login</Link></p>



        </>
    )
}

export default Formulaire
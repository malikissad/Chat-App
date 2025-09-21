import React from "react"
import Image from "./imageNewsLetter" 
import LinkF from "./linkFooter"
import Reseau from "./reseau"
function Footer(){
    return (
      <div className="h-[40%] w-full flex flex-col justify-center items-center">
        <div className="grid grid-cols-[20%_50%_1fr] h-[70%] w-[80%] border-b-2">
            <Image/>
            <LinkF/>
            <Reseau/>
        </div>

        <div className="h-full w-[80%] flex space-x-[60%]">
        <p className="mt-[2%] text-gray-500 font-semibold ">© Copyright 2022, All Rights Reserved</p>
        <p className="mt-[2%] text-gray-500 font-semibold ">Privacy Policy         Terms & Conditions</p>
        </div>
      </div>
    )
}
export default Footer
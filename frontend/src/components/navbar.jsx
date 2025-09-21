import React from "react";
import logo from "../assets/logo.svg"
import ButtonNavBar from "./buttonNavBar"
import { Link } from "react-router-dom"; 
function NavBar(){
    return (
        <div className="h-full w-full grid grid-cols-[30%_50%_20%]">
            <div className="w-full h-full">
                <div className="w-full h-full flex justify-center items-center">
                    <img src={logo} className="w-[12%] h-[100%]"/>
                </div>
            </div>
            <div className=" flex justify-start items-center">
                <ButtonNavBar text="Accuil"/>
                <ButtonNavBar text="À propos"/>
                <ButtonNavBar text="Fonctionnalités"/>
                
            </div>
            <div className="flex justify-center items-center space-x-[3%]">
                <Link className="bg-black flex justify-center items-center font-semibold text-white 
                h-[50%] w-[20%] rounded-2xl bg-gradient-to-t from-orange-500 to-purple-600 transition-all duration-500
                hover:bg-none hover:bg-white hover:text-black hover:ring-2 hover:ring-black" to="/login">Login</Link>
                <Link className="bg-black flex justify-center items-center font-semibold
                 text-white h-[50%] w-[25%] rounded-2xl bg-gradient-to-t from-orange-500 to-purple-600 transition-all duration-500purple-500
                 hover:bg-none hover:bg-white hover:text-black hover:ring-2 hover:ring-black" to="/register"> sign up</Link>
            </div>
        </div>
    )
}

export default NavBar
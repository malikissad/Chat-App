import React from "react";
import NavBar from "../components/navbar"
import img from "../assets/homme de landing page.svg"
import Presentation from "../components/Landing page/presentation";
import Image from "../components/Landing page/imagePresentation.jsx"
import Fonctionnalite from "../components/Landing page/fonctionnalite.jsx";
import font from "../assets/font.svg"
import Question from "../components/Landing page/question.jsx";
import Newsletter from "../components/Landing page/Newsletter.jsx";
function LandingPage(){
    return (
     <div className="h-screen w-full grid grid-rows-[10%_1fr_100%_20%_100%_70%]">
        <div>
            <NavBar></NavBar>
        </div>
        <div className="h-sceen w-full grid grid-cols-[50%_1fr]">
          <Presentation/>
          <Image/>
        </div>
        <div className="flex justify-center items-center">
          <Fonctionnalite/>
        </div>
        <div></div>
        <div  className="h-full w-full">
          <Question/>
        </div>
        <div className="h-full w-full">
          <Newsletter/>
        </div>
     </div>
    )
}

export default LandingPage
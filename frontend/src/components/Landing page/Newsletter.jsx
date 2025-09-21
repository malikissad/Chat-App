import React from "react"
import Button from "./buttonNewsletter"
import Footer from "./footerNewsLettre"
function Newsletter(){
    return (
        <div className="flex flex-col justify-center items-center h-full w-full ">
          <div className="h-[50%] w-[35%] flex justify-center items-center">
                <p className="text-4xl font-semibold">Rejoignez 
                    <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent font-bold"> 
                    CCgasra
                    </span> 
                    et connectez-vous instantanément avec vos équipes et clients
               </p>
          </div>
          <Button/>
          <Footer/>
        </div>
    )
}

export default Newsletter
import React from "react"

function Erreur({message}){
    return (
        <div>
            <p className="text-red-500 font-semibold text-base">{message}</p>
        </div>
    )
}

export default Erreur
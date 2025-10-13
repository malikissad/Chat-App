import {useContext}from "react"
import AuthContext from "../authContext/authContext.jsx"

function InfoPage(){

    const {Protected} = useContext(AuthContext)
    return (
        <p>
            <button onClick={async (e) => { console.log(await Protected()) }}>envoyer</button>
        </p>
    )
}

export default InfoPage
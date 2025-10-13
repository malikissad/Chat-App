import {useContext}from "react"
import AuthContext from "../authContext/authContext.jsx"

function InfoPage(){

    const {Protected, Refresh} = useContext(AuthContext)
    return (
        <p>
            <button onClick={async (e) => { console.log(await Protected()) }}>access</button>
            <button onClick={async (e) => { console.log(await Refresh())}}>refresh</button>
        </p>
    )
}

export default InfoPage
import { useContext } from "react";
import AuthContext from "../authContext/authContext";
import {useNavigate} from 'react-router-dom'
async function TestToken(){
    const {Protected, Refresh} = useContext(AuthContext)
    const protecteAccessToken = await Protected()
    if(protecteAccessToken.status == 401){
        const refreshTokenTest = await Refresh()
        if(refreshTokenTest.status == 403){
            return refreshTokenTest.Json()
        }
    }
}
import {useNavigate } from "react-router-dom"


function Button({text, username, password}) {
    
    const navigate = useNavigate()

    async function hundleclick(){
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify({
                username : username,
                password : password
            })
        })
            const data = await response.json()
            return data
    }
    return (
        
        <div className="w-full h-[50%] flex justify-center">
            <button 
            onClick={async()=> {
                console.log(await hundleclick())
                navigate("/chat")
            }
            }
            className="w-[80%] h-full bg-white rounded-lg font-semibold shadow-xl
             hover:bg-purple-200 hover:text-purple-800 transition hover:duration-400 ">{text}</button>
        </div>
    )
    }

export default Button
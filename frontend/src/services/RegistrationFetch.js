export async function RegistrationFetch({username, email, password}){
    try{
        const response = await fetch('http://localhost:3000/auth/Register',{
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username : username,
                email : email,
                password : password
            })
        })

        const data = await response.json()
        return {response, data}
    }catch(err){
        console.log("front erreur :" + err.message)
    }
}
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
        if(!response.ok){
            alert(response.message)
            return response
        }
        const data = await response.json()
        return data
    }catch(err){
        console.log("front erreur :" + err.message)
    }
}
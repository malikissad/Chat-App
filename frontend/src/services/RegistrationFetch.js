export async function RegistrationFetch({FullName, Username, Email, Password}){
    try{
        const response = await fetch('http://localhost:3000/auth/Register',{
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Name : FullName,
                email : Email,
                password : Password,
                username : Username,

            })
        })

        return response
    }catch(err){
        console.log("front erreur :" + err.message)
    }
}
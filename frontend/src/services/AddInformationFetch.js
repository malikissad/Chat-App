export async function AddInformationFetch(avatar, bio, tel){
    try{
        const response = await fetch("http://localhost:3000/Profile/addInformation",{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
            body : JSON.stringify({
                avatar : avatar,
                bio : bio,
                tel : tel
            })
        })
        
        return response
    }catch(err){
        console.log(err.message)
  
    }
}
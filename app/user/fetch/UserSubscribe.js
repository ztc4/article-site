import axios from "axios";

async function GetSubscribedUsers(search = "",skip = 0) {
    return await axios.get(`http://localhost:5000/user/subscribed?search${search}&skip=${skip}`)
    .then(res => res.data)

}
async function GetSubscribers(search,skip){
    return await axios.get(`http://localhost:5000/user/subscribers?search${search}&skip=${skip}`,{
        withCredentials:true
    })
    .then(res => res.data)
    

}

export {GetSubscribedUsers,GetSubscribers}
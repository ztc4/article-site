import axios from "axios";

 async function PostedArticles(search,skip) {
    return await axios.get(`http://localhost:5000/user/articles/posted?search${search}&skip=${skip}`,{
        withCredentials: true
    })
    .then(res => res.data)
}

async function LikedArticles(search = "",skip = 0) {
    await axios.get(`http://localhost:5000/user/articles/liked?search${search}&skip=${skip}`,{
        withCredentials:true
    })
    .then(res => res)
}
async function SubscribedArticle(search,skip) {
    return await axios.get(`http://localhost:5000/user/articles/subscribed?search${search}&skip=${skip}`,{
        withCredentials:true
    })
    .then(res => res.data)
}

export  {PostedArticles, LikedArticles ,SubscribedArticle};
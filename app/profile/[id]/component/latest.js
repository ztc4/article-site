"use client"
import React from "react";
import axios from "axios";
import Article from "../../../Components/Article/article";

function ProfileArticles({username}) {

    const [page,setPage] = React.useState("Latest")
    let [data,setData] = React.useState(null)

    React.useEffect(()=>{
        console.log("doing it")

        axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/article/profile/${username}`,{
            cache:"no-store"
        })
        .then(res => {
            console.log(99,res)
            setData(res.data)})
        .catch(err=> alert(3,err))

    },[])

    // function article



 
    
    let likesArticles = data?.LikesArticle?.map(current => <Article key={current._id} data={current}/>) 
    console.log(1, likesArticles)
    let LatestArticles = data?.LatestArticle?.map(current => <Article key={current._id} data={current}/>) 
    return ( 
        <div className="mt-12">
                <div className="drop-shadow rounded-3xl justify-center gap-2 p-2 flex flex-row w-full md:w-4/4 ">
                    <p 
                    className={`navigate-text text-xl hover:cursor-pointer text-center ${page == "Latest" && "underline font-bold"}`} 
                    onClick={()=>setPage("Latest")}>Latest</p>
                    <p 
                    className={`navigate-text text-xl text-center cursor-pointer ${page == "Likes" && "underline font-bold"}`} 
                    onClick={()=>setPage("Likes")}>Likes</p>
                </div>
                <div className="grid grid-cols-1 gap-2 w-4/5 mx-auto sm:grid-cols-2">
                    {page == "Likes" && likesArticles}
                    {page == "Latest" && LatestArticles}

                </div>

        </div>

     );
}

export default ProfileArticles;
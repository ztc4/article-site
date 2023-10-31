"use client"
import { Favorite, FavoriteBorder,DeleteOutline } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import cookieCutter from "cookie-cutter"

function LikeButton({id}) {
    let [isLiked,setLiked] = React.useState(false)
    let [userArticle, setUserArticle] = React.useState(true)
    async function LikeArticle(){
        axios.put("http://localhost:3000/dev/article/like",{
            articleId: id
        },{
           headers:{
            Authorization : `Bearer ${cookieCutter.get("token")}`
           }
        })
        .then(res => {setLiked(!isLiked); return res})
        .catch(error => { console.log(error);alert(error);})

    }

    React.useEffect(()=>{

        axios.get(`http://localhost:3000/dev/article/${id}/isliked`,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        })
        .then(res => setLiked(res.data.liked))



    },[])
    return ( 
        <div className={`w-fill h-full flex flex-col justify-center items-center`} onClick={LikeArticle}>
            
            {isLiked ? 
            <Favorite className="text-red-600 text-4xl"/> :
             <FavoriteBorder className="text-4xl"/>}



        </div>
     );
}

export default LikeButton;
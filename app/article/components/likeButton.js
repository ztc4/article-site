"use client"
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import cookieCutter from "cookie-cutter"

function LikeButton({id}) {
    let[isLiked,setLiked] = React.useState(false)
    async function LikeArticle(){
        axios.put("https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/article/like",{
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

        axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/article/${id}/isliked`,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        })
        .then(res => setLiked(res.data.liked))



    },[])
    return ( 
        <div className={`w-fill h-full flex   justify-center items-center`} onClick={LikeArticle}>
            
            {isLiked ? 
            <Favorite className="text-red-600 text-4xl"/> :
             <FavoriteBorder className="text-4xl"/>}


        </div>
     );
}

export default LikeButton;
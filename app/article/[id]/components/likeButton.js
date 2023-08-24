"use client"
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import axios from "axios";
import React from "react";

function LikeButton({id}) {
    let[isLiked,setLiked] = React.useState(false)
    async function LikeArticle(){
        axios.put("https://article-api-wd57.onrender.com/article/like",{
            articleId: id
        },{
            withCredentials: true
        })
        .then(res => {setLiked(!isLiked); return res})
        .catch(error => { console.log(error);alert(error);})

    }

    React.useEffect(()=>{

        axios.get(`https://article-api-wd57.onrender.com/article/${id}/isliked`,{
            withCredentials:true
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
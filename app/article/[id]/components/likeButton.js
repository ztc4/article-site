"use client"
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import cookieCutter from "cookie-cutter"

function LikeButton({id}) {
    let[isLiked,setLiked] = React.useState(false)
    async function LikeArticle(){
        axios.put("http://localhost:5000/article/like",{
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

        axios.get(`http://localhost:5000/article/${id}/isliked`,{
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
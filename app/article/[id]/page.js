import axios from "axios";
import Image from "next/image";
import React from "react";

async function getArticle(id){
    
    let data = fetch(`http://localhost:5000/article/${id}`,{
        method: "GET",
        cache: 'no-cache'
    
      })
    .then(res =>res.json())
    .then(res => res)
    .then(res => {console.log(1,res); return res})
    return data
}

async function Article(query) {


    
    let data = await getArticle(query.params.id)
    console.log(2,data)
    let articleText = data.articleText.map(
        current =>   <p key={current} className="sm:text-center pl-4  font-light my-4 text-sm">{current}</p>
    )
    return ( 
    <div className="w-screen h-min-screen flex flex-col justify-center">
       
            <Image 
            className="object-center object-cover color4  h-96 w-full sm:object-contain"
            src={`http://localhost:5000/articles/${data._id}/posterImage`} 
            width={100} height={100} alt="News article poster Image"/>

            <div className="flex flex-row w-full justify-center gap-8 px-1">
                <p className="info-text">Likes:{data.likes}</p>
                <p className="info-text">Comments:{data.comments}</p>
                <p className="info-text">Posted {Date(data.createdAt).slice(0,15)}</p>
            </div>
        

        <h1 className="sm:text-center pl-4 mt-8 font-semibold text-2xl leading-relaxed">{data.title}</h1>
        <h2 className="sm:text-center font-semibold text-base">by:{data.author}</h2>

        {articleText}

    </div> );
}

export default Article;
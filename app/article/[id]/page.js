import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import BackButton from "../../Components/backButton";
import LikeButton from "../components/likeButton";
import DeleteButton from "../components/deleteButton"
async function getArticle(id){
    
    let data = axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/article/${id}`)
    .then(res => {console.log(res); return res.data})

    return data
}

async function Article(query) {



    
    let data = await getArticle(query.params.id)
    console.log(2,data)


    let text
    let articleText

    if(data.articleText.length !== 0)
    {
        console.log(data)

        text = data.articleText
        articleText = text.map(
        current =>   <p key={current} className="sm:text-center pl-4 font-medium md:mx-12  font-light my-4 text-sm">{current.replace("*8^","")}</p>
    )
    }

    return ( 
    <div className="w-screen h-min-screen flex flex-col justify-center">
       
            <Image 
            className="object-center object-contain color4  h-96 w-full sm:object-cover"
            src={`https://article-website-images.s3.amazonaws.com/${data._id}.webp`} 
            width={1000} height={1000} alt="News article poster Image"/>

            {/*Like and Back Button */}
            <div className="absolute p-2 top-0 left-0 hover:cursor-pointer m-4 h-16 hover:scale-105 opacity-50 rounded-full w-16">
                <BackButton />

            </div>
            <div className="absolute  flex  justify-center items-center top-0 right-0 hover:cursor-pointer m-4 h-16 hover:scale-105  rounded-full opacity-50 w-16">
                <LikeButton id={data._id}/>
                

            </div>
            <DeleteButton id={data._id}/>

            <div className="flex flex-row w-full justify-center gap-8 px-1">
                <p className="info-text">Likes:{data.likes}</p>
                <p className="info-text">Comments:{data.comments}</p>
                <p className="info-text">Posted {data.postedArticle}</p>
            </div>

        <h1 className="sm:text-center pl-4 mt-8 font-semibold text-2xl leading-relaxed">{data.title}</h1>
        <Link href={`/profile/${data.author}`} className="sm:text-center  pl-4 font-semibold text-base">by:<span className="hover:text-blue-600 hover:cursor-pointer">{data.author}</span></Link>

        
        {articleText}


    </div> );
}

export default Article;
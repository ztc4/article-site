"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function User({data}) {
    const { push } = useRouter()
    function redirect(){
        push(`/profile/${data.username}`)
    
    }



    //username category articles subscribers id
    function handleClick(){

    }
    return ( 
        <div className="flex flex-col p-1 card w-[300px] h-20 " onClick={redirect}>
            <div className="h-full ml-2 flex flex-row items-center">
                <div className=" w-2/12 justify-center">
                {
                    <Image 
                    
                    width={50} height={50} 
                    className="rounded-full hover:cursor-pointer"
                    src={`https://article-api-wd57.onrender.com/users/${data.id}/avatar`} 
                    alt="article image"/>
                    || 
                    <div 
                    onClick={()=>router.push(`/profile/${data.username}`)}
                    className=" border hover:cursor-pointer bg-yellow-600 rounded-full h-12 w-12"/>}
                    
                </div>
                <div className="w-full ml-2">
                    <h4 className="title-text">{data.username}</h4>
                    <p className="text-xs font-medium">Main Content:<span className="font-light">{data.category}</span></p>
                    <p className="text-xs font-medium">{data.subscribers} Subscribers</p>
                    <p className="text-xs font-medium">{data.articles} Articles</p>                 
                </div>
            </div>

        </div>
     );
}

export default User;
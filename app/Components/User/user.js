"use client"
import Image from "next/image";
import React from "react";

function User({data}) {

    function handleClick(){

    }
    return ( 
        <div className="flex flex-col p-1 card w-full   h-20 " onClick={handleClick}>
            <div className="h-10/12 flex flex-row">
                <div className=" w-2/12 justify-center">
                    {data.avatar !== ""  && !data? 
                    <Image width={100} height={100}  src="/r" alt="article image"/>: 
                    <div className=" border bg-red-600 rounded-full h-12 w-12"/>}
                    
                </div>
                <div className="w-10/12 ml-2">
                    <h4 className="title-text">{data.username}</h4>
                    <p className="text-xs font-medium">Main Content:<span className="font-light">{data.category}</span></p>
                    <p className="text-xs font-medium">{data.subscribers} Subscribers</p>
                    
                </div>
            </div>
            <div className="flex flex-row px-2 justify-between my-1 h-2/12">
                <p className="text-xs  font-light">last article was posted: {"last post"}</p>
                <p className="text-xs  font-light">{data.articles} Articles</p>

            </div>

        </div>
     );
}

export default User;
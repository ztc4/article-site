'use client'
import Image from "next/image";
import React from "react";

function Comment({data}) {

    
    function handleClick(){
        
    }
    return ( 
        <div className="flex flex-row p-1 card w-full sm:w-80 " onClick={handleClick}>
            <div className=" w-2/12 justify-center">
                {data.avatar !== "" ? 
                <Image width={100} height={100}  src="/r" alt="article image"/>: 
                <div className=" border bg-red-600 rounded-full h-12 w-12"/>}
                
            </div>
            <div className="w-10/12 ml-2">
                <h4 className="title-text">{data.poster}</h4>
                <p>{data.comment}</p>
                <p className="text-xs mt-3 font-light">Likes:<span className="font-extralight">{data.likes}</span></p>
                
            </div>

        </div>
     );
}

export default Comment;
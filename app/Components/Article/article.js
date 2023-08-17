"use client"

import Image from "next/image";
import React from "react";


function Article({data}) {

    function handleClick(){

    }
    return ( 
        <div className=" p-1 card w-full h-32 sm:w-80 flex flex-col" id="article-component-wrapper" onClick={handleClick}>
            <div className="flex flex-row h-4/5 ">
                <div className=" w-4/12 p-2">
                    {data.posterImage !== "" ? <Image width={100} height={100}  src="/r" alt="article image"/>:
                    <div className="h-full w-full bg-red-600"/>}
                </div>
                <div className="w-8/12">
                    <h4 className="title-text">{data.title}</h4>
                    <p>{data.article[0].paragraph}</p>

                    
                </div>

            </div>
            <div className="flex-row flex ml-2 justify-between items-center">
                <div className="flex flex-rows space-x-3">
                    <p className="text-xs font-light">Author:<span className="font-extralight">{data.author}</span></p>
                    <p className="text-xs font-light">Category:<span className="font-extralight">{data.category}</span></p>

                </div>
                <p className="text-xs font-light mr-2">{data.timePosted} ago</p>

                

            </div>
        </div>
     );
}

export default Article;
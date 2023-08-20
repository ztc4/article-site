"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";


function Article({data}) {
    const { push } = useRouter()
    function redirect(){
        push(`../article/${data._id}`)
    
    }
    

    function handleClick(){

    }
    let background = `http://localhost:5000/articles/${data._id}/posterImage`
    return ( 
        <div className="w-[300px] border-1 overflow-hidden shadow-xl hover: cursor-pointer rounded-lg" onClick={redirect}>

        <Image 
        width={50} height={200}  
        className="w-full h-[200px] object-cover"
        src={`http://localhost:5000/articles/${data._id}/posterImage`}
        alt="Article Image"/>
        <div className="p-4">
            <h4 className="title-text">{data.title}</h4>
            <p className="text-xs font-light">Author:<span className="font-extralight">{data.author}</span></p>
            <p className="text-xs font-light">Category:<span className="font-extralight">{data.category ||" undefined"}</span></p>

        </div>

                







        </div>
     );
}

export default Article;
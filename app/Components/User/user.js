"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function User({data}) {
    const { push } = useRouter()
    function redirect(){
        push(`/profile/${data.username}`)
    
    }


    let [error,setError]= React.useState(false)

    //username category articles subscribers id
    function handleClick(){

    }
    console.log(10,data._id)
    return ( 
        <div className="flex flex-col p-1 card w-[300px] h-20 " onClick={redirect}>
            <div className="h-full flex flex-row items-center">
                <div className=" w-2/12 justify-center ml-2 h-full">
                { !error  &&
                    <Image 
                    
                    width={500} height={500} 
                    className=" object-fill h-12 w-12 rounded-full rotate-90 hover:cursor-pointer"
                    src={`https://article-website-images.s3.amazonaws.com/${data._id}.webp`} 
                    alt="article image"
                    loading="lazy"
                    onError={()=> setError(true)}
                    />
            
                    }
                    
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
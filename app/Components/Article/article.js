"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {motion} from "framer-motion"

function Article({data}) {
    const { push } = useRouter()
    function redirect(){
        push(`../article/${data._id}`)
        
    
    }
    


 
  
   

    return ( 
        <motion.div
        whileHover={{scale:1.02}}
        transition={{duration:0.7}}
        
        className="w-[300px] border-1 overflow-hidden shadow-xl hover: cursor-pointer rounded-lg" onClick={redirect}>

        <Image 
        width={2000} height={2000}  
        className="w-full h-[200px] object-cover"
        src="/image-1"
        alt="Article Image"/>
        <div className="p-4">
            <h4 className="title-text">{data.title}</h4>
            <p className="text-xs font-light">Author:<span className="font-extralight">{data.author}</span></p>
            <p className="text-xs font-light">Category:<span className="font-extralight">{data.category}</span></p>

        </div>

                







        </motion.div>
     );
}

export default Article;
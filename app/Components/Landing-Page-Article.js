"use client"

import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
import { useState } from "react";


function LandingPageArticle({data}) {
    const [imageError, setImageError] = useState(false);


    //${data._id || ""}
    return ( 
        
            <Link  href={`/article/${data._id}`}  passHref>
                
                
                <motion.div
                whileHover={{scale:1.02}}
                transition={{duration:0.7}}
                className="w-full p-1  flex flex-row h-20 rounded-lg bg-purple" >
    
                    {!imageError ? 
                        <Image 
                            width={2000} 
                            height={2000}  
                            className="w-1/6 object-cover"
                            src={`https://article-website-images.s3.amazonaws.com/${data._id}.webp`}
                            alt="Article Image"
                            loading="lazy"
                            onError={() => setImageError(true)}
                        />
                        :
                        <div className="h-full  rounded-xl w-1/6 bg-pink">

                        </div>
                    }
                    <div className="p-4 flex flex-col uppercase  items-start w-5/6 text-ps md:text-pl font-haskoy-semibold  ">
                        <h4 className="  h-5/6 gap-8 line-clamp-1 text-ps md:text-pl text-center">{ data?.title || 
                        "THE FIRST ARTICLE"}</h4>
                        <div className='flex flex-row w-full text-ps h-1/6  justify-between'>
                            <p className="">AUTHOR - { data?.author || 
                            "ZTC4"}</p>
                            <p className="ml-auto">{ data?.category || 
                            "PROGRAMMING"}</p>
                        </div>
            
            
                    </div>
                </motion.div>
            </Link>
         );
}

export default LandingPageArticle;
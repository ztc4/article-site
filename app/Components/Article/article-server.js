"use client"

import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";

function ArticleServer({data}) {
    return ( 
        <Link pass href={`/article/${data._id}`}>
            
        <motion.div
          whileHover={{scale:1.02}}
          transition={{duration:0.7}}
          className="w-full min-w-32 border-1 z-10 font-martel opacity-100 bg-white overflow-hidden shadow-xl cursor-pointer rounded-lg" >

        <Image 
        width={2000} height={2000}  
        className="w-full h-[200px] object-cover"
        src={`https://article-website-images.s3.amazonaws.com/${data._id}.webp`}
        alt="Article Image"
        loading="lazy"
        
        />
        <div className="p-4 h-[100px] flex flex-col justify-between">
            <h4 className="title-text text-center">{data.title || 
            "title"}</h4>
            <div className='flex flex-row justify-between'>
              <p className="text-xs font-semibold">Author:{data.author || 
              "red"}</p>
              <p className="text-xs font-semibold">Category:{data.category || 
              "Yellow"}</p>

            </div>


        </div>
        </motion.div>
        </Link>
     );
}

export default ArticleServer;
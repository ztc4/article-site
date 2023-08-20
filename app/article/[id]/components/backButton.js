"use client"

import { ArrowCircleLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";

function BackButton() {
    const router = useRouter()

    
    return ( 
        <div className="w-full h-full flex  justify-center items-center" onClick={()=>router.back()}>
            <ArrowCircleLeft className=" text-5xl  text-gray-900 hover:text-gray-200"/>
        </div>
     );
}

export default BackButton;
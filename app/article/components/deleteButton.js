"use client"
import { DeleteOutline, Delete } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import cookieCutter from "cookie-cutter"
import { useRouter } from "next/navigation";

function DeleteArticle({id}) {
    const router = useRouter()

    let [userArticle, setUserArticle] = React.useState(false)
    function deleteArticle(){
        axios.delete(`http://localhost:3000/dev/currentUserArticle/${id}` ,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        })
        .then((res)=>{ 

            
            alert("Successfully delete the article")
            router.back()
        })
        .catch((err)=> alert("couldn't delete the article"))
    }

    React.useEffect(()=>{
        axios.get(`http://localhost:3000/dev/currentUserArticle/${id}` ,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        })
        .then((res)=> setUserArticle(res.data))
        .catch((err)=> console.log(1,err))
    })
    return (          
            <>
               {userArticle ==  true &&  
               <div
               onClick={deleteArticle}
                className="text-4xl group absolute  cursor-pointer bottom-0 right-0 m-2">
                    <DeleteOutline className=" group-hover:hidden text-4xl"/>
                    <Delete className=" hidden text-red-700 group-hover:block text-4xl"/>
                </div>}
            </>

            

     );
}

export default DeleteArticle;
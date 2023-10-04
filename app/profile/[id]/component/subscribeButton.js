"use client"
import cookieCutter from 'cookie-cutter'
import axios, { Axios } from "axios";
import React,{ useEffect } from 'react';


function SubscribeButton({username}) {

    let[isSubscribed, setSubscribed] = React.useState(false)
    async function subscribe(){
       await axios.put("https://article-api-cookies-instead-of.onrender.com/user/subscribe",

       {
            username: username
        },{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        }
        )
        .then(res => {setSubscribed(!isSubscribed)})
        .catch(res => alert(res))
    }
  



    React.useEffect(()=>{

        axios.get(`https://article-api-cookies-instead-of.onrender.com/user/subscribed/${username}/check`,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        }).then(
            res => {console.log(res);setSubscribed(res.data.subscribed)})
        

    },[])



    return ( 
        <button onClick={subscribe} className={`${isSubscribed ? "bg-blue-500 hover:bg-red-600": "bg-red-600 hover:bg-blue-600" }  m-3 p-1 px-2  rounded-md`}>{isSubscribed ? "SUBSCRIBED": "SUBSCRIBE"}</button>
     );
}

export default SubscribeButton;
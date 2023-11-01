"use client"
import cookieCutter from 'cookie-cutter'
import axios, { Axios } from "axios";
import React,{ useEffect } from 'react';


function SubscribeButton({username}) {

    let[isSubscribed, setSubscribed] = React.useState(false)
    async function subscribe(){
       await axios.put("https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/user/subscribe",

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

        console.log("im doing it")
        axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/user/subscribed/${username}/check`,{
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
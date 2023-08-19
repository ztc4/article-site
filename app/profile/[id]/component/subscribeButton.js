"use client"
import cookieCutter from 'cookie-cutter'
import axios, { Axios } from "axios";

function SubscribeButton({username,Subscribed}) {
    async function subscribe(){
       await axios.put("http://localhost:5000/user/subscribe",

       {
            username: username
        })
        .then(res => res)
        .catch(res => alert(res))
    }



    return ( 
        <button onClick={subscribe} className="bg-blue-500 p-1 px-2 hover:bg-blue-600 rounded-md">{Subscribed ? "unsubscribe": "subscribe"}</button>
     );
}

export default SubscribeButton;
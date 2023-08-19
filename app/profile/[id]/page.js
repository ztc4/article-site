import Image from "next/image";
import React from "react";
import ProfileArticles from "./component/latest";
import SubscribeButton from "./component/subscribeButton";
import { cookies } from 'next/headers'

async function getProfile(id){
    
    let data = fetch(`http://localhost:5000/user/${id}`,{
        method: "GET",
        cache: 'no-cache'
    
      })
    .then(res =>res.json())
    .then(res => res)
    .then(res => { return res})
    return data
}

async function Profile(query) {
    let data = await getProfile(query.params.id)

 
    
    
    return ( 
        <div className="w-screen h-min-screen flex flex-col overflow-x-hidden  sm:p-16 justify-center  ">
            <div className={" sm:bg-gray-100 sm:p-4 sm:drop-shadow sm:border-2 sm:mx-auto sm:rounded-3xl sm:w-[860px]  sm:max-h-fit"}>

                <div className="flex flex-col sm:flex-row gap-3 flex-wrap ">
                    <div className=" bg-gray-200 rounded-2xl p-4">
                        <Image 
                            className=" color4 drop-shadow h-16 w-16 rounded-full "
                            src={`http://localhost:5000/users/${data._id}/avatar`} 
                            width={50} height={50} alt="News article poster Image"
                            />

                        <div className="flex flex-col gap-1 px-1">
                                                            
                            <h1 className="font-semibold pl-2 text-xl leading-relaxed">{data.username}</h1>
                            <p className="info-text pl-2">{data.category} Account</p>
                            <p className="info-text pl-2">{data.totalSubscribers} Subscribers</p>
                            <p className="info-text pl-2">Posted {data.postedArticle} Articles</p>
                                                            
                        </div>
                        <SubscribeButton/>
                    </div>
                    <div className="pl-3 sm:ml-24 pt-8 flex flex-col bg-gray-200 rounded-lg">
                        <h5 className="text-3xl ">Pinned Article</h5>
                    </div>
                </div>
                <div className="drop-shadow-xl px-1 mt-6">
                    <p className="title-text pl-2">About:</p>
                    <p className="article-text pl-2">{data.about || "User doesn't have an bio"}</p>
                </div>
                <ProfileArticles username={data.username}/>

            </div>
        </div>
     );
}

export default Profile;
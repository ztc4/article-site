"use client"

import Search from "../Components/Search/search";
import NText from "../Components/Text/n-text";
import { UserContext } from "./context/userContext";
import React from "react";

function Layout({children}) {

    const [page,setPage] = React.useState(1)
    const [subscribedPage, setSubscribedPage] = React.useState(1)
    const [myPage, setMyPage] = React.useState(1)
    const [newArticle, setNewArticle] = React.useState({
        title:"",
        posterImage:undefined,
        category:"",
        article:[]
    })
    function changePage(x){
        setPage(x)
    }

    


    return ( 
        <UserContext.Provider value={{page, subscribedPage, setSubscribedPage, myPage,setMyPage, newArticle,setNewArticle}}>
            <div className=" w-screen">
                <div className="flex flex-row items-center px-8 h-16 color4">
                    <Search data={{placeholder: "search from all"}}/>

                </div>
                
                <div className="flex flex-row justify-center">
                    <NText data={{active:page == 1 ? true : false, arrow:true ,text:"Home", }} handleClick={()=>changePage(1)}/>
                    <NText data={{active:page == 2 ? true : false, arrow:true ,text:"Subscribed"}} handleClick={()=>changePage(2)}/>
                    <NText data={{active:page == 3 ? true : false, arrow:true ,text:"My page"}} handleClick={()=>changePage(3)}/>
                </div>
                {children}



            </div>
        </UserContext.Provider>
     );
}

export default Layout;
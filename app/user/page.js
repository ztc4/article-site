"use client"

import React from "react";
import Subscribed from "./components/Subscribed/Subscribed";

import HomePage from "./Home/home";
import MyPage from "./components/My page/myPage";
import { UserContext } from "./context/userContext";
import NText from "../Components/Text/n-text";
import Image from "next/image";
import Search from "../Components/Search/search";
import { Settings } from "@mui/icons-material";
import { useRouter } from "next/navigation";


function Social() {
    const router = useRouter()

    const{page, setPage, data,searchOptions}= React.useContext(UserContext)
    

    
    function changePage(x){
        setPage(x)
    }
    return ( 
        <div  className="grid gap-8 grid-cols-1">
            <div className="flex gap-3 flex-row items-center fixed  w-full  px-8 h-16 color4">
                {data.avatar !== ""  && !data? 
                    <Image width={50} height={50} className="border rounded-full" src="/r" alt="article image"/>: 
                    <div className=" border bg-red-600 rounded-full h-12 w-12"/>}
                   
                   {searchOptions.placeholder?
                    
                   <Search 
                    data={{
                        placeholder: `Search by ${searchOptions.placeholder}`,
                        value:searchOptions.value,
                        handleChange: searchOptions.changeFunction,
                        handleSearch : searchOptions.handleSearch
                    
                    }} />
                    :""  }
                     <div className="hover:cursor-pointer" onClick={()=>router.push("user/settings")}>
                        <Settings/>
                    </div>

            </div>



            <div className="flex flex-row justify-center mt-24">
                <NText data={{active:page == 1 ? true : false, arrow:true ,text:"Home", }} handleClick={()=>changePage(1)}/>
                <NText data={{active:page == 2 ? true : false, arrow:true ,text:"Subscribed"}} handleClick={()=>changePage(2)}/>
                <NText data={{active:page == 3 ? true : false, arrow:true ,text:"My page"}} handleClick={()=>changePage(3)}/>
            </div>
            {page == 1 && <HomePage/>}
            {page == 2 && <Subscribed/>}
            {page == 3 && <MyPage/>}

        </div>
     );
}

export default Social;

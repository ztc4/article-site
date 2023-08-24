"use client"

import React, { useEffect } from "react";
import Subscribed from "./components/Subscribed/Subscribed";

import HomePage from "./Home/home";
import MyPage from "./components/My page/myPage";
import { UserContext } from "./context/userContext";
import NText from "../Components/Text/n-text";
import Image from "next/image";
import Search from "../Components/Search/search";
import { Settings } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";


function Social() {
    const router = useRouter()

    const{page,setSearchMainActive,searchMainActive, setPage, data,searchOptions,search,user}= React.useContext(UserContext)
    let [searchResults, setSearchResults] = React.useState([])  
    
    async function MainSearch(){
        await axios.get(`http://localhost:5000/search?search=${search.mainSearch}`).catch(
         res => console.log(res)
        )
        .then( res => setSearchResults(res.data))
     }

     useEffect(()=>{
        if(search.mainSearch !== ""){
            setSearchMainActive(true)
            MainSearch()

        }

            

     }, [search.mainSearch])
  
    if(searchOptions.placeholder == "all"){
        // MainSearch()

    }
    let searchResultsElements = searchResults.map(current =>{
        if(current.title){
            return <Link key={current._id} href={`article/${current._id}`} className=" pl-6 hover:cursor-pointer h-9 p-2 flex items-center tracking-wide font-semibold hover:bg-slate-400"> {current.title}</Link>

        }
        else{
            return <Link key={current._id} href={`profile/${current.username}`} className=" pl-6  hover:cursor-pointer h-9 p-2 flex items-center font-semibold tracking-wide hover:bg-slate-400"> {current.username}</Link>

        }
    })
    console.log(searchResultsElements)

    
    function changePage(x){
        setPage(x)
    }
    return ( 
        <div  className="grid gap-8 grid-cols-1">
            <div className="flex gap-3 flex-row items-center fixed  w-full   px-8 h-16 color4">
                    {user? 
                    <Image 
                    onClick={()=>router.push(`/profile/${user.username}`)}
                    width={50} height={50} 
                    className="rounded-full hover:cursor-pointer"
                    src={`http://localhost:5000/users/${user.id}/avatar`} 
                    alt="article image"/>: 
                    <div 
                    onClick={()=>router.push(`/profile/${user.username}`)}
                    className=" border hover:cursor-pointer bg-yellow-600 rounded-full h-12 w-12"/>}
                   
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
            {searchMainActive && 
            <div className="absolute flex flex-col w-full h-fit sm:w-1/2 bg-neutral-400 rounded-xl mx-auto z-20  left-0 right-0 top-14 bottom-0">

                {searchResultsElements}
                <div className=" pl-6  hover:cursor-pointer h-9 p-2 flex items-center font-semibold tracking-wide hover:bg-slate-400">
                    Close menu
                </div>
            </div>}




            <div className="flex flex-row justify-center mt-24" onClick={()=>setSearchMainActive(false)}>
                <NText data={{active:page == 1 ? true : false, arrow:true ,text:"Home", }} handleClick={()=>changePage(1)}/>
                <NText data={{active:page == 2 ? true : false, arrow:true ,text:"Subscribed"}} handleClick={()=>changePage(2)}/>
                <NText data={{active:page == 3 ? true : false, arrow:true ,text:"My page"}} handleClick={()=>changePage(3)}/>
            </div>
            <div onClick={()=>setSearchMainActive(false)}>
                {page == 1 && <HomePage/>}
                {page == 2 && <Subscribed/>}
                {page == 3 && <MyPage/>}
            </div>


        </div>
     );
}

export default Social;

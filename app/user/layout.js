"use client"

import axios from "axios";
import Search from "../Components/Search/search";
import NText from "../Components/Text/n-text";
import { UserContext } from "./context/userContext";
import React from "react";
import { useRouter } from "next/navigation";


function Layout({children}) {
    const router = useRouter()

    const [page,setPage] = React.useState(1)
    const [subscribedPage, setSubscribedPage] = React.useState(1)
    const [myPage, setMyPage] = React.useState(1);
 
    const [newArticle, setNewArticle] = React.useState({
        title:"",
        posterImage:undefined,
        category:"Other",
        article:[],
        paragraph:""
    })
    console.log(newArticle)


    const [search,setSearch] = React.useState({
        //My Page
        likedArticles: "",
        likedArticlesSkip: 0,
        postedArticles:"",
        postedArticlesSkip:0,
        subscribers:"",
        subscribersSkip:0,

        //Subscribed
        subscribedArticles:"",
        subscribedArticlesSkip:0,
        subscribedUsers:"",
        subscribedUsersSkip:0,

        //all search
        mainSearch: "",
        mainSearchSkip: 0,

    })

    const [data,setData] = React.useState({
        //My Page
        likedArticles:[],
        postedArticle:[],
        subscribers:[],
        //Subscribed Page
        subscribedArticle:[],
        subscribedUsers:[],
        //all search
        mainSearch: []
      
    })
    function DataChange(key,data){

        setData(current =>({
            ...current,
            [key]: current[key].concat(data)
        }))

    }
    console.log(data)
    //FETCH DATA RELATED TO ARTICLES
    async function LikedArticles(search = "",skip = 0) {
        await axios.get(`http://localhost:5000/user/articles/liked?search${search}&skip=${skip}`,{
            withCredentials:true
        })
        .then(res => DataChange("likedArticles", res.data))
    }

    async function PostedArticles(search = "",skip = 0) {
        await axios.get(`http://localhost:5000/user/articles/posted?search${search}&skip=${skip}`,{
            withCredentials: true
        })
        .then(res => {console.log(res);DataChange("postedArticle", res.data)})
    }
    async function SubscribedArticle(search = "",skip = 0) {
       await axios.get(`http://localhost:5000/user/articles/subscribed?search${search}&skip=${skip}`,{
            withCredentials:true
        })
        .then(res => DataChange("subscribedArticle", res.data))
    }

    //FETCH DATA RELATED TO USERS
    async function GetSubscribedUsers(search = "",skip = 0) {
         await axios.get(`http://localhost:5000/user/users/subscribed?search=${search}&skip=${skip}`,{
            withCredentials: true
         })
        .then(res => DataChange("subscribedUsers", res.data))
    
    }
    async function GetSubscribers(search = "",skip = 0){
         await axios.get(`http://localhost:5000/user/users/subscribers?search=${search}&skip=${skip}`,{
            withCredentials:true
        })
        .then(res => DataChange("subscribers", res.data))
        
    
    }



    React.useEffect(()=>{
        console.log("checking login")
        axios.get(`http://localhost:5000/login/check`,
        {withCredentials: true})
        .then( res => {res})
        .catch(error => {alert("You aren't logged... taking you to login screen"); router.push('login')})

        //set liked post first 10
        LikedArticles()

        //set subscribed article first 10
        SubscribedArticle()


        //set first posted first 10
        PostedArticles()

        // GET USERS
        GetSubscribers()
        GetSubscribedUsers()


    },[])



    function changePage(x){
        setPage(x)
    }
    function decideWhichSearch(e){
        let placeholder;
        let changeFunction;
        let value;
        
        if(page == 1){

            placeholder= "all"
            changeFunction =(e)=> setSearch(current=>({
                ...current,
                mainSearch: e.target.value
            }));
            value = search.mainSearch
            

        }
        else if(page == 2){
            switch(subscribedPage){
                case 1: placeholder ="Accounts"
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    subscribedUsers: e.target.value
                }))
                value = search.subscribedUsers
                
                ;break;
                case 2: 
                placeholder ="Articles"
 
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    subscribedArticles: e.target.value
                }))
                value = search.subscribedArticles
                
                ;break;
            }

        }
        else if(page == 3){
            switch(myPage){
                case 1: placeholder ="Posted"
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    postedArticles: e.target.value
                }))
                value = search.postedArticles
                
                ;break;
                case 3: placeholder ="Subscribers"
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    subscribers: e.target.value
                }))
                value = search.subscribers
                
                ;break;
                case 4: placeholder ="Liked"
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    likedArticles: e.target.value
                }))
                value = search.likedArticles
                
                ;break;
            }

        }
        return {placeholder, changeFunction, value}
    }
    let searchOptions = decideWhichSearch()
    


    return ( 
        <UserContext.Provider value={{
            page,subscribedPage,setSubscribedPage,myPage
            ,setMyPage,newArticle,setNewArticle,
            search,setSearch,data
            }}>
            <div className=" w-screen">
                <div className="flex flex-row items-center px-8 h-16 color4">
                   {searchOptions.value == undefined? ""  :<Search 
                    data={{
                        placeholder: `Search by ${searchOptions.placeholder}`,
                        value:searchOptions.value,
                        handleChange: searchOptions.changeFunction
                    
                    }} 
                    
                    
                    
                    />}

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
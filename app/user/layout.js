"use client"

import axios from "axios";
import Search from "../Components/Search/search";
import NText from "../Components/Text/n-text";
import { UserContext } from "./context/userContext";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { CurrencyYenTwoTone, Settings } from "@mui/icons-material";
import Image from "next/image";
import cookieCutter from "cookie-cutter";


function Layout({children}) {

    const router = useRouter()
    

    const [page,setPage] = React.useState(1)
    const [subscribedPage, setSubscribedPage] = React.useState(1)
    const [myPage, setMyPage] = React.useState(1);

    //Creating new article information
 
    const [newArticle, setNewArticle] = React.useState({
        title:"",
        posterImage:undefined,
        category:"Other",
        article:[],
        paragraph:""
    })
  

// Search Information... number of skips database should do trac
    const [search,setSearch] = React.useState({
        //My Page
        //
        likedArticles: "",
        likedArticlesSkip: 0,
        likedArticlesLast:"",
        //
        postedArticles:"",
        postedArticlesSkip:0,
        postedArticlesLast:"",
        //
        subscribers:"",
        subscribersSkip:0,
        subscribersLast:"",

        //Subscribed
        subscribedArticles:"",
        subscribedArticlesSkip:0,
        subscribedArticlesLast:"",

        //
        subscribedUsers:"",
        subscribedUsersSkip:0,
        subscribedUsersLast:"",

        //all search
        mainSearch: "",
        mainSearchSkip: 0,
        mainSearchLast:"",

    })


    //Storing and Changing Data
    const [data,setData] = React.useState({
        //My Page
        likedArticles:[],
        postedArticle:[],
        subscribers:[],
        //Subscribed Page
        subscribedArticle:[],
        subscribedUsers:[],
        //all search
        mainArticles: []
      
    })
    function DataChange(key,data,lastSearch,currentSearch){
        setData(current =>({
            ...current,
            [key]: lastSearch == currentSearch ? current[key].concat(data) : data,
        }))
    }




    //FETCH DATA RELATED TO ARTICLES
    async function MainArticles() {
        let last = search.mainSearchLast
        let current = search.mainSearch
        let skip = last == current ? search.mainSearchSkip : 0
        await axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/articles?search=${search.mainSearch}&skip=${skip}`,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        })
        .then(res => {DataChange("mainArticles", res.data,search.mainSearchLast,search.mainSearch)})
        .then(setSearch(current=>({
            ...current,
            mainSearchSkip: skip + 10,
            mainSearchLast : search.mainSearch
        })))
    }




    async function LikedArticles() {
        let last = search.likedArticlesLast
        let current = search.likedArticles
        let skip = last == current ? search.likedArticlesSkip: 0
        await axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/user/articles/liked?search=${search.likedArticles}&skip=${skip}`,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        })
        .then(res => DataChange("likedArticles", res.data,search.likedArticlesLast,search.likedArticles))
        .then(setSearch(current=>({
            ...current,
            likedArticlesSkip: skip + 10,
            likedArticlesLast: search.likedArticles
        })))
    }

    async function PostedArticles() {
        let last = search.postedArticlesLast
        let current = search.postedArticles
        let skip = last == current ? search.postedArticlesSkip : 0
        await axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/user/articles/posted?search=${search.postedArticles}&skip=${skip}`,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        })
        .then(res => {DataChange("postedArticle", res.data,search.postedArticlesLast,search.postedArticles)})
        .then(setSearch(current=>({
            ...current,
            postedArticlesSkip: skip + 10,
            postedArticlesLast : search.postedArticles
        })))
    }



    async function SubscribedArticle() {

        let last = search.subscribedArticlesLast
        let current = search.subscribedArticles
        let skip = last == current ? search.subscribedArticles : 0
       await axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/user/articles/subscribed?search=${search.subscribedArticles}&skip=${skip}`,{
        headers:{
            Authorization : `Bearer ${cookieCutter.get("token")}`
           }
        })
        .then(res => DataChange("subscribedArticle", res.data, search.subscribedArticlesLast,search.subscribedArticles))
        .then(setSearch(current=>({
            ...current,
            subscribedArticlesSkip: skip + 10,
            subscribedArticlesLast: search.subscribedArticles
        })))
    }

    //FETCH DATA RELATED TO USERS
    async function GetSubscribedUsers() {
        let last = search.subscribedUsers
        let current = search.subscribedUsersLast
        let skip = last == current ? search.subscribedUsersSkip : 0
         await axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/user/users/subscribed?search=${search.subscribedUsers}&skip=${skip}`,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
         })
        .then(res => DataChange("subscribedUsers", res.data,search.subscribedUsersLast, search.subscribedUsers))
        .then(setSearch(current=>({
            ...current,
            subscribedUsersSkip: skip + 10,
            subscribedUsersLast: search.subscribedUsers
        })))
    
    }
    async function GetSubscribers(){
        let last = search.subscribersLast
        let current = search.subscribers
        let skip = last == current ? search.subscribersSkip : 0
         await axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/user/users/subscribers?search=${search.subscribers}&skip=${skip}`,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
        })
        .then(res => DataChange("subscribers", res.data,search.subscribersLast, search.subscribers))
        .then(setSearch(current=>({
            ...current,
            subscribersSkip: skip + 10,
            subscribersLast: search.subscribers
        }))
        )
    
    }

    //CURRENT USER--MAINLY USED FOR SETTINGS
    let [user,setUser] = React.useState({
        id:"",
        username:"",
        category:"",
        about:""
    })
    const [searchMainActive,setSearchMainActive] = React.useState(false);

    //GET DATA AT BEGINNING
    React.useEffect(()=>{
        console.log("checking login")
        axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/login/check`,
        {           headers:{
            Authorization : `Bearer ${cookieCutter.get("token")}`
           }})
        .then( res => setUser({
            id:res.data._id, 
            username:res.data.username,
            category: res.data.category,
            usernameUpdated:res.data.username,
            about:res.data.about
            
        }))
        .catch(error => {alert("You aren't logged... taking you to login screen"); router.push('/login')})

        //FETCH ARTICLES FOR SETUP
        LikedArticles()
        SubscribedArticle()
        PostedArticles()

        // FETCH FOLLOWING AND FOLLOWERES
        GetSubscribers()
        GetSubscribedUsers()
        //
        MainArticles()

        //HAD THE SET MY DATA DUE TO UNKNOWN ERROR
        setSearch({
            //My Page
            likedArticles: "",
            likedArticlesSkip: 10,
            likedArticlesLast:"",
            //
            postedArticles:"",
            postedArticlesSkip:10,
            postedArticlesLast:"",
            //
            subscribers:"",
            subscribersSkip:0,
            subscribersLast:"",
    
            //Subscribed
            subscribedArticles:"",
            subscribedArticlesSkip:10,
            subscribedArticlesLast:"",
            //
            subscribedUsers:"",
            subscribedUsersSkip:10,
            subscribedUsersLast:"",
    
            //all search
            mainSearch: "",
            mainSearchSkip: 10,
            mainSearchLast:"",
    
        })


    },[])



    function changePage(x){
        setPage(x)
    }
    function decideWhichSearch(e){
        let placeholder;
        let changeFunction;
        let value;
        let handleSearch;
        
        if(page == 1){

            placeholder= "all"
            changeFunction =(e)=> setSearch(current=>({
                ...current,
                mainSearch: e.target.value,
            }));
            value = search.mainSearch
            handleSearch= (e)=> MainArticles()
            

        }
        else if(page == 2){
            switch(subscribedPage){
                case 1: placeholder ="Accounts"
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    subscribedUsers: e.target.value,
                    
                }))
                value = search.subscribedUsers
                handleSearch= (e)=>GetSubscribedUsers()
                
                ;break;
                case 2: 
                placeholder ="Articles"
 
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    subscribedArticles: e.target.value,
                    
                }))
                value = search.subscribedArticles,
                handleSearch= (e)=>SubscribedArticle()
                
                ;break;
            }

        }
        else if(page == 3){
            switch(myPage){
                case 1: placeholder ="Posted";
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    postedArticles: e.target.value,
                   
                }));
                value = search.postedArticles;
                handleSearch= (e)=>PostedArticles()
                console.log(search)
                
                ;break;
                case 3: placeholder ="Subscribers"
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    subscribers: e.target.value,
                    
                }));
                value = search.subscribers
                handleSearch= (e)=>GetSubscribers()
                
                ;break;
                case 4: placeholder ="Liked"
                changeFunction =(e)=> setSearch(current=>({
                    ...current,
                    likedArticles: e.target.value,
                    
                }));
                value = search.likedArticles
                handleSearch= (e)=>LikedArticles()
                
                ;break;
            }

        }
        return {placeholder, changeFunction, value, handleSearch}
    }
    let searchOptions = decideWhichSearch()
    


    return ( 
        <UserContext.Provider value={{
            page,setPage,subscribedPage,setSubscribedPage,myPage
            ,setMyPage,newArticle,setNewArticle,
            search,setSearch,data,
            //Fetch functions
            LikedArticles,
            SubscribedArticle,
            PostedArticles,
            MainArticles,

            //
            searchOptions,

            GetSubscribers,
            GetSubscribedUsers,
            //settings
            user,
            setUser,

            setSearchMainActive,
            searchMainActive
            }}>
            <div className=" w-screen">

                
                
                {children}



            </div>
        </UserContext.Provider>
     );
}

export default Layout;
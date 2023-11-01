"use client"
import Input from "../../Components/Input/input"
import { useRouter } from "next/navigation"
import React from "react"
import { UserContext } from "../../context/userContext"
import Image from "next/image"
import axios from "axios"
import Layout from "./layout"
import BackButton from "../../Components/backButton"

import cookieCutter from "cookie-cutter"

function Settings() {
    const{user,setUser}= React.useContext(UserContext)
    const [isLoading,setIsLoading] = React.useState(false)
    const router = useRouter()



    let[avatar,setAvatar] = React.useState("")

    let usernameInput={
        placeholder: "Enter the username", 
        name:"usernameUpdated",
        type:"textbox",
        id:"usernameUpdated",
        value:user.usernameUpdated

}
    let avatarInput={
        title:"chose",
        placeholder: "Add Poster Image", 
        name:"image",
        type:"file",
        id:"avatar",
    }
    //HANDLECHANGE
    function handleChange(e){
        setUser( current=>({
            ...current,
            [e.target.id]: e.target.value
        }))

    }
    //SET AVATAR
    function uploadAvatar(e){
        console.log(e.target.files)
             setAvatar(e.target.files[0])
             
    }

    console.log(user)

    //UPDATE
    async function ButtonHandleClick(){
        setIsLoading(true)
        


        let type = null
        if(avatar?.type){
            type = avatar.type

        }
    
        let result = await axios.put(
            `https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/user/avatar`,
            {
                category: user.category,
                about: user.about,
                type
            },
            {
                headers:{
                    Authorization : `Bearer ${cookieCutter.get("token")}`
                   }
            }

        )
        .then(res => res)
        .catch(err => {alert(err); return err.response})
        


        if(result.status !== 200){
            setIsLoading(false)
            alert("failed to change profile")
            return 

        }
        else if(result.data.image == null){
            setIsLoading(false)
            return alert("user information changed")

           }


        let response = await axios.put(result.data.url, avatar, {
            headers: {
              'Content-Type': type// adjust if other types are needed
            }
          })
          setIsLoading(false)
          return alert("user information including image is changed!")
          console.log(response)
    }


    function Logout(){
        axios.put(
            `https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/logout`,{

            },
            {
                headers:{
                    Authorization : `Bearer ${cookieCutter.get("token")}`
                   }
            }

        )
        .catch( res => alert("Having trouble logging out"))
        .then(res =>{router.push("/")})
    }
    function LogoutAll() {
        axios.put(
            `https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/logoutAll`,{

            },
            {
                headers:{
                    Authorization : `Bearer ${cookieCutter.get("token")}`
                   }
            }

        )
        .catch( res => alert("Having trouble saving"))
        .then(res => alert("Logout all other users"))
    }
    console.log(4,user)
    
    

    return ( 
        <div className="min-h-screen w-screen overflow-x-hidden">
            
            <div className=" grid grid-cols-1 gap-8 w-full p-12 mx-auto  md:w-10/12 lg:w-8/12">
                
                <div className="flex flex-row gap-4 items-center">
                    <div className="h-24 w-24  rounded-full">
                        <Image 
                                className=" color4 w-full border rotate-90 h-24 rounded-full  drop-shadow object-cover  "
                                src={`https://article-website-images.s3.amazonaws.com/${user.id}.webp`}
                                width={500} height={500} alt="News article poster Image"
                                loading="lazy"
                                />
                    </div>
                    <h4 className="text-3xl">{user.username}</h4>
                </div>
                {/* <h2 className="-mb-4">Change username</h2>
                <Input data={usernameInput} handleChange={handleChange}/> */}
                <Input data={avatarInput} handleChange={uploadAvatar}/>
                <div className="grid gap-2 grid-cols-2">
                    <button onClick={Logout} className="bg-gray-200 rounded-full p-4">Logout</button>
                    <button onClick={LogoutAll} className="bg-gray-200 rounded-full p-4">Logout All</button>

                </div>
                
                <select  id="category" value={user.category} onChange={handleChange}>
                    <option value="Other" >Other</option>
                    <option value="Programming">Programming</option>
                    <option value="Gaming">Gaming</option>
                    <option value="News">News</option>
                    <option value="Personal">Personal</option> 
                </select>
                <h2 className="-mb-4">About</h2>
                <textarea 
                    onChange={handleChange}
                    id="about" 
                    className="p-4 border h-28" 
                    value={user.about}
                    autoComplete="on" 
                    cols={8}/>
                <button onClick={ButtonHandleClick} 
                disabled={isLoading}
                className="bg-gray-200 rounded-full p-4">
                    
                {!isLoading ?
                 "Update" : 
                 <Image width={20} height={20} class=" ml-3 inline-block animate-spin  h-8 w-8" alt="loading" src="/loading-20.svg"/>}
                </button>

                

            </div>
        </div>
     );
}
Settings.getLayout = function getLayout(page) {
    return (
     {page}
    )
  }

export default Settings;
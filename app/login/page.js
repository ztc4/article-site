"use client"
import React from "react";
import Button from "../Components/Button/button";
import Input from "../Components/Input/input";
import Link from "next/link";
import axios from "axios";
import cookieCutter from "cookie-cutter"
import { useRouter } from "next/navigation";




function Login() {

    const { push } = useRouter()


    const [login,setLogin] = React.useState({
        username:"",
        password:""
    })

    let buttondata = {
        text:"Login",
        size: "submit",
        name: "login",
        disabled: false
    }
    function handleChange(e){
        setLogin(current=>({...current,[e.target.id]:e.target.value}))

    }

    async function ButtonHandleClick(){
        
        const formData = new FormData()
        formData.append("username",login.username)
        formData.append("password",login.password)
    
        await axios.put(
            `http://localhost:5000/login`,{
             username:login.username,
               password:login.password
            },{
                withCredentials: true
            }

        )
        .then(
            res => push("user"))
    }
    let userNameData = {
        placeholder: "Enter Username", 
        name:"username",
        type:"text",
        id:"username",
        value:login.username
    }
    let passwordData = {
        placeholder: "Enter Password", 
        name:"password",
        type:"password",
        id:"password",
        value:login.password
    }
    return ( 
        <div className="min-h-screen w-screen overflow-x-hidden">
            <div className=" grid grid-cols-1 gap-8 w-full p-12 mx-auto mt-28 md:w-10/12 lg:w-8/12">
                <h1 className="text-4xl font-semibold  text-center">Login</h1>
                <Input  data={userNameData} handleChange={handleChange} />
                <Input data={passwordData} handleChange={handleChange}/>
                <Link href={"signup"} className="font-medium -mt-4 mb-20">Don’t have an Account yet? Click here to Signup </Link>
                
                <Button data={buttondata} handleClick={ButtonHandleClick}/>
                

            </div>
        </div>
     );
}

export default Login;
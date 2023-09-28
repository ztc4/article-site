"use client"
import React, { useEffect } from "react";
import Button from "../Components/Button/button";
import Input from "../Components/Input/input";
import Link from "next/link";
import axios from "axios";
import cookieCutter from "cookie-cutter"
import { useRouter } from "next/navigation";
import { ErrorTwoTone } from "@mui/icons-material";
import {motion} from "framer-motion"



function Login() {

    const { push } = useRouter()

    // cookieCutter.set("name","lee")
    // let name = cookieCutter.get("token")
    // console.log(name)
    useEffect(()=>{
        // alert("Logging in usually takes a bit of time due to the site not being as active!")
    },[])

  const [isLoading,setIsLoading] = React.useState(false)
  const [error,setError] = React.useState(false)


    const [login,setLogin] = React.useState({
        username:"",
        password:""
    })

    let buttondata = {
        text: !isLoading ? "Login": "Trying to login!",
        size: "submit",
        name: "login",
        disabled: isLoading
    }
    function handleChange(e){
        setLogin(current=>({...current,[e.target.id]:e.target.value}))

    }

    function ButtonHandleClick(){
        setIsLoading(true)
        setError(false)
        
        const formData = new FormData()
        formData.append("username",login.username)
        formData.append("password",login.password)
    
        axios.put(
            `https://article-api-cookies-instead-of.onrender.com/login`,{
             username:login.username,
               password:login.password
            }
        )
        .catch( res => {alert("couldn't login"); setIsLoading(false); setError(true)})
        .then(res => cookieCutter.set("token", res.data))
        .then(res =>{push("user")})
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
              <motion.div 
            initial={{y:-800,opacity:0.7}}
            animate={{y:10,opacity: 1}}
            duration={{duration:1,delay: 0}} 
            className=" grid grid-cols-1 gap-8 w-full p-2 mx-auto mt-12 md:w-10/12 lg:w-8/12">
                <h1 className="text-4xl font-semibold  text-center">Login</h1>
                <Input  data={userNameData} handleChange={handleChange} />
                <Input data={passwordData} handleChange={handleChange}/>
                <Link href={"signup"} className="font-medium -mt-4 "><motion.span>Don’t have an Account yet?
                    <motion.span
                    className="text-purple-600"
                    initial={{scale:1}}
                    whileHover={{fontSize:"20px", opacity:[0.3,1,0.3]}}
                    transition={{duration:0.3, opacity:{
                        duration: 1,
                        repeat: Infinity
                    }}}
                
                > Click here to Signup </motion.span> </motion.span></Link>
                <div className="text-center  font-semibold text-red-600 flex  justify-center">
                    <motion.div whileHover={{backgroundColor:"#FF000077"}} className="border-red-600 border-2 p-1 rounded-3xl">Trouble logging in<ErrorTwoTone/></motion.div>
                </div>
                
                <Button data={buttondata} handleClick={ButtonHandleClick}/>
                

            </motion.div>
        </div>
     );
}

export default Login;
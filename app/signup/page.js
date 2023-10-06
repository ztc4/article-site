"use client"
import React from "react";
import Button from "../Components/Button/button";
import Input from "../Components/Input/input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import cookieCutter from "cookie-cutter"
import {motion} from "framer-motion"
import { ErrorTwoTone } from "@mui/icons-material";

function Signup() {
    const [isLoading,setIsLoading] = React.useState(false)
    const [error,setError] = React.useState(false)
    const [signup,setSignup] = React.useState({
        username:"",
        password:"",
        fname:"",
        lname:"",
        email:"",
        age:"",
        confirm:""
    })
  
    
    const router = useRouter()

    function validInformation(){
        console.log("validating")
        setError(false)
        if(signup.fname.trim().length > 3){

        }else{
            return setError("Invalid First Name")

        }
        if(signup?.lname?.trim()?.length > 3){

        }else{
           return setError("Invalid Last Name")

        }

        try{
            if(signup.age == ""){
                console.log("less than 0")
                return setError("You must enter the age!")
            }
            let age = parseInt(signup.age.trim()) 
            console.log(age)
            if(Number.isInteger(signup.age)){ throw new Error("Age isnt a number!")}

        }
        catch(e){
            console.log("red")
            return setError("Age isn't a number")
        }
        if(signup.username == ""){
            return setError("You must add an username!")
        }


        if(signup.confirm == signup.password && /[A-Z]/.test(signup.password)&& signup.password.length >= 7&& /[0-9]/.test(signup.password)){

        }else{
            return setError("The password isn't valid")
        }
        return true
    }
    function ButtonHandleClick(){

        let valid = validInformation()


        console.log("the error is",error)
        console.log(!valid ? "It isnt' valid": "It is valid")
       if(valid !== true) return
        setIsLoading(true)
        axios.post(`https://ld3ydacyy9.execute-api.us-east-1.amazonaws.com/dev/signup`,{
            firstname:signup.fname.trim(),
            lastname:signup.lname.trim(),
            age:signup.age,
            username:signup.username.toLowerCase(),
            email:signup.email,
            password:signup.password
        },{
            
        })
        
        .then(res => cookieCutter.set("token", res.data))
        .then(res => router.push("user") )
        .catch(error => {alert(error);setIsLoading(false); setError("Error, Username or Email is most likely taken!")})
        
      

    }


    const[pageNumber,setPageNumber] = React.useState(1)

    let buttondata = {
        text:isLoading ? "Creating Account" :"Signup",
        size: "submit",
        name: "signup",
        disabled: isLoading
    }
    function handleChange(e){
        setSignup(current=>({...current,[e.target.id]:e.target.value}))

    }
    let fnameData = {
        placeholder: "First name", 
        name:"fname",
        type:"text",
        id:"fname",
        value:signup.fname

    }
    let lnameData = {
        placeholder: "last name", 
        name:"lname",
        type:"text",
        id:"lname",
        value:signup.lname

    }

    let userNameData = {
        placeholder: "Enter username", 
        name:"username",
        type:"text",
        id:"username",
        value:signup.username
    }
    let emailData = {
        placeholder: "Enter email", 
        name:"email",
        type:"email",
        id:"email",
        value:signup.email
    }
    let passwordData = {
        placeholder: "Enter Password", 
        name:"password",
        type:"password",
        id:"password",
        value:signup.password
    }
    let ageData={
        placeholder: "Age", 
        name:"age",
        type:"text",
        id:"age",
        value:signup.age
    }
    let confirmData={
        placeholder: "Confirm Password", 
        name:"confirm",
        type:"password",
        id:"confirm",
        value:signup.confirm
    }
      


    return ( 
        <div className="min-h-screen w-screen overflow-x-hidden">
        <motion.div 
            initial={{y:-800,opacity:0.7}}
            animate={{y:10,opacity: 1}}
            duration={{duration:1,delay: 0}}  className=" grid grid-cols-1 gap-8 w-full p-12 mx-auto my-auto  md:w-10/12 lg:w-8/12">
            <h1 className="text-4xl font-semibold  text-center">Signup</h1>
            {pageNumber == 1 && <Input  data={fnameData} handleChange={handleChange} />}
            {pageNumber == 1 &&<Input data={lnameData} handleChange={handleChange}/>}
            {pageNumber == 1 &&<Link href={"login"} className="font-medium -mt-4 ">Already have an Account?<motion.span
                    className="text-purple-600"
                    initial={{scale:1}}
                    whileHover={{fontSize:"20px", opacity:[0.3,1,0.3]}}
                    transition={{duration:0.3, opacity:{
                        duration: 1,
                        repeat: Infinity
                    }}}
                
                >  Click here to Login</motion.span></Link>}
            {pageNumber == 2 && <Input  data={emailData} handleChange={handleChange} />}
            {pageNumber == 2 &&<Input data={ageData} handleChange={handleChange}/>}
            {pageNumber == 3 && <Input  data={userNameData} handleChange={handleChange} />}
            {pageNumber == 3 &&<Input data={passwordData} handleChange={handleChange}/>}
            {pageNumber == 3 &&<Input data={confirmData} handleChange={handleChange}/>}

            <div className="flex flex-row justify-center">
                <button className="arrow-button" name="backward" onClick={()=>setPageNumber(current=> current -1)} disabled={(pageNumber == 2 || pageNumber == 3)? false : true}>{"<"}</button>
                {error !== false && <motion.div initial={{backgroundColor:"#FF000077"}} className="border-red-600 border-2 p-1 rounded-3xl">{error}<ErrorTwoTone/></motion.div>}
                <button className="arrow-button" name="forward" onClick={()=>setPageNumber(current=> current +1)} disabled={(pageNumber == 1 || pageNumber == 2)? false : true}>{">"}</button>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <p className={`text-base font-medium ${/[A-Z]/.test(signup.password) && "text-green-700"}`}>Includes Capital Letter</p>
                <p className={`text-base font-medium ${signup.password.length >= 7 && "text-green-700"}`}>More Than 8 Characters</p>
                <p className={`text-base font-medium ${/[0-9]/.test(signup.password) && "text-green-700"}`}>Includes Number</p>
                <p className={`text-base font-medium ${signup.confirm == signup.password  && "text-green-700"}`}>Passwords Match</p>
            </div>

            
            
            {pageNumber == 3 && <Button data={buttondata} handleClick={ButtonHandleClick}/>}
            

        </motion.div>
    </div>
     );
}

export default Signup;
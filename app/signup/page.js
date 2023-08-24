"use client"
import React from "react";
import Button from "../Components/Button/button";
import Input from "../Components/Input/input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import cookieCutter from "cookie-cutter"

function Signup() {
    const router = useRouter()
    function ButtonHandleClick(){
        axios.post(`https://article-api-cookies-instead-of.onrender.com/signup`,{
            firstname:signup.fname,
            lastname:signup.lname,
            age:signup.age,
            username:signup.username,
            email:signup.email,
            password:signup.password
        },{
            
        })
        .then(res => cookieCutter.set("token", res.data))
        .then(res => router.push("user") )
        .catch(error => alert(error))
      

    }
    const [signup,setSignup] = React.useState({
        username:"",
        password:"",
        fname:"",
        lname:"",
        email:"",
        age:"",
        confirm:""
    })
    const[pageNumber,setPageNumber] = React.useState(1)

    let buttondata = {
        text:"Signup",
        size: "submit",
        name: "signup",
        disabled: false
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
        <div className=" grid grid-cols-1 gap-8 w-full p-12 mx-auto my-auto  md:w-10/12 lg:w-8/12">
            <h1 className="text-4xl font-semibold  text-center">Signup</h1>
            {pageNumber == 1 && <Input  data={fnameData} handleChange={handleChange} />}
            {pageNumber == 1 &&<Input data={lnameData} handleChange={handleChange}/>}
            {pageNumber == 1 &&<Link href={"login"} className="font-medium mt-4 ">Already have an Account? Click here to Login</Link>}
            {pageNumber == 2 && <Input  data={emailData} handleChange={handleChange} />}
            {pageNumber == 2 &&<Input data={ageData} handleChange={handleChange}/>}
            {pageNumber == 3 && <Input  data={userNameData} handleChange={handleChange} />}
            {pageNumber == 3 &&<Input data={passwordData} handleChange={handleChange}/>}
            {pageNumber == 3 &&<Input data={confirmData} handleChange={handleChange}/>}

            <div className="flex flex-row justify-center">
                <button className="arrow-button" name="backward" onClick={()=>setPageNumber(current=> current -1)} disabled={(pageNumber == 2 || pageNumber == 3)? false : true}>{"<"}</button>
                <button className="arrow-button" name="forward" onClick={()=>setPageNumber(current=> current +1)} disabled={(pageNumber == 1 || pageNumber == 2)? false : true}>{">"}</button>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <p className={`text-lg font-bold ${/[A-Z]/.test(signup.password) && "text-green-700"}`}>Includes Capital letter</p>
                <p className={`text-lg font-bold ${signup.password.length >= 7 && "text-green-700"}`}>atleast 8 characters</p>
                <p className={`text-lg font-bold ${/[0-9]/.test(signup.password) && "text-green-700"}`}>Includes Number</p>
                <p className={`text-lg font-bold ${signup.confirm == signup.password && "text-green-700"}`}>Passwords match</p>
            </div>

            
            
            <Button data={buttondata} handleClick={ButtonHandleClick}/>
            

        </div>
    </div>
     );
}

export default Signup;
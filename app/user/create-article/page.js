"use client"

import { ArrowCircleLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Input from "../../Components/Input/input"
import { UserContext } from "../../context/userContext";
import axios from "axios";
import React from "react";
import cookieCutter from "cookie-cutter"
import { resolve } from "styled-jsx/css";
import Image from "next/image";
import CAPargaph from "../../Components/ca-paragraph-item"
import { ArrowBack } from "@mui/icons-material";
function AddArticles() {

    //STATE
    const{newArticle, setNewArticle}= React.useContext(UserContext)
    const [isLoading,setIsLoading] = React.useState(false)

    const [image1,setImage] = React.useState()


    //NAVIGATION
    const router = useRouter()

    function goBackToUser(){
        router.push("/user")

    }
    //Input Data
    let title={
            placeholder: "Enter Article title", 
            name:"title",
            type:"textbox",
            id:"title",
            value:newArticle.title

    }
    let image={
        title:"chose",
        placeholder: "Add Poster Image", 
        name:"image",
        type:"file",
        id:"posterImage",
    }

    //change inputs
    function handleChange(e){
            const {id, value} = e.target
            setNewArticle( current => ({
                ...current,
                [id]: value
            }))
            console.log(newArticle)

        }
    //upload add image
    function uploadImage(e){
           console.log(e.target.files)
                setImage(e.target.files[0])
                console.log(image1)

        }
    function deleteParagraph (clickedID){
        setNewArticle( current => ({
            ...current,
            article: current.article.filter((item,id) => id !== clickedID)
        }))
       

    }

       


        //Submit article
    async function submitForm() {    
            let type = null
            if(image1?.type){
                type = image1.type

            }
            
            setIsLoading(true)
            //"https://article-api-cookies-instead-of.onrender.com/article/add"
           let result = await axios.post("https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/article/add", 
           {
            title:newArticle.title,
            articleText:newArticle.article,
            category:newArticle.category,
            type
           },
           {
            headers:
            {
                Authorization : `Bearer ${cookieCutter.get("token")}`
            }
           }
           )
           .then(res => res)
           .catch(err => {console.log(err); return err.response})

           console.log(1,result)
           if(result.status !== 200){
            setIsLoading(false)
            alert("failed to create article")
            return 

           }
           else if(result.data.image == null){

            setNewArticle(current=> ({
                ...current,
                title:"",
                category:"",
                articleText:""
                  }))
            setIsLoading(false)
            alert("article created")
            return goBackToUser()

           }
        let response = await axios.put(result.data.url, image1, {
            headers: {
              'Content-Type': type// adjust if other types are needed
            }
          })
          //reset the article
        setNewArticle(current=> ({
        ...current,
        title:"",
        category:"",
        articleText:""
          }))
          setIsLoading(false)
          
 
        }
        React.useEffect(()=>{

        },[])
        



    return ( 
        <div 
        className="px-4 py-4 sm:p-8 mx-auto bg-red gap-4 h-full
         -z-10 drop-shadow-lg w-full sm:w-8/12 bg-neutral-300 
         flex flex-col">
            <button 

            className="self-start hover:bg-blue-500 p-1 px-2
             duration-500 hover:p-3 rounded-2xl flex justify-center 
             gap-2 items-center" 

             onClick={goBackToUser}>
                <ArrowBack />
                <p>Back</p>
                </button>
            {/* title */}
            <h2 className="-mb-4">Title:</h2>
            <Input data={title} handleChange={handleChange}/>


            {/* Select the Category of Article */}
            <h2 className="-mb-4">Select Category:</h2>
            <select  id="category" className="p-2 " 
            value={newArticle.category} 
            onChange={handleChange}>
                <option value="Other" >Other</option>
                <option value="Programming">Programming</option>
                <option value="Gaming">Gaming</option>
                <option value="News">News</option>
                <option value="Personal">Personal</option>
                
            </select>


            {/* add poster image */}
            <h2 className="-mb-4">Choose Image - png/jpeg/jpg</h2>
            <Input data={image} handleChange={uploadImage}/>

            {/* paragraph text input */}
            <textarea 
            onChange={(e)=>setNewArticle(current => ({
                ...current,
                paragraph: e.target.value}))} 
            className=" h-28" 
            value={newArticle.paragraph}
            autoComplete="on" 
            cols={8}/>
            <button onClick={(e)=>setNewArticle(current => ({
                ...current,
                article: current.article.concat(current.paragraph + "*8^"),
                paragraph:""
            }))} 
            className="bg-gray-200 rounded-full md:mx-auto md:w-1/2
             hover:bg-blue-500 duration-500  p-4">
                 Add paragraph
            </button>


            {/* Added Paragraphs */}
            {newArticle.article
            .map((current,id) => 
            <CAPargaph 
            key={current} 
            paragraph={current} 
            index={id} 
            handleClick={deleteParagraph}/>)}

            
            {/* Submit Button  */}
            
            <button 
            onClick={submitForm} 
            className="bg-gray-200 hover:scale-105 
            hover:bg-blue-500 duration-500 rounded-full p-4" 
            disabled={isLoading}>
                
                {!isLoading ?
                 "Add Article" : 
                 <Image 
                 width={20} height={20} 
                 class=" ml-3 inline-block animate-spin  h-8 w-8" 
                 alt="loading" 
                 src="/loading-20.svg"/>}
                 
            </button>
            
            

        </div>
     );
}

export default AddArticles;
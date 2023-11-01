import Input from "./Input/input"
import { UserContext } from "../context/userContext";
import axios from "axios";
import React from "react";
import cookieCutter from "cookie-cutter"
import { resolve } from "styled-jsx/css";
import Image from "next/image";
function AddArticles() {

    const{newArticle, setNewArticle}= React.useContext(UserContext)
    const [isLoading,setIsLoading] = React.useState(false)

    const [image1,setImage] = React.useState()
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

        function handleChange(e){
            const {id, value} = e.target
            setNewArticle( current => ({
                ...current,
                [id]: value
            }))
            console.log(newArticle)

        }
        function uploadImage(e){
           console.log(e.target.files)
                setImage(e.target.files[0])
                console.log(image1)

        }

       

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
            return alert("article created")

           }
        let response = await axios.put(result.data.url, image1, {
            headers: {
              'Content-Type': type// adjust if other types are needed
            }
          })
          setNewArticle(current=> ({
        ...current,
        title:"",
        category:"",
        articleText:""
          }))
          setIsLoading(false)
          
 
           

        }
        



    return ( 
        <div className="px-4 py-4 sm:p-8 mx-auto gap-4 rounded-2xl -z-10 drop-shadow-lg w-full sm:w-8/12 bg-slate-300 flex flex-col">
            <h2 className="-mb-4">Title:</h2>
            <Input data={title} handleChange={handleChange}/>
            <h2 className="-mb-4">Select Category:</h2>
            <select  id="category" value={newArticle.category} onChange={handleChange}>
                <option value="Other" >Other</option>
                <option value="Programming">Programming</option>
                <option value="Gaming">Gaming</option>
                <option value="News">News</option>
                <option value="Personal">Personal</option>
                
            </select>
            <h2 className="-mb-4">Choose Image - pdf/jpeg/jpg</h2>
            <Input data={image} handleChange={uploadImage}/>
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
            }))} className="bg-gray-200 rounded-full p-4"> add paragraph</button>
            {newArticle.article.map(current => <p key={current}>{current.replace("*8^","")}</p>)}
            
            <button onClick={submitForm} className="bg-gray-200 rounded-full p-4" disabled={isLoading}>
                
                {!isLoading ?
                 "Add Article" : 
                 <Image width={20} height={20} class=" ml-3 inline-block animate-spin  h-8 w-8" alt="loading" src="/loading-20.svg"/>}
                 
            </button>
            
            

        </div>
     );
}

export default AddArticles;
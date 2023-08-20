import Input from "@/app/Components/Input/input";
import { UserContext } from "@/app/user/context/userContext";
import axios from "axios";
import React from "react";
function AddArticles() {

    const{newArticle, setNewArticle}= React.useContext(UserContext)

    const [image1,setImage] = React.useState()
    let title={
            placeholder: "Enter Article title", 
            name:"title",
            type:"textbox",
            id:"title",
            value:newArticle.title

    }
    let image={
        placeholder: "Add Poster Image", 
        name:"image",
        type:"file",
        id:"posterImage",
        value:newArticle.posterImage || ""}

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


        function sendImage() {

            const formData = new FormData();
            formData.append("upload",image1)
            formData.append("title",newArticle.title)
            axios.post("http://localhost:5000/upload", formData,{
                withCredentials: true
            }).then(res =>{
                console.log(res)
            })

        }
        



    return ( 
        <div className="px-4 py-4 sm:p-8 mx-auto gap-4 rounded-2xl drop-shadow-lg w-full sm:w-8/12 bg-slate-300 flex flex-col">
            <Input data={title} handleChange={handleChange}/>
            <Input data={image} handleChange={uploadImage}/>
            <textarea 
            onChange={(e)=>setNewArticle(current => ({
                ...current,
                paragraph: e.target.value}))} 
            className=" h-28" 
            autoComplete="on" 
            cols={8}/>
            <button onClick={(e)=>setNewArticle(current => ({
                ...current,
                article: current.article.push(currentParagraph)
            }))} className="bg-gray-200 rounded-full p-4"> add paragraph</button>
            {newArticle.article.map(current => <p key={current}>{current}</p>)}
            
            <button onClick={sendImage} className="bg-gray-200 rounded-full p-4"> send Image</button>
            
            

        </div>
     );
}

export default AddArticles;
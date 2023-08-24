import Input from "@/app/Components/Input/input";
import { UserContext } from "@/app/user/context/userContext";
import axios from "axios";
import React from "react";
import cookieCutter from "cookie-cutter"
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

        console.log(image1)

        async function sendImage() {

            const formData = new FormData();
            formData.append("posterImage",image1)
            formData.append("title",newArticle.title)
            formData.append("articleText",newArticle.article)
            formData.append("category",newArticle.category)
           await  axios.post("https://article-api-cookies-instead-of.onrender.com/article/add", formData,{
            headers:{
                Authorization : `Bearer ${cookieCutter.get("token")}`
               }
           }).then(res =>{
                alert("image was saved")
            })

        }
        



    return ( 
        <div className="px-4 py-4 sm:p-8 mx-auto gap-4 rounded-2xl drop-shadow-lg w-full sm:w-8/12 bg-slate-300 flex flex-col">
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
            
            <button onClick={sendImage} className="bg-gray-200 rounded-full p-4"> send Image</button>
            
            

        </div>
     );
}

export default AddArticles;
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
            type:"text",
            id:"username",
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
            axios.post("http://localhost:5000/upload", formData).then(res =>{
                console.log(res)
            })

        }
        



    return ( 
        <div>
            <Input data={title} handleChange={handleChange}/>
            <Input data={image} handleChange={uploadImage}/>
            <button onClick={sendImage}> send Image</button>
            
            

        </div>
     );
}

export default AddArticles;
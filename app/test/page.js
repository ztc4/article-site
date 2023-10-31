"use client"
import axios from "axios";
import Image from "next/image";
import React from "react";

function Test() {
    const [url,setUrl] = React.useState("")
    const [image,setImage] = React.useState(null)

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        
      };


    // function getURl(){
    //     axios.get("http://localhost:3000/dev/awsurl").then(
    //         res=> setUrl(res.data)
    //     )
    //     console.log(url)
    // }
    console.log(image?.type)

    const handleUpload = async () => {
       
        if(image == null){
            return console.log("no image uploaded")
        }

        let type = `${image.type}`
        // Get the presigned URL
        const url =  await axios.post(`http://localhost:3000/dev/awsurl`,{
            'type':type
        })
        .then(res=> res.data); 

        setUrl(url)
        
    
        // // Upload the image to S3
        await axios.put(url, image, {
          headers: {
            'Content-Type': type// adjust if other types are needed
          }
        })
        .then(res => {console.log(res);console.log("successfilly added!")})
        .catch( error => console.log(error))
    
        
      };
    





    return ( 
        <div className="p-12 flex flex-col gap-8">
            <h1 className="text-4xl">Testing aws</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button className="bg-red-500 p-3" onClick={handleUpload}>GEt url</button>
            <p>{url}</p>
            <Image alt="image" src="https://article-website-images.s3.amazonaws.com/1" height={500} width={500}/>
        </div>
     );
}

export default Test;
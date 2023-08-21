import Article from "@/app/Components/Article/article";
import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import React from "react";

function LikedArticles() {
    const{data}= React.useContext(UserContext)
    let articles = data.likedArticles.map(current => <Article key={current._id} data={current}/>)
    return (
        <div>
            {articles.length > 0 && <p className="mt-12 text-center">You have {"1"} liked articles</p>}
        <Container>
            
            {articles}
            {articles.length == 0 && <p className="mt-12">You haven't like any articles</p>} 
                 
        </Container>
        </div> 
     );
}

export default LikedArticles;
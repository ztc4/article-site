import Article from "@/app/Components/Article/article";
import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import React from "react";

function LikedArticles() {
    const{data}= React.useContext(UserContext)
    let articles = data.likedArticles.map(current => <Article key={current._id} data={current}/>)
    return ( 
        <Container>
            {articles}
                 
        </Container>
     );
}

export default LikedArticles;
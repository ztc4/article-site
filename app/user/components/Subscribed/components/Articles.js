import Article from "@/app/Components/Article/article";
import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import React from "react";
function Articles() {
    const{data}= React.useContext(UserContext)
    let articles = data.subscribedArticle.map(current => <Article key={current._id} data={current}/>)
    return (  
        <Container>
            {articles}

        </Container>
     );
}

export default Articles;

import React from "react";
import Container from "@/app/Components/Container/container";
import Article from "@/app/Components/Article/article";
import { UserContext } from "@/app/user/context/userContext";
function CreatedArticles() {
    const{data}= React.useContext(UserContext)
    let articles = data.postedArticle.map(current => <Article key={current._id} data={current}/>)
    return ( 

        <Container>
            {articles}
            
        </Container>
     );
}

export default CreatedArticles;
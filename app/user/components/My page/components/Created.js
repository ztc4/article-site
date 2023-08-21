
import React from "react";
import Container from "@/app/Components/Container/container";
import Article from "@/app/Components/Article/article";
import { UserContext } from "@/app/user/context/userContext";
function CreatedArticles() {
    const{data}= React.useContext(UserContext)
    let articles = data.postedArticle.map(current => <Article key={current._id} data={current}/>)
    return ( 
<div>
        {articles.length > 0 && <p className="mt-12 text-center">You have posted {"1"} articles</p>}
        

        <Container>

            {articles}
            {articles.length == 0 && <p className="mt-12">You haven't posted an article</p>}
            
        </Container>
        </div>
     );
}

export default CreatedArticles;
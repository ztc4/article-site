import Article from "@/app/Components/Article/article";
import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import React from "react";
function Articles() {
    const{data}= React.useContext(UserContext)
    let articles = data.subscribedArticle.map(current => <Article key={current._id} data={current}/>)
    return (  
        <div>
            {articles.length > 0 && <p className="mt-12 text-center">You have {"1"} articles</p>}
            <Container>
                
                {articles}
                {articles.length == 0 && <p className="mt-12">No articles posted by subscribed</p>}

            </Container>
        </div>
     );
}

export default Articles;
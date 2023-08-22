import Article from "@/app/Components/Article/article";
import Button from "@/app/Components/Button/button";
import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import React from "react";
function Articles() {
    let buttondata = {
        text:"Load more Articles",
        size: "submit",
        name: "Load more",
        disabled: false
    }
    const{data,subscribedArticle}= React.useContext(UserContext)
    let articles = data.subscribedArticle.map(current => <Article key={current._id} data={current}/>)
    return (  
        <div>
            {articles.length > 0 && <p className="mt-12 text-center">You have {"1"} articles</p>}
            <Container>
                
                {articles}
                {articles.length == 0 && <p className="mt-12">No articles posted by subscribed</p>}

            </Container>
            {articles.length % 10 == 0   ?
                <div className="p-8">
                    <Button data={buttondata} handleClick={subscribedArticle}/>
                </div>:
                <p className="text-center mt-4">There are no more articles</p>
                
                }
        </div>
     );
}

export default Articles;
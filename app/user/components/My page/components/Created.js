
import React from "react";
import Container from "@/app/Components/Container/container";
import Article from "@/app/Components/Article/article";
import { UserContext } from "@/app/user/context/userContext";
import Button from "@/app/Components/Button/button";
function CreatedArticles() {
    const{data, PostedArticles}= React.useContext(UserContext)
    let articles = data.postedArticle.map(current => <Article key={current._id} data={current}/>)

    let buttondata = {
        text:"Load more Articles",
        size: "submit",
        name: "Load more",
        disabled: false
    }
    return ( 
    <div>
            {articles.length > 0 && <p className="mt-12 text-center">You have posted {"1"} articles</p>}
            

            <Container>

                {articles}
                {articles.length == 0 && <p className="mt-12">You haven't posted an article</p>}
                
            </Container>
            {articles.length % 10 == 0   ?
                <div className="p-8">
                    <Button data={buttondata} handleClick={PostedArticles}/>
                </div>:
                <p className="text-center mt-4">There are no more articles</p>
                
                }
        </div>
     );
}

export default CreatedArticles;
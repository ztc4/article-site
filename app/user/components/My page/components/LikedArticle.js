import Article from "../../../../Components/Article/article";
import Button from "../../../../Components/Button/button";
import Container from "../../../../Components/Container/container";


import { UserContext } from "../../../context/userContext";
import React from "react";

function LikedArticles() {
    let buttondata = {
        text:"Load more Articles",
        size: "submit",
        name: "Load more",
        disabled: false
    }
    const{data,likedArticles}= React.useContext(UserContext)
    let articles = data.likedArticles.map(current => <Article key={current._id} data={current}/>)
    return (
        <div>
            {articles.length > 0 && <p className="mt-12 text-center">You have {"1"} liked articles</p>}
            <Container>
                
                {articles}
                {articles.length == 0 && <p className="mt-12">You haven&apos;t like any articles</p>} 
                    
                </Container>
                {articles.length % 10 == 0   ?
                <div className="p-8">
                    <Button data={buttondata} handleClick={LikedArticles}/>
                </div>:
                <p className="text-center mt-4">There are no more articles</p>
                
                }
        </div> 
     );
}

export default LikedArticles;
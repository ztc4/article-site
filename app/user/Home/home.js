import React from "react";
import { UserContext } from "../context/userContext";
import Container from "@/app/Components/Container/container";
import Button from "@/app/Components/Button/button";
import Article from "@/app/Components/Article/article";
function HomePage() {
    const{data, MainArticles,search}= React.useContext(UserContext)
    let articles = data.mainArticles.map(current => <Article key={current._id} data={current}/>)

    let buttondata = {
        text:"Load more Articles",
        size: "submit",
        name: "Load more",
        disabled: false
    }

    
    return ( 
        <div>
              {search.mainSearchLast && <p className="mt-12 text-center">Popular Articles</p>}
            

            <Container>
    
                {articles}
                {articles.length == 0 && <p className="mt-12">No Articles Found</p>}
                
            </Container>
            {articles.length % 10 == 0   ?
                <div className="p-8">
                    <Button data={buttondata} handleClick={MainArticles}/>
                </div>:
                <p className="text-center mt-4">There are no more articles</p>
                
                }
        </div>
      

     );
}

export default HomePage;
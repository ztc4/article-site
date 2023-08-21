import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import React from "react";
function Subscribers() {
    const{data}= React.useContext(UserContext)
    let articles = data.subscribers.map(current => <User key={current._id} data={current}/>)
    return ( 
        <div>
            {articles.length > 0 && <p className="mt-12 text-center">You have {"1"} subscribers</p>}
            <Container>
                    
                    {articles}
                    {articles.length == 0 && <p className="mt-12">No has subscribed to you</p>}
            </Container>
        </div>
     );
}

export default Subscribers;
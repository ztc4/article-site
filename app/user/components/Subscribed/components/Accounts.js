import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import React from "react";

function Accounts() {
    const{data}= React.useContext(UserContext)
    let articles = data.subscribedUsers.map(current => <User key={current._id} data={current}/>)
    return ( 
        <div>
            {articles.length > 0 && <p className="mt-12 text-center">You are subscribed to {"1"}  accounts</p>}
        <Container>
             
            {articles}
            {articles.length == 0 && <p className="mt-12">You haven't subscribed to anyone</p>}

        </Container>
        </div>
    
        );
}

export default Accounts;
import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import React from "react";

function Accounts() {
    const{data}= React.useContext(UserContext)
    let articles = data.subscribedUsers.map(current => <User key={current._id} data={current}/>)
    return ( 
        <Container>
            {articles}

        </Container>
    
        );
}

export default Accounts;
import Button from "../../../../Components/Button/button";
import Container from "../../../../Components/Container/container";
import User from "../../../../Components/User/user";
import { UserContext } from "../../../context/userContext";

import React from "react";

function Accounts() {
    let buttondata = {
        text:"Load more users",
        size: "submit",
        name: "Load more",
        disabled: false
    }
    const{data, GetSubscribedUsers}= React.useContext(UserContext)
    let users = data.subscribedUsers.map(current => <User key={current._id} data={current}/>)
    return ( 
        <div>
            {users.length > 0 && <p className="mt-12 text-center">You are subscribed to {"1"}  accounts</p>}
        <Container>
             
            {users}
            {users.length == 0 && <p className="mt-12">You haven&apos;t subscribed to anyone</p>}

        </Container>
        {users.length % 10 == 0   ?
                <div className="p-8">
                    <Button data={buttondata} handleClick={GetSubscribedUsers}/>
                </div>:
                <p className="text-center mt-4">There are no more users</p>
                
                }
        </div>
    
        );
}

export default Accounts;
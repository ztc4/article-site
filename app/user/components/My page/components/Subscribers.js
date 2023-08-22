import Button from "@/app/Components/Button/button";
import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";
import { UserContext } from "@/app/user/context/userContext";
import { GetSubscribers } from "@/app/user/fetch/UserSubscribe";
import React from "react";
function Subscribers() {
    let buttondata = {
        text:"Load more articles",
        size: "submit",
        name: "Load more",
        disabled: false
    }
    const{data, GetSubscribers}= React.useContext(UserContext)
    let subscribers = data.subscribers.map(current => <User key={current._id} data={current}/>)
    return ( 
        <div>
            {subscribers.length > 0 && <p className="mt-12 text-center">You have {"1"} subscribers</p>}
            <Container>
                    
                    {subscribers}
                    {subscribers.length == 0 && <p className="mt-12">No has subscribed to you</p>}
            </Container>
            {subscribers.length % 10 == 0   ?
                <div className="p-8">
                    <Button data={buttondata} handleClick={GetSubscribers}/>
                </div>:
                <p className="text-center mt-4">There are no more subscribers</p>
                
                }
        </div>
     );
}

export default Subscribers;
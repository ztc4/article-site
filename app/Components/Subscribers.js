import Button from "./Button/button";
import Container from "./Container/container";
import User from "./User/user";
import { UserContext } from "../context/userContext";

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
            {/* {subscribers.length > 0 && <p className="mt-12 text-center">You have {"1"} subscribers</p>} */}
            <Container>
                    
                    {subscribers}
                    {subscribers.length == 0 && <p className="mt-12">No one has subscribed to you</p>}
            </Container>
            { subscribers.length !== 0 &&subscribers.length % 10 == 0   ?
                <div className="p-8">
                    <Button data={buttondata} handleClick={GetSubscribers}/>
                </div>:
                <p className="text-center mt-4">{ subscribers.length !== 0 && "There are no more subscribers"}</p>
                
                }
        </div>
     );
}

export default Subscribers;
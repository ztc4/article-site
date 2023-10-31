
import React from "react";
import Accounts from "../../Components/Accounts";
import Articles from "../../Components/Articles";
import NText from "../../Components/Text/n-text";
import { UserContext } from "../../context/userContext";


function Subscribed() {
    const{subscribedPage ,setSubscribedPage}= React.useContext(UserContext)

   

    function changePage(x){
        setSubscribedPage(x)
    }
    return ( 

        <div>
            <div className="flex flex-row justify-center -mt-4 ">
                <NText data={{active:subscribedPage == 1 ? true : false, arrow:false ,text:"Accounts", }} handleClick={()=>changePage(1)}/>
                <NText data={{active:subscribedPage == 2 ? true : false, arrow:false ,text:"Articles"}} handleClick={()=>changePage(2)}/>
            </div>
            
            {subscribedPage == 1 ? <Accounts/> : <Articles/>}

        </div>

     );
}

export default Subscribed;
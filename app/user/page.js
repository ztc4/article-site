"use client"

import React from "react";
import Subscribed from "./components/Subscribed/Subscribed";

import HomePage from "./components/Home/home";
import MyPage from "./components/My page/myPage";
import { UserContext } from "./context/userContext";

function Social() {

    const{page}= React.useContext(UserContext)
    

    return ( 
        <div>
            {page == 1 && <HomePage/>}
            {page == 2 && <Subscribed/>}
            {page == 3 && <MyPage/>}

        </div>
     );
}

export default Social;

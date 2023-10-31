import NText from "../../Components/Text/n-text";
import React from "react";
import CreatedArticles from "../../Components/Created";
import AddArticles from "../../Components/AddArticle";

import Subscribers from "../../Components/Subscribers";
import LikedArticles from "../../Components/LikedArticle";
import { UserContext } from "../../context/userContext";
function MyPage() {

    
    const{myPage,setMyPage}= React.useContext(UserContext)

    function changePage(x){
        setMyPage(x)
    }
    return ( 
        <div>
            <div className="flex flex-row justify-center -mt-4 ">
                <NText data={{active:myPage == 1 ? true : false, arrow:false ,text:"Posted Articles", }} handleClick={()=>changePage(1)}/>
                
                <NText data={{active:myPage == 2 ? true : false, arrow:false ,text:"Subscribers"}} handleClick={()=>changePage(2)}/>
                <NText data={{active:myPage == 3 ? true : false, arrow:false ,text:"Liked"}} handleClick={()=>changePage(3)}/>
            </div>
            
            {myPage == 1 && <CreatedArticles/>}
            
            {myPage == 2 && <Subscribers/>}
            {myPage == 3 && <LikedArticles/>}

    </div>
     );
}

export default MyPage;
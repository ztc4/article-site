import NText from "../../../Components/Text/n-text";
import React from "react";
import CreatedArticles from "./components/Created";
import AddArticles from "./components/AddArticle";
import Subscribed from "../Subscribed/Subscribed";
import Subscribers from "./components/Subscribers";
import LikedArticles from "./components/LikedArticle";
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
                <NText data={{active:myPage == 2 ? true : false, arrow:false ,text:"Add Articles"}} handleClick={()=>changePage(2)}/>
                <NText data={{active:myPage == 3 ? true : false, arrow:false ,text:"Subscribers"}} handleClick={()=>changePage(3)}/>
                <NText data={{active:myPage == 4 ? true : false, arrow:false ,text:"Liked"}} handleClick={()=>changePage(4)}/>
            </div>
            
            {myPage == 1 && <CreatedArticles/>}
            {myPage == 2 && <AddArticles/>}
            {myPage == 3 && <Subscribers/>}
            {myPage == 4 && <LikedArticles/>}

    </div>
     );
}

export default MyPage;
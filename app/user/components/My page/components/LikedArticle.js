import Container from "@/app/Components/Container/container";
import User from "@/app/Components/User/user";

function LikedArticles() {
    return ( 
        <Container>
                  <User data={{
            username: "ztc4",
            avatar: "",
            subscribers: 0,
            lastPost:"",
            articles: 0,
            category:"gaming"
        }} />
        </Container>
     );
}

export default LikedArticles;
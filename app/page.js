import Image from 'next/image'
import Article from './Components/Article/article'
import Comment from './Components/Comment/comment'
import Search from './Components/Search/search'
import User from './Components/User/user'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Article data={{
            title: "Hello",
            author: "Zachary Coats",
            posterImage:"",
            timePosted:"",
            category: "",
            article: [
                {type:"paragraph",
                paragraph: "The first paragraph in the sentence"},
                {type:"image",
                paragraph: "The first paragraph in the sentence"},
                {type:"paragraph",
                paragraph: "the second paragraph"},

            ]
        }}
        />
      <Comment data={{
            avatar: "",
            poster: "ztc4",
            comment:" You should really test the component correctly",
            likes: 10
        }}
        handleClick={{}}/>
      <Search data={{placeholder: "search for"}}/>
      <User data={{
            username: "ztc4",
            avatar: "",
            subscribers: 0,
            lastPost:"",
            articles: 0,
            category:"gaming"
        }} />
     
    </main>
  )
}

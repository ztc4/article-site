import Image from 'next/image'
import Article from './Components/Article/article'
import Comment from './Components/Comment/comment'
import Search from './Components/Search/search'
import User from './Components/User/user'
import Link from 'next/link'


export default function Home() {
  return (
    <main className=" grid grid-cols-1 p-4 gap-12 md:px-56 w-screen overflow-x-hidden">
       <div className='flex flex-row p-3 px-8 justify-between items-center '>
          <h1 className='font-extrabold text-lg sm:text-2xl w-14 '>ARTICLECRAFT</h1>
          <div className='flex sm:gap-2 flex-col sm:flex-row '>
            <Link href="/login" passHref>
              <button className='font-bold hover:bg-gray-200 sm:p-2 sm:text-xl'>Login</button>
            </Link>
            <Link href="/signup" passHref>
              <button className='font-bold hover:bg-gray-200 sm:p-2 sm:text-xl'>Signup</button>
            </Link>
          </div>
       </div>
       <div className=' flex flex-col justify-center items-center sm:gap-3 '>
         <h2 className='font-semibold text-2xl xl:text-3xl text-center'>Craft,Share,Connect</h2>
         <p className='text-center sm:w-3/5 tracking-wide sm:text-lg font-medium'>Are you ready to bring your thoughts to life? Welcome to ArticleCraft,
           the ultimate platform for unleashing your creativity through beautifully
          crafted articles. Whether you're a seasoned writer or just starting your
          journey, our user-friendly interface empowers you to create captivating
          articles that inspire, inform, and entertain.
          </p>
              
       </div>
       <div id="landing-iamge" className='w-full h-[400px] '>
          <Image 
          height={2400}
          width={1600}
          className='object-center  sm:object-contain sm:w-full h-full '
          alt="Landing Page image"
          src={"/landing-page-image.png"}/>
       </div>
       <div className=' flex flex-col gap-1 justify-center items-center sm:gap-3 '>
         <h2 className='font-semibold text-2xl xl:text-3xl text-center'>Join ArticleCraft Today!</h2>
         <p className='text-center sm:w-3/5 tracking-wide text-lg font-medium'>
         Embark on a journey of self-expression and connection.
          Whether you're an aspiring author, an experienced wordsmith,
           or simply someone who loves to read and engage with meaningful content, ArticleCraft welcomes you.
           Sign up now to start creating, sharing, and connecting like never before.
          </p>
          <p className='text-center sm:w-3/5 text-lg  font-medium'>
          Ready to ignite your creativity? Start crafting your stories with ArticleCraft today.
          </p>
          <div className='mt-8 flex flex-col'>
          <Link href="/signup" passHref>
            <button 
            className='font-bold outline hover:bg-gray-200 h-12 w-full sm:p-2 sm:text-xl'>
              GET STARTED
            </button>
            </Link>
            <Link href="/login" passHref>
              <p className='mt-3 text-lg hover:text-purple-700 hover:scale-105 font-medium'>
                Already Have an Account? Login
              </p>
            </Link>

          </div>
              
       </div>
       <div className=' mt-8 flex flex-col gap-1 justify-center items-center sm:gap-3 '>
         <h2 className='font-medium text-xl xl:text-2xl '>Features That Empower You</h2>
         <ul className='p-4 gap-4'>
            <li className='text-center mb-8 text-lg font-normal'>
            <span className='font-medium'>🖋️Craft Your Stories: </span>
                 Dive into the art of storytelling with our intuitive article creation tools.
                Seamlessly combine captivating poster images with engaging paragraphs to create articles that leave a lasting impact.
            </li>
            <li className='text-center mb-8 text-lg font-normal'>
            <span className='font-medium'>🔒Secure and Seamless: </span>
             Rest assured that your creative works are protected in a secure environment.
             Our seamless interface ensures that your focus remains on crafting exceptional articles.
            </li>
            <li className='text-center mb-8 text-lg font-normal'>
            <span className='font-medium'>.📈 Track Your Impact: </span>
             Gain insights into the performance of your articles.
              Measure likes, engagement, and subscriptions to refine your content strategy and understand what resonates with your audience.
            </li>
         </ul>




         


              
       </div>
   
   
    </main>
  )
}

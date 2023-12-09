"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"
import HomeFeatures from './Components/home-features'
import ArticleServer from './Components/Article/article-server'



export default function Home() {


  let [article,setArticle] = React.useState([])

  React.useEffect(()=>{
    // getArticles()
    

  },[])

  async function getArticles(){
    let data =  await fetch(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/articles?search=&0`)
    .then(res => res.json())
    setArticle(data)
    console.log(article)
    return data
  
  }





  return (
    <main className=" grid grid-cols-1 p-4 gap-12 md:px-56 w-screen overflow-x-hidden">

      {/*HEADER */}


       <div className='flex flex-row p-3 sm:px-8 justify-between items-center '>
          <h1 className='font-extrabold text-lg sm:text-2xl w-14 '>ARTICLECRAFT</h1>
          <div className='flex gap-2  flex-row '>
            <Link href="/login" passHref>
              <button className='font-bold hover:bg-blue outline min-[300px]:outline-none  p-1 rounded-md sm:rounded-none  sm:p-2 sm:text-xl'>Login</button>
            </Link>
           <Link href="/signup" passHref>
              <button className='font-bold hidden min-[500px]:block p-1 hover:bg-[#2564eb94] bg-opacity-50 sm:p-2 sm:text-xl'>Signup</button>
            </Link>
          </div>
       </div>

       {/*Landing Introduction*/}
       <motion.div
            
            initial={{x:30,opacity:0.5}}
            animate={{x:0,opacity: 1}}
            duration={{duration:0.7,delay: 0}} 
            
       className=' flex flex-col justify-center items-center sm:gap-3 '>
         <h2 className='  text-2xl xl:text-3xl text-center font-sloth'>Craft,Share,Connect</h2>
         <p className='text-center sm:w-4/5 tracking-wide sm:text-lg  font-haskoy'>
         Create and Share Your Own Articles throught the web
          </p>
          <motion.div
            
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            duration={{duration:3,delay: 0}} 
            
       id="landing-iamge" className='w-full h-[400px] '>
          <Image 
          height={2400}
          width={2400}
          className='object-center  sm:object-contain md:p-12 sm:w-full h-full '
          alt="Landing Page image"
          src={"/blogs.svg"}
          loading='eager'
          priority
          />
       </motion.div>
         <p className='text-center sm:w-4/5 tracking-wide sm:text-lg p-1  font-haskoy'>Are you ready to bring your thoughts to life? Welcome to ArticleCraft,
           the ultimate platform for unleashing your creativity through beautifully
          crafted articles. Whether you&apos;re a seasoned writer or just starting your
          journey, our user-friendly interface empowers you to create captivating
          articles that inspire, inform, and entertain.
          </p>
          <Link href="/signup"  className='w-full flex justify-center 'passHref>
            <button 
            className='font-bold 
         
            text-neutral-100 rounded-3xl 
            w-52
            min-w-52 
            mt-4 hover:shadow-sm duration-500 hover:opacity-100 
            border-blue border-opacity-90 border-1 hover:scale-105 
            bg-blue opacity-70 h-12  px-4 sm:text-xl'>
              GET STARTED
            </button>
            </Link>
              
       </motion.div>


      {/*POPULAR ARTICLES */}
        <div className='min-h-screen relative md:p-8 left-0 background-popular bg-no-repeat bg-cover bg-opacity-20'>
        <h2 className='  text-2xl xl:text-3xl z-10 font-sloth text-left'>Popular Articles</h2>
          <div className='my-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 '>
            {article.map((data,id) => <ArticleServer key={data._id} data={data} />)}




           


            
          </div>

        </div>



       <motion.div 
            
            initial={{opacity:0.7}}
            whileInView={{x:10,opacity: 1}}
            duration={{duration:1,delay: 0}} 
            
       className=' flex flex-col gap-1 justify-center items-center sm:gap-3 '>
        <div className='flex w-full flex-row items-center justify-center gap-4 md:gap-14 lg:gap-20 p-4'>
          <Image alt="image symbolizing joining" 
          width={100} height={100}
          className="h-32 w-32 md:h-56 md:w-56 lg:w-64 lg:h-64 " src="/Group.svg"/>
          <div
          className='font-semibold text-xl md:gap-2 sm:text-3xl flex flex-col  leading-loose text-center mb-2'>
            <h2 >JOIN </h2>
            <h2>ARTICLECRAFT </h2>
            <h2 >TODAY!</h2>
           
          </div>

        </div>
         
         <p className=' md:w-4/5 tracking-wide text-base font-base'>
         Embark on a journey of self-expression and connection.
          Whether you&apos;re an aspiring author, an experienced wordsmith,
           or simply someone who loves to read and engage with meaningful content, ArticleCraft welcomes you.
           Sign up now to start creating, sharing, and connecting like never before.
          </p>
          <p className=' md:w-4/5 tracking-wide text-base  text-[#2563EB] font-base'>
          Ready to ignite your creativity? Start Crafting Your Stories With ArticleCraft Today.
          </p>
          <div className='mt-0 flex flex-col'>
          <Link href="/signup" className='flex justify-center' passHref>
            <button 
            className='font-bold text-neutral-100 rounded-3xl mt-4 hover:shadow-sm duration-500 hover:opacity-100 border-blue border-opacity-90 border-1 hover:scale-105 bg-blue opacity-50 h-12 min-w-40 px-4 sm:text-xl'>
              GET STARTED
            </button>
            </Link>
            <Link href="/login" passHref>
              <p className='mt-3 text-lg hover:text-purple-700 duration-500 hover:scale-105 font-medium'>
                Already Have an Account? Login
              </p>
            </Link>

          </div>
              
       </motion.div>
       <div className='h-1 w-full bg-[#000000]'></div>
       <motion.div
       
     
       initial={{x:-300,opacity:0.7}}
       whileInView={{x:10,opacity: 1}}
       duration={{duration:1,delay: 0}} 
       
       className=' mt-8 flex flex-col gap-1 justify-center items-center sm:gap-3 '>
         <h2 className='font-semibold text-xl xl:text-3xl '>Features That Empower You</h2>
         <div className='p-4 w-full grid grid-cols-1  md:grid-cols-2 gap-4'>
          <HomeFeatures 
          title="Craft Your Stories" 
          description=
          {`
          Dive into the art of storytelling with 
          our intuitive article creation tools.
          Seamlessly combine captivating poster 
          images with engaging paragraphs to 
          create articles that leave a lasting impact.
          `}
          />
            <HomeFeatures 
          title="Secure and Seamless" 
          description=
          {`
          Rest assured that your creative works are protected
          in a secure environment.
          Our seamless interface ensures that your focus remains
          on crafting exceptional articles.`}
          />
          <HomeFeatures 
          title="Track Your Impact" 
          description=
          {`
          Gain insights into the performance of your articles.
          Measure likes, engagement, and subscriptions to refine your 
          content strategy and understand what resonates with your audience.
          `}
          />

           

         </div>


       </motion.div>
       <div className='h-1 w-full bg-[#000000] opacity-50'></div>
       <h2 className='font-semibold text-2xl xl:text-3xl text-center'>START READING NOW!</h2>
       <div className='w-3/5 mx-auto grid gap-4  grid-cols-2'>
          <Link href="/login" passHref>
                  <button 
                    className='font-semibold text-neutral-800 hover:scale-105 duration-500 hover:bg-neutral-200 rounded-sm hover:shadow-sm outline h-12 w-full sm:p-2 sm:text-xl'>
                      LOGIN
                    </button>
          </Link>
          <Link href="/signup" passHref>
            <button 
            className='font-bold text-neutral-100 rounded-sm hover:scale-105 duration-500 hover:shadow-sm bg-blue h-12 w-full sm:p-2 sm:text-xl'>
              SIGNUP
            </button>
          </Link>


        

       </div>
   
   
    </main>
  )
}

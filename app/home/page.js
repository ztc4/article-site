"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import LandingPageArticle from "../Components/Landing-Page-Article"
import HomeFeatures from "../Components/home-features"
import {motion} from "framer-motion"

function LandingPage() {

    
    let data = {title:"hello the first novel",author:"ztc4",category:"Programming",_id:"erere"}
        // Write your code here
        

        
    return ( 
        <body className='font-haskoy-semibold overflow-x-hidden  text-black'>
         
            <section 
            id="FIRST-PAGE"
            className='w-screen min-h-screen flex flex-col gap-8 overflow-x-hidden px-4 p-4 md:py-6 md:px-40  '>
                <header>
                    <h1 className='font-sloth-extrabold text-lg sm:text-2xl text-[#000] w-14 '>ARTICLECRAFT</h1>
                </header>

                {/* bg-image */}
                <Image src="/article-background-1.svg" width={300} height={300} alt="bg-images" className='-z-10 h-96 w-96 overflow-x-hidden md:h-[600px] md:w-[600px]  absolute top-10 -right-0'/>

                <div className='mt-8 flex flex-col gap-8  md:w-3/6  '>
                    
                        < motion.h1 className='font-sloth-semibold text-hl leading-none   md:text-hl'>
                            CRAFT <br/> SHARE <br/> CONNECT
                        </motion.h1>
                        
                        <Link href="/signup" className='mt-4 font-haskoy-extrabold text-pl inline hover:text-dark-purple' passHref>
                            <p className='inline-block'>Get Started Now</p> 
                            <Image src="/arrow_right_alt.svg" width={20} height={10} alt="arrow" className=' text-blue inline-block w-6 '/> 
                        </Link>
                        <p className=''>   
                            Are you prepared to give life to your thoughts? Introducing ArticleCraft – 
                            the ultimate platform designed for unleashing your creativity through beautifully crafted articles.
                            Regardless of whether you are an experienced writer or just embarking on your writing journey, our user-friendly interface is tailored to empower you. It enables the creation of captivating articles that not only inspire and inform but also entertain.
                            Welcome to a world where your ideas take shape in the most engaging way.
                        </p>
                        <div className='h-12 w-fit font-haskoy-extrabold text-lg flex flex-row gap-4 '>
                            <Link href="/signup" passHref>
                                <button className='bg-pink hover:scale-105 py-2 duration-200 rounded-md  px-8'>SIGNUP</button>
                            </Link>
                            <Link href="/login" passHref>
                                <button className='bg-blue py-2 hover:scale-105 duration-200 rounded-md text-pink  px-4'>LOGIN</button>
                            </Link>
                        </div>       
                </div>

            </section>

            <section 
            id="POPULAR-ARTICLES"
            className='w-screen flex flex-col gap-8   h-screen px-4 py-4 md:py-6 md:px-40' >
            
                    <h1 className='font-sloth-semibold text-hl leading-none h-1/6   md:text-hl'>
                            Popular  <br/> Articles
                    </h1>
                    <Image src="/article-background-2.svg" width={300} height={300} alt="bg-images" className='-z-10 h-96 w-96 overflow-x-hidden md:h-[600px] md:w-[600px]  absolute top-screen left-0'/>
               
                <div className='w-full h-4/5 rounded-2xl mt-8  flex flex-col p-4 md:p-8 border-4 justify-center bg-dark-purple'>
                    <Image src="/Fire.svg" width={50} height={50} alt="arrow" className=' shadow-lg text-blue inline-block py-2 w-full h-1/6 mx-auto  '/>
                    <div className='grid md: grid-cols-1 overflow-y-auto overflow-x-hidden gap-2 md:grid-cols-2 h-5/6'>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>
                        <LandingPageArticle data={data}/>

                        

                    </div>


                </div>

            </section>

            <section
            id="FEATURES"
            className='w-screen min-h-screen px-4 py-4 md:py-6 md:px-40 text-white bg-dark-purple'>
                    <h1 className='font-sloth-semibold  md:text-center leading-none  mt-4 md:mt-12  text-hl'>
                            Features That Empower You
                    </h1>
                    <div className=' grid md:mt-8 grid-cols-1 hover:text-white text-black gap-2'>
                        <HomeFeatures 
                        title="Craft Your Stories" 
                        description="Dive into the art of storytelling with our intuitive article creation tools.Seamlessly combine captivating poster images with engaging paragraphs to create articles that leave a lasting impact."
                        />
                        <HomeFeatures 
                        title="Secure and Seamless" 
                        description="Rest assured that your creative works are protectedin a secure environment.Our seamless interface ensures that your focus remainson crafting exceptional articles."
                        />
                        <HomeFeatures 
                        title="Track Your Impact" 
                        description="Gain insights into the performance of your articles.Measure likes, engagement, and subscriptions to refine your content strategy and understand what resonates with your audience."
                        />
                    </div>
            </section>

            <section className='w-screen min-h-screen h-screen px-4 py-8 md:py-20 md:px-40 flex flex-col md:flex-row gap-4 md:gap-12' id="CONNECT-API">
                <div className='bg-pink h-3/6 md:h-full w-full p-2 flex relative items-center justify-center  md:w-3/6 rounded-3xl '>
                    <button className='bg-white/50 hover:border-4 duration-200 hover:bg-white/70 rounded-full absolute left-2 p-2 h-16 w-16'>
                        <Image src="/arrow_right_alt.svg" width={20} height={10} alt="arrow" className=' text-blue inline-block w-full rotate-180 '/>
                    </button>
                    <button className='bg-white/50 hover:border-4 duration-200 hover:bg-white/70 rounded-full absolute right-2 p-2 h-16 w-16'>
                        <Image src="/arrow_right_alt.svg" width={20} height={10} alt="arrow" className='  inline-block w-full '/>
                    </button>

                </div>
                <div className='w-full md:w-3/6 flex flex-col gap-4 hover:cursor-default'>
                    <h2 className='font-sloth-semibold uppercase   leading-none  mt-4 md:mt-12  text-hs'>Connect</h2>
                    <p className='md:text-lg'>{`Are you seeking to integrate your application with a blog or personal website? Look no further - we've got you covered! Connect to our API to seamlessly access all the articles and images you've posted, absolutely free of charge. Click below to discover more!`}</p>
                    <h5 className='font-haskoy-semibold text-pl md:text-hs text-blue md:mt-8'>What You Need to Know - </h5>
                    <ul class="list-disc text-lg md:text-pl pl-5">
                        <li>Basic Knowledge of JavaScript</li>
                        <li>Crafting Fetch Requests</li>
                        <li>Familiarity with Image Handling</li>
                    </ul>

                    <Link href="/api" className='mt-4 font-haskoy-extrabold text-pl w-fit  hover:text-dark-purple' passHref>
                        <p className='inline-block'>Learn More  </p> 
                        <Image src="/arrow_right_alt.svg" width={20} height={10} alt="arrow" className=' text ml-2 inline-block w-6 '/> 
                    </Link>
                </div>
            </section>

            <section className='w-screen min-h-screen px-4 py-8 md:py-5 md:px-40 bg-purple text-white' id="CREATOR">
                <h2 className='font-sloth-semibold uppercase   leading-none h-1/5  my-4 md:mt-12 text-center  text-hl border-b-4'>CREATOR</h2>
                

                <div className='flex flex-row flex-wrap md:flex-nowrap  gap-12 w-full mt-12  '>
                    <div className=' justify-center items-center border-purple-accent border-4  p-2 px-6 flex flex-col '>
                        <Image 
                        className=' brightness-75  hover:brightness-100 self-center object-cover border-4 rounded-full h-44 w-44' 
                        height={1600} 
                        width={2400} src="/picture-1.webp" alt='An image of the creator of site, Zachary Coats'/>
                        <h2 className='font-sloth-semibold uppercase text-[2rem]'>Contact</h2>
                        <p>If interested in hiring or seeking freelance work - contact me using the information below -</p>
                        <ul class=" text-small">
                            <li>Email - Zachary4Coats@gmail.com</li>
                            <li>Location - Atlanta, Georgia</li>
                            <li> LinkedIn - <Link href="https://www.linkedin.com/in/zachary-coats-651211270/"> https://www.linkedin.com/in/zachary-coats-651211270/</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-sloth-semibold uppercase text-hs  md:text-[4rem]'>Zachary Coats</h2>
                        <p>Article Craft was created as a portfolio project for my resume to showof my technical skills. Everything from the design to the schema was done alone. This project was started with the goal of learning how to 
                        learn to implement unit testing, but it soon grew to something a little bit more! Working on this project I have learnt many things mainly on the deployment/devops side of things; and faced many challenges.</p>
                        <h2 className='font-sloth-semibold uppercase text-hs md:text-[4rem]'>Challenges</h2>
                        <ul className="list-disc pl-5">
                            <li>Test-driven development was challenging, leading to rewriting tests for better data synchronization with the database schema.</li>
                            <li>Inadequate planning regarding data integration with the frontend.</li>
                            <li>Encountered many issues with image sizing.</li>
                            <li>Later achieved better formatting for images.</li>
                            <li>Faced challenges with backend deployment, particularly with AWS Lambda server.</li>
                            <li>Struggled with sending images to the frontend without data corruption, a problem that is still unresolved.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <motion.section id="JOIN-TODAY" 
            className='w-screen h-screen px-4 flex flex-wrap   py-8 md:py-14 md:px-40  '
            initial={{opacity:0.7}}
            whileInView={{opacity: 1, paddingLeft:10}}
            duration={{duration:1,delay: 0}} 
            >
            
                
                <Image alt="image symbolizing joining" 
                 width={100} height={100}
                 className="md:h-2/5 w-4/5 order-2 md:order-1 mx-auto  md:w-1/2" src="/Group.svg"/>      
                <h2 className='font-sloth-semibold text-hs order-1 md:order-2 leading-none   md:text-hl'>JOIN <br/> ARTICLECRAFT <br/> TODAY!</h2>
                
         
                <p className='  md:text-pl font-haskoy-medium order-3  '>
                Embark on a journey of self-expression and connection. Whether you&apos;re an aspiring author, an experienced wordsmith, or simply someone who loves to read and engage with meaningful content, ArticleCraft welcomes you.
                Sign up now to start creating, sharing, and connecting like never before.
                </p>
                <div className='order-4'>
                    <p className='my-6  '>
                    Ready to ignite your creativity? Start Crafting Your Stories With ArticleCraft Today.
                    </p>
                
                    <Link href="/signup" passHref>
                        <button 
                        className=' bg-purple py-2 px-4 rounded-3xl text-white'>
                            GET STARTED
                        </button>
                    </Link>
                    <Link className='' href="/login" passHref>
                        <p className=''>
                         Already Have an Account? Login
                        </p>
                    </Link>

                </div>


          
              


            </motion.section>

            <section id="FOOTER">

            </section>
        </body>
     );
}

export default LandingPage;
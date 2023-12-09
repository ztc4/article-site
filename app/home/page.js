import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import LandingPageArticle from "../Components/Landing-Page-Article"
import HomeFeatures from "../Components/home-features"

function LandingPage() {

    
    let data = {title:"hello the first novel",author:"ztc4",category:"Programming",id:"erere"}
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
                    
                        <h1 className='font-sloth-semibold text-hl leading-none   md:text-hl'>
                            CRAFT <br/> SHARE <br/> CONNECT
                        </h1>
                        
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
                   

            </section>

            <section className='w-screen h-screen' id="CONNECT-API">

            </section>

            <section className='w-screen h-screen' id="CREATOR">

            </section>

            <section className='w-screen h-screen' id="JOIN-TODAY">

            </section>

            <section id="FOOTER">

            </section>
        </body>
     );
}

export default LandingPage;
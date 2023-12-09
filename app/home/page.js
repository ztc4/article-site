import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function LandingPage() {

    
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
            className='w-screen h-screen overflow-hiddenpx-4 p-4 md:py-6 md:px-40' >
                <header>
                    <h1 className='font-sloth-semibold text-hl leading-none   md:text-hl'>
                            Popular  <br/> Articles
                    </h1>
                </header>
                <div className='w-full max-h-full min-h-fit h-full rounded-2xl my-8 flex flex-col p-8 justify-center bg-dark-purple'>
                    <Image src="/Fire.svg" width={50} height={50} alt="arrow" className=' shadow-lg text-blue inline-block py-2 w-full h-1/6 mx-auto  '/>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 h-5/6'>

                    </div>


                </div>

            </section>

            <section
            id="FEATURES"
            className='w-screen h-screen'>

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
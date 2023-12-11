"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselButton from './carousel-button';
import Image from 'next/image';
import Link from 'next/link';

const ImageCarousel = ({ images }) => {
    return (
        <div className="relative w-full p-8 ">
            <Carousel 
                infiniteLoop
                autoPlay
                showThumbs={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => 
                    hasPrev && <CarouselButton reverse={true} onClick={clickHandler} />
                }
                renderArrowNext={(clickHandler, hasNext) => 
                    hasNext && <CarouselButton reverse={false} onClick={clickHandler} />
                }
            >
                {images.map((image, index) => (
                    <Link href={image.project ? `/projects/${image.project}` : "#"} key={index} passHref>
                        
                            <Image  className='rounded-xl' height={220} width={220} alt="image" src={image.image} priority={true}/>
                      
                    </Link>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;

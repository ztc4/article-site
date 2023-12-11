import Image from "next/image";

function CarouselButton({reverse, onClick}) {
    return ( 
        <button 
            className={`hidden md:inline-block md:absolute top-1/2 transform  -translate-y-1/2 bg-[#F7EAFF] hover:border-4 cursor-pointer duration-200 hover:bg-white/70 rounded-full ${reverse ? "left-2 rotate-180": "right-2"} p-2 h-16 w-16 z-10`}
            onClick={onClick}
        >
            <Image src="/arrow_right_alt.svg" width={20} height={10} alt="arrow" />
        </button>
     );
}

export default CarouselButton;
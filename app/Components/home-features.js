import Image from "next/image";

function HomeFeatures({title, description}) {
    return ( 


        <div 
        className="bg-purple-accent
         h-32 
        p-5 cursor-default
        rounded-xl hover:bg-purple-blue
        md:hover:translate-x-6
        font-semibold
        duration-500
        flex
        justify justify-between
        group
        drop-shadow-md
        overflow-y-clip
        hover:h-52
        md:hover:h-40
       
        hover:duration-1000
        hover:z-10"
        >
            <div>
                <h5 className="opacity-80 text-pl hover:opacity-90 duration-700">{title}</h5>
                <p className="opacity-80 hover:opacity-90 duration-700">{description}</p>

            </div>
            
            <Image width={40} height={40} alt="arrow that changes when hovered!" className="text-xs h-10 p-1 rounded-full group-hover:duration-1000 group-hover:rotate-90 group-hover:bg-zinc-50  self-center" src="/arrow_right_alt.svg"/>
      </div>
     );
}

export default HomeFeatures;
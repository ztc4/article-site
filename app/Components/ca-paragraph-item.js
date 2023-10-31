function ParagraphItem({paragraph,index,handleClick}) {



    return ( 
        <div className=" bg-neutral-200 group outline-double hover:bg-neutral-400  drop-shadow-md p-2 min-h-16 rounded-2xl flex flex-row">

            <p className=" line-clamp-2 group-hover:overflow-y-visible  duration-100 group-hover:line-clamp-none h-12 group-hover:h-40 w-4/5 hover:cursor-pointer"> {paragraph.replace("*8^","")}</p>
            <div className="flex w-1/5 flex-row justify-end  px-4">
                <button 
                onClick={()=>handleClick(index)}
                className="hover:text-red-700 font-black text-xl">X</button>
                

            </div>

        </div>
     );
}

export default ParagraphItem;
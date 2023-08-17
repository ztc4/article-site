import { ArrowUpward, KeyboardArrowUp } from "@mui/icons-material";

function NText({data, handleClick}) {


    return ( 
        <div className="flex m-2 cursor-pointer hover:drop-shadow hover:scale-105 flex-col" onClick={handleClick}>
            <h4 className={` navigate-text ${data.active && "drop-shadow scale-110 font-semibold"} ${!data.arrow&& data.active && "underline"}`}>
                {data.text}
            </h4>
           {data.active && data.arrow && <KeyboardArrowUp className="self-center"/>}
            
        </div>
     );
}

export default NText;
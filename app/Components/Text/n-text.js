import { ArrowUpward } from "@mui/icons-material";

function nText({data}) {


    return ( 
        <div className="flex flex-col justify-center">
            <h4 className={` navigate-text ${data.active && "drop-shadow"}`}>
                {data.text}
            </h4>
           {data.active && data.arrow && <ArrowUpward/>}
            
        </div>
     );
}

export default nText;
"use client"
import { SearchSharp } from "@mui/icons-material";
import React from "react";

function Search({data}) {


    return ( 
        <div className="search mx-auto sm:w-1/2 justify-between p-1 ">
            <input
             type='text'
             placeholder={data.placeholder}
             className="input"
             value={data.value}
             onChange={(e)=>data.handleChange(e)}
             
             >
            </input>
            <div className="hover:bg-gray-500" onClick={data.handleSearch}>
                <SearchSharp/>
            </div>
            
        </div>
     );
}

export default Search;
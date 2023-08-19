"use client"
import { SearchOffOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";

function Search({data}) {
    return ( 
        <div className="search justify-between p-1 ">
            <input
             type='text'
             placeholder={data.placeholder}
             className="input"
             value={data.value}
             onChange={(e)=>data.handleChange(e)}
             
             >
            </input>
            <div className="hover:bg-gray-500">
                <SearchOffOutlined/>
            </div>
            
        </div>
     );
}

export default Search;
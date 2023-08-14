"use client"

import Search from "../Components/Search/search";
import { UserContext } from "./context/userContext";

function Layout({children}) {

    


    return ( 
        <UserContext.Provider value={{}}>
        <div>
            <div className="flex flex-row h-64">
                <Search />

            </div>



        </div>
        </UserContext.Provider>
     );
}

export default Layout;
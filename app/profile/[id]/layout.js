import BackButton from "@/app/article/[id]/components/backButton";

function Layout({children}) {
    return ( 
        <div>
            <div className=" sm:absolute sm:left-16 hover: cursor-pointer">

                <BackButton/>
            </div>
            
            {children}
        </div>
     );
}


export default Layout;
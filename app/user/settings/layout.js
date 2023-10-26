import BackButton from "../../article/components/backButton"

function Layout({children}) {
    return ( 
        <div>
            <div className="absolute p-4 sm:left-16 hover:cursor-pointer">

                <BackButton/>
            </div>
            
            {children}
        </div>
     );
}


export default Layout;
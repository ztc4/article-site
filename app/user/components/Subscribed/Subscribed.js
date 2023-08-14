import Accounts from "./Accounts";
import Articles from "./Articles";

function Subscribed() {

    const [pageNumber,setPageNumber] = React.useState(1)
    return ( 

        <div>
            
            {pageNumber == 1 ? <Accounts/> : Articles}

        </div>

     );
}

export default Subscribed;
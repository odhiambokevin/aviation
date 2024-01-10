import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    return ( 
        
            <div className="container" style={{paddingTop:'20px'}}>
                <div className="title-box text-center black">
                        <h2 className="title">OOPS!</h2>
                </div>
                    <img src='static/images/notfound.jpg' style={{paddingLeft:'25%',paddingRight:'0', height:'70vh'}} alt='' />
                    <div className="erorpage">
                        <p> Page Response : {`${error.status}: ${error.statusText || error.message}`}</p>
                    </div>
            </div>
            
                
        
     );
}
 
export default NotFound;
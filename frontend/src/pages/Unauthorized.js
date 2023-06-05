const Unauthorized = () => {
    
    return ( 
        
            <div className="container" style={{paddingTop:'20px'}}>
                <div className="title-box text-center black">
                        <h2 className="title">Unauthorized Access!</h2>
                </div>
                    <img src="static/images/notfound.jpg" style={{paddingLeft:'25%',paddingRight:'0', height:'70vh'}} alt='' />
                    <div className="title-box text-center">
                        <h2 className="title">You are not authorized to access this page</h2>
                    </div>
            </div>
            
                
        
     );
}
 
export default Unauthorized;
import {Link} from 'react-router-dom';

function Footer() {
    return ( 
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="copyright"><p>Copyright © 2016 All Rights reserved by: <Link to="http://templatestock.co">Template Stock</Link>
                  </p></div>
                </div>
               
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="social-icons">
                        <ul>
                         <li><Link to="http://facebook.com/yaspikenya"><i className="fa fa-facebook"></i></Link></li>
                         <li><Link to="https://twitter.com/YaspiKenya"><i className="fa fa-twitter"></i></Link></li>
                        </ul>
                     </div>
                </div>
            </div> 
        </div> 
    </footer>
     );
}

export default Footer;
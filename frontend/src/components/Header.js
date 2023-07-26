import { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom'

function Header() {
    
    // const [activeclassName, setactiveclassName] = useState('home');
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/');

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: 'smooth'})
            }
        } else {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
        
    }, [location]);

    return ( 
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="fa fa-bars"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="logo-nav floating-logo">
                            <NavLink reloadDocument to="/" >
                                <img src="static/images/logo.png" alt="Company logo" style={{height: "100px"}} />
                            </NavLink>
                        </div>
                        <div className="clear-toggle"></div>
                        <div id="main-menu" className="collapse scroll navbar-right">
                            <ul className="nav">
                                <li> <NavLink className='' to="/#home">Home</NavLink> </li>
                                <li> <NavLink className='' to="/#works">Portfolio</NavLink></li>
                                <li> <NavLink className='' to="/#services">Our Specialization</NavLink> </li>
                                <li> <NavLink to='/blogs'>blog</NavLink></li>
                                <li> <NavLink className='' to="/#contact">contact</NavLink></li>
                                {/* <li className={splitLocation[1] === '#contact' ? 'active' : ''}> <Link  to="/#contact">contact</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;
import { Link } from 'react-scroll';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    
    const [activeclassName, setactiveclassName] = useState('home');

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
                        <div className="logo-nav">
                            <NavLink to="/" >
                                <img src="static/images/logo.png" alt="Company logo" style={{height: "100px"}} />
                            </NavLink>
                        </div>
                        <div className="clear-toggle"></div>
                        <div id="main-menu" className="collapse scroll navbar-right">
                            <ul className="nav">
                                <li className={activeclassName === 'home' ? "active":""}> <Link to="home" spy={true} smooth={true} offset={-10} duration={1500} onSetActive={()=>setactiveclassName('home')}>Home</Link> </li>
                                <li className={activeclassName === 'portfolio' ? "active":""}> <Link to="works" spy={true} smooth={true} offset={-10} duration={1500} onSetActive={()=>setactiveclassName('portfolio')}>Portfolio</Link></li>
                                <li className={activeclassName === 'ourspecialization' ? "active":""}> <Link to="services" spy={true} smooth={true} offset={-10} duration={1500} onSetActive={()=>setactiveclassName('ourspecialization')}>Our Specialization</Link> </li>
                                <li className={activeclassName === 'blog' ? "active":""}> <NavLink to='/blogs' >blog</NavLink></li>
                                <li className={activeclassName === 'contact' ? "active":""}> <Link to="contact" spy={true} smooth={true} offset={-10} duration={1500} onSetActive={()=>setactiveclassName('contact')}>contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;
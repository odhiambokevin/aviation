import {Link} from 'react-scroll';
import Homeheader from "../components/HomeH";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";


function Home() {
    return (
        <>
        <Homeheader />
        <Portfolio />
        <Skills />
        <Services />
        <Contact />
        <Link to="home" spy={true} smooth={true} offset={-10} duration={1500} className="scrollup"> <i className="fa fa-chevron-up"> </i> </Link>
        </>
     );
}

export default Home;
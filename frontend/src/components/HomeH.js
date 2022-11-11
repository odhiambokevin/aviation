import {Link} from 'react-scroll';
import { useEffect, useState } from 'react';

const Homeheader = () => {

    const [currentbanner, setcurrentBanner] = useState(1);
    const banners = 
    [
        {             
            'id':1,
            'heading':'headings 1',
            'desc':'desc to heading 1',
            'image':'static/images/slider/1.jpg'
            
        },
        {            
            'id':2,
            'heading':'heading 2',
            'desc':'desc to heading 2',
            'image':'static/images/slider/2.jpg'
            
        },
        {            
            'id':3,
            'heading':'heading 3',
            'desc':'desc to heading 1',
            'image':'static/images/slider/3.jpg'
            
        },
        
    ]
    const bannerLength = banners.length;

    const nextslide = () => {
        setcurrentBanner(currentbanner > bannerLength + 1 ? 1 : currentbanner + 1 )
    }

    const playslide = true;
    let slideInterval;
    let intervalTime = 5000;

    function autoplay() {
        slideInterval = setInterval(nextslide, intervalTime)
    }
    
    useEffect(() => {
        setcurrentBanner(1)
    }, []);

    useEffect(() => {
        if (playslide) {
            autoplay();
        }
        return () => clearInterval(slideInterval);
    }, [currentbanner]);

    // console.log(currentbanner);

    return ( 
        <section id="home" className="home">
            <div className="slider-overlay"></div>
            <div className="flexslider">
                <ul className="slides scroll">
                    {banners.map((banner)=>(
                    <li className={currentbanner === banner.id ? 'first' :'secondary'} key={banner.id}>
                    <div className="slider-text-wrapper">
                        
                        <div className="container">
                            <div className="big" nextslide='true'>{banner.heading}</div>          
                            <div className="small">data base</div>
                            <Link className="middle btn btn-white" to="works" spy={true} smooth={true} offset={-10} duration={1500}>VIEW PORTFOLIO</Link>
                        </div>       
                    </div>
                    <img src={banner.image} alt="" />
                    </li>
                    ))}
                    
                </ul>
            </div>
        </section>
     );
}
 
export default Homeheader;
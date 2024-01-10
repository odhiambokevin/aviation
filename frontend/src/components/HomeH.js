import {Link} from 'react-scroll';
import { useEffect, useState } from 'react';
import {motion, AnimatePresence} from "framer-motion"

const Homeheader = () => {

    const [index, setIndex] = useState(0);
    const banners = [
        {
            'id':1,
            'heading':'Location Analytics',
            'description':'Mapping Things That Move You',
            'image':'static/images/slider/1.jpg'
        },
        {
            'id':2,
            'heading':'Utilities Mapping',
            'description':'Integrate Your Architecture with Automated Mapping',
            'image':'static/images/slider/2.jpg'
        },
        {
            'id':3,
            'heading':'Watershed Management',
            'description':'Agronomy and Watershed Management',
            'image':'static/images/slider/3.jpg'
        },
        {
            'id':4,
            'heading':'Biodiversity Informatics',
            'description':'Data-based Solutions for Targeted Results',
            'image':'static/images/slider/data.jpg'
        },
    ]
        
    const nextslide = () => {
        if (index === banners.length -1 ) {
            setIndex(0)
            return
        }
        setIndex(index + 1 )
    }

    const playslide = true;
    let slideInterval;
    let intervalTime = 10000;

    function autoplay() {
        slideInterval = setInterval(nextslide, intervalTime)
    }
       
    useEffect(() => {
        if (playslide) {
            autoplay();
        }
        return () => clearInterval(slideInterval);
    }, [index]);

    return ( 
        <section id="home" className="home">
            <div className="slider-overlay"></div>
            <div className="flexslider">
                <ul className="slides scroll">
                  {/* {banners.map((banner, index)=>( */}
                  <AnimatePresence>
                    <li
                   
                    >
                        <div className="slider-text-wrapper"
                        
                        >  
                            <motion.div className="container"
                             animate={{x: 0}} 
                        transition={{duration: 0.8}}
                        exit={{x: "101vw"}} key={banners[index].id}
                    initial={{x: '-101vw'}}>
                                <div className="big">{banners[index].heading}</div>          
                                <div className="small">{banners[index].description}</div>
                                <Link className="middle btn btn-white" to="works"
                                spy={true} smooth={true}
                                offset={-10} duration={1500}>VIEW PORTFOLIO</Link>
                            </motion.div>       
                        </div>
                       
                        <motion.img  animate={{x: 0}} 
                        transition={{duration: 0.8}}
                        exit={{x: "-101vw"}} key={banners[index].id}
                    initial={{x: '101vw'}} src={banners[index].image} alt="" />
                       
                    </li>
                    </AnimatePresence>
                    {/* ))} */}
                </ul>
            </div>
        </section>
     );
}

export default Homeheader;
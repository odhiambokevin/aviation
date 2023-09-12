import {Link} from 'react-scroll';
import { useEffect, useState } from 'react';
import {motion, AnimatePresence} from "framer-motion"

const Homeheader = () => {

    const [index, setIndex] = useState(0);
    const headings = [
        'Location Analytics',
        'Utilities Mapping',
        'Watershed Management',
        'Biodiversity Informatics'
    ]
    const descriptions = [
        'Mapping Things That Move You',
        'Integrate Your Architecture with Automated Mapping',
        'Agronomy and Watershed Management',
        'Data-based Solutions for Targeted Results'
    ]
    const banners = [
        'static/images/slider/1.jpg',
        'static/images/slider/2.jpg',
        'static/images/slider/3.jpg',
        'static/images/slider/data.jpg']
    
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

    console.log(index);
    const variants = {
       initial:{
            x:"120vw",
            opacity: 0,
        },
        animation:{
            x:0,
            opacity: 1,
        },
        exit:{ 
            opacity: 0,
            x: "-100vw",
            transition: {
                duration: 1,
            },
        },
    }
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
                        exit={{x: "101vw"}} key={banners[index]}
                    initial={{x: '-101vw'}}>
                                <div className="big">{headings[index]}</div>          
                                <div className="small">{descriptions[index]}</div>
                                <Link className="middle btn btn-white" to="works"
                                spy={true} smooth={true}
                                offset={-10} duration={1500}>VIEW PORTFOLIO</Link>
                            </motion.div>       
                        </div>
                       
                        <motion.img  animate={{x: 0}} 
                        transition={{duration: 0.8}}
                        exit={{x: "-101vw"}} key={banners[index]}
                    initial={{x: '101vw'}} src={banners[index]} alt="" />
                       
                    </li>
                    </AnimatePresence>
                    {/* ))} */}
                </ul>
            </div>
        </section>
     );
}

export default Homeheader;
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {allWorks} from '../state/slices/worksSlice';
import {motion} from 'framer-motion';

const Works = ()=> {
    const {works} = useSelector((state)=>state.works);
    const [filtered, setFiltered] = useState(works);
    const [activeWork, setActiveWork] = useState('all');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(allWorks())

        },[dispatch]);

    useEffect(()=>{
        if(activeWork==='all'){
            setFiltered(works);
            return;
        }
        const filteredWork = works.filter((work)=>work.category.includes(activeWork));
        setFiltered(filteredWork);
    },[works,activeWork]

    );
    
    return ( 
        <section id="works" className="section">
        <div className="title-box text-center">
          <h2 className="title">Portfolio</h2>
       </div>


          <div className=" col-md-12 text-center">
              <ul className="filtering">
                  <li className={activeWork === 'all' ? "filter active":"filter"} onClick={()=>setActiveWork('all')}>All</li>
                  <li className={activeWork === 'biodiversity' ? "filter active":"filter"} onClick={()=>setActiveWork('biodiversity')}>Biodiversity</li>
                  <li className={activeWork === 'agriculture' ? "filter active":"filter"} onClick={()=>setActiveWork('agriculture')}>Agronomy</li>
                  <li className={activeWork === 'water' ? "filter active":"filter"} onClick={()=>setActiveWork('water')}>Water</li>
                  <li className={activeWork === 'facility' ? "filter active":"filter"} onClick={()=>setActiveWork('facility')}>Facility</li>
              </ul>
          </div>
      
      <motion.div layout className="work-main">
            {filtered.map((work)=>(
          <ul className="work-grid" key={work.id}>
              <li className="work-item thumnail-img">
                  <div className="work-image">
                      <img src={work.image} alt="thumbnail" />
                      
                       <div className="hover-link">
                          <NavLink to={`/projects/${work.slug}`}>
                              <i className="fa fa-link"></i>
                          </NavLink>

                          <a href={work.image} className="popup-image">
                              <i className="fa fa-plus"></i>
                          </a>
                       </div>
                  
                       <div className="work-caption">
                           <h4>{work.title}</h4>
                       </div>

                  </div>
              </li> 
          </ul>
          )
          )}
      </motion.div>
  </section>
     );
}

export default Works;
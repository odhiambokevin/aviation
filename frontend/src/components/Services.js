import {Link} from 'react-router-dom';

const Services = () => {
    return ( 
        
 <section id="services" className="section">
 <div className="container">
   <div className="title-box text-center">
     <h2 className="title">Our Specialization</h2>
   </div>
   <div className="row">
     <div className="col-md-12">
         <div className="content-tab-1">
             <ul className="nav">
                 <li className="active">
                     <Link aria-expanded="true" to="#tab-content-1" data-toggle="tab">
                     <i className="fa fa-desktop"></i>
                     <h4>Spatial Analytics</h4>
                     </Link>
                     <div className="tab-arrow">
                     </div>
                 </li>

                 <li>
                     <Link aria-expanded="true" to="#tab-content-2" data-toggle="tab">
                     <i className="fa fa-step-forward"></i>
                     <h4>Change Monitoring</h4>
                     </Link>
                     <div className="tab-arrow">
                     </div>
                 </li>

                 <li>
                     <Link aria-expanded="true" to="#tab-content-3" data-toggle="tab">
                     <i className="fa fa-gear"></i>
                     <h4>Image Analysis</h4>
                     </Link>
                     <div className="tab-arrow">
                     </div>
                 </li>

                 <li>
                     <Link aria-expanded="true" to="#tab-content-4" data-toggle="tab">
                     <i className="fa fa-database"></i>
                     <h4>Assets Management</h4>
                     </Link>
                     <div className="tab-arrow">
                     </div>
                 </li>

                 <li>
                     <Link aria-expanded="true" to="#tab-content-5" data-toggle="tab">
                     <i className="fa fa-pie-chart"></i>
                     <h4>Modelling</h4>
                     </Link>
                     <div className="tab-arrow">
                     </div>
                 </li>

             </ul>

                             <div className="tab-content-main">
                                 <div className="container">
                                     <div className="tab-content">
                                         <div className="tab-pane active in" id="tab-content-1">

                                             <div className="tab-content-4">

                                                 <div className="col-md-3">
                                                     <div className="tab4-services-box">
                                                         <div className="icon"><i className="fa fa-bolt"></i> </div>
                                                         <div className="info">
                                                             <h4>Site suitability analysis</h4>
                                                             <p>Application of spatial algebra to identify
                                                                 optimum site dyanmics for project</p>
                                                         </div>
                                                     </div>
                                                 </div>



                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-fire"></i> </div>
                                             <div className="info">
                                                 <h4>Richness Indices</h4>
                                                 <p>Sharpen insights in data to identify sampling
                                                     charaterization</p>
                                             </div>
                                         </div>
                                     </div>

                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-chain"></i> </div>
                                             <div className="info">
                                                 <h4>Hotspot Mapping</h4>
                                                 <p>Focussed resources deployment using hotspot
                                                     analyis maps</p>
                                             </div>
                                         </div>
                                     </div>

                                 </div>

                             </div>
                          
                             <div className="tab-pane" id="tab-content-2">

                                 <div className="tab-content-4">

                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-bolt"></i> </div>
                                             <div className="info">
                                                 <h4>Trend analyis</h4>
                                                 <p>A temporal perspective for assets using
                                                     artificial intelligence</p>
                                             </div>
                                         </div>
                                     </div>



                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-fire"></i> </div>
                                             <div className="info">
                                                 <h4>LULC Dynamics</h4>
                                                 <p>Land cover and land use changes using
                                                     mulit-platform synthesis</p>
                                             </div>
                                         </div>
                                     </div>

                                 </div>

                             </div>


                             <div className="tab-pane" id="tab-content-3">

                                 <div className="tab-content-4">

                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-bolt"></i> </div>
                                             <div className="info">
                                                 <h4>Remote sensing for Agriculture</h4>
                                                 <p>Smart agriculture to maximize output and protect
                                                     ecosystems</p>
                                             </div>
                                         </div>
                                     </div>



                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-fire"></i> </div>
                                             <div className="info">
                                                 <h4>Watershed Characterization</h4>
                                                 <p>Basin-wide management of watershed using
                                                     satellite imagery analytics</p>
                                             </div>
                                         </div>
                                     </div>

                                 </div>

                             </div>

                             <div className="tab-pane" id="tab-content-4">

                                 <div className="tab-content-4">

                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-bolt"></i> </div>
                                             <div className="info">
                                                 <h4>AM/FM Mapping</h4>
                                                 <p>Integrated dynamic mapping of assets</p>
                                             </div>
                                         </div>
                                     </div>



                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-fire"></i> </div>
                                             <div className="info">
                                                 <h4>Database deployment</h4>
                                                 <p>Design, development and deployment of databases
                                                     and related infrastructure</p>
                                             </div>
                                         </div>
                                     </div>

                                 </div>

                             </div>


                             <div className="tab-pane" id="tab-content-5">

                                 <div className="tab-content-4">

                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-bolt"></i> </div>
                                             <div className="info">
                                                 <h4>Ecological Niche</h4>
                                                 <p>Spatial modelling of species habitat suitability
                                                 </p>
                                             </div>
                                         </div>
                                     </div>



                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-fire"></i> </div>
                                             <div className="info">
                                                 <h4>Groundwater Interactions</h4>
                                                 <p>Hydrological modelling for Grooundwater and
                                                     Recharge Zones Management</p>
                                             </div>
                                         </div>
                                     </div>

                                     <div className="col-md-3">
                                         <div className="tab4-services-box">
                                             <div className="icon"><i className="fa fa-pagelines"></i> </div>
                                             <div className="info">
                                                 <h4>Modelling for Agriculture</h4>
                                                 <p>Crop Modelling to adapt to Climate Change</p>
                                             </div>
                                         </div>
                                     </div>

                                 </div>

                             </div>

                         </div>
                     </div>
                 </div>
             </div>
         </div>

         </div>
     </div>
 </section>  

     );
}
 
export default Services;
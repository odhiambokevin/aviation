const Skills = () => {
    return ( 
        <section id="skills" className="section parallax">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="title-box text-center white">
                        <h2 className="title">Technical Skills</h2>
                    </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main">
                            <span className="pie-chart " data-percent="87">
                                <span className="percent"></span>
                            </span>
                            <h4>Enterprise-Level Database</h4>
                            <p>Database management customized for optimization and results delivery</p>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main">
                            <span className="pie-chart" data-percent="80">
                                <span className="percent"></span>
                            </span>
                            <h4>Network Analysis</h4>
                            <p>Mapping interactions on networks with focus on influences of processes</p>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main">
                            <span className="pie-chart " data-percent="86">
                                <span className="percent"></span>
                            </span>
                            <h4>Defined Modelling</h4>
                            <p>Multiperspective approach to designing models</p>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main">
                            <span className="pie-chart" data-percent="95">
                                <span className="percent"></span>
                            </span>
                            <h4>Integrated Image Analytics</h4>
                            <p>Contextualization of dynamics during image analysis</p>
                        </div>

                </div>
                </div>
        </section>
     );
}
 
export default Skills;
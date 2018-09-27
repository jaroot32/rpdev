import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import capabilities1 from '../assets/images/capabilities1.jpg'
import capabilities2 from '../assets/images/capabilities2.jpg'
import capabilities3 from '../assets/images/capabilities3.jpg'
import capabilities4 from '../assets/images/capabilities4.jpg'
import capabilities5 from '../assets/images/capabilities5.jpg'
import capabilities6 from '../assets/images/capabilities6.jpg'
import ourphilosophy3 from '../assets/images/ourphilosophy3.jpg'
import capabilities7 from '../assets/images/capabilities7.jpg'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Capabilities = (props) => (
    <div>
        <Helmet>
            <title>Capabilities</title>
            <meta name="description" content="At Work" />
        </Helmet>

        {/* <BannerLanding /> */}
        <section id="banner" className="style2">
            <div className="containerInner">
                
        <div id="main">
            <section id="two" className="spotlights">
            {/* <section className="major">
                <h1>About Rickabaugh Pentecost Development</h1>
            </section> */}
            <div className="content firstContent">
                <h1>CIVIL CONSTRUCTION CAPABILITIES</h1>
            </div>
                <section>
                    <Link to="/capabilities" className="image">
                        <img src={capabilities1} alt="" />
                    </Link>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <div className="partnerships">
                                <h2>CREATING PARTNERSHIPS</h2>
                            <div className="partnershipsP">
                            <p>Since our formation, our focus has been creating partnerships with those we work for. Our success relies on their success.  We take this commitment to our clients extremely seriously, and because of that have developed lasting relationships.
                            </p>
                            <p>The pinnacle of our success is earning our client's trust</p>
                            <p className="highTrust">High Trust = Low Cost and High Speed while Low Trust = High Cost and Low Speed</p>
                            <p>Foundational to our success is our estimating department.  The majority of the projects we construct are projects
                                that we have been intimately involved with since our client acquired the land.  We assist the owner in preliminary budgets used
                                for acquisition, value-engineer the project through design, and assemble the final project budget.  Because of this system, our clients know what the true
                                cost is months or even years before the first yard of dirt is moved.
                            </p>
                            <p>the transition from the estimate to the field is one that we take seriously.  Knowing the client's desires,
                                schedule constraints, budget, and milestone needs allows us to work backwards to ensure the project is adequately
                                staffed.  Our team in the field is budget-minded, schedule-driven, and perfection-oriented.</p>
                            <p>Delivering results consistently is not something that happens by accident or without
                                effort, but it is something that happens every time.</p>    
                            <ul className="actions">
                                {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                            </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/ourphilosophy" className="image">
                        <img src={capabilities2} alt="" />
                    </Link>
                    {/* <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div> */}
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                        <div className="estimating">
                            <h2>ESTIMATING</h2>
                            <p>RPD provides its clients with a variety of estimating options from preliminary budgets and feasibilities, to 
                                turn-key site development.  Through attention to detail, value engineering options, and pre-Construction
                                expertise, RPD can ensure that its clients receive competitive and complete bid packages.
                            </p>
                            <ul className="actions">
                                {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                            </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/capabilities" className="image">
                        <img src={capabilities3} alt="" />
                    </Link>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <div className="underground">
                                <h2>UNDERGROUND UTILITIES</h2>
                            <p>
                                RPD is capable of handling all sites related underground utilities.
                                From underground stormwater facilities and deep sanitary sewers to high pressure water mains
                                - RPD excels at all facets of the utility installation process.
                            </p>
                        </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/capabilities" className="image">
                        <img src={capabilities4} alt="" />
                    </Link>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <div className="earthwork">
                                <h2>EARTHWORK</h2>
                                <p>
                                    RPD has the manpower and equipment to complete any mass grading project.
                                    Whether it is massive cut/fills, commercial super-pad sites, or extensiveretaining
                                    wall projects, RPD puts its vast knowledge of material specifications, compaction, soil amendment and
                                    sequencing to work.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/capabilities" className="image">
                        <img src={capabilities5} alt="" />
                    </Link>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <div className="projectManagement">
                                <h2>PROJECT MANAGEMENT</h2>
                            <p>
                                The project managers at RPD ensure that all projects remain on budget and on
                                schedule.  Each project's progress is intensively monitored and clearly communicated
                                with the owner.  By managing schedules, subcontractors, and crews, the project managers guarantee
                                that all jobs begin on the right path and close out smoothly.
                            </p>
                        </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/capabilities" className="image">
                        <img src={capabilities6} alt="" />
                    </Link>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <div className="commitment">
                            <h2>COMMITMENT TO SAFETY</h2>
                            <p>Safety is a conscience, non-negotiable commitment of RPD.  
                            This commitment is made between the employees, the subcontractors and vendors.
                            As a company, RPD and its teammembers follow strict guidelines to ensure all
                            disciplines of work are in accordance with federal, state and local jurisdictions.
                            RPD instills accountability within its ranks to achieve its safety goals. 
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/capabilities" className="image">
                        <img src={ourphilosophy3} alt="" />
                    </Link>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <div className="lastParagraph">
                            <p>Because of its emphasis on safety , RPD is proud of the following: 2007,
                                2008, 2009, 2010 & 2011 L&I Experience Factor of .6000 Non-management Safety Steering
                                Team 100% comprehensive drug testing program.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/capabilities" className="image">
                        <img src={capabilities7} alt="" />
                    </Link>
                </section>
            </section>
     
        </div>
        <Contact />
        <Footer />
        </div>
    
        </section>
       
     
    </div>
)

export default Capabilities
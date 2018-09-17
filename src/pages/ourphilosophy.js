import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import ourphilosophy from '../assets/images/ourphilosophy.jpg'
import ourphilosophy2 from '../assets/images/ourphilosophy2.jpg'
import ourphilosophy3 from '../assets/images/ourphilosophy3.jpg'

const AtWork = (props) => (
    <div>
        <Helmet>
            <title>Our Philosophy</title>
            <meta name="description" content="At Work" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    {/* <header className="major"> */}
                        {/* <h1>About Rickabaugh Pentecost Development</h1> */}
                    {/* </header> */}
                    {/* <p></p> */}
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/ourphilosophy" className="image">
                        <img src={ourphilosophy} alt="" />
                    </Link>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            {/* <header className="major"> */}
                                <h2>Investing in People</h2>
                            {/* </header> */}
                            <p>We are a team of like-minded individuals who thrive on hard work, collaboration, and perfection.  
                                We are a team that understands what trust means.  Both with those we work with and those we work for.</p>
                            <ul className="actions">
                                {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <p>This seemingly simple recipe for success is just that, simple.  The recipe is our core purpose and that is to Invest In People.
                                That purpose is why we exist, why we put 110% effort into every day.  This investment reaches farther than our team.
                                It reaches our trade partners, our clients, the municipalities we work in, and all those we contact by wanting each individual to be better for having dealt with the company.
                            </p>
                            <p>This purpose is derived from a set of non-negotiable core values.  
                                These values do not change with clients, market conditions, or work load:
                            </p>
                            <ul>
                                <li>Leading by Serving</li>
                                <li>Building Strong Family and Community</li>
                                <li>Teaching, Mentoring, and Training</li>
                                <li>Great attitudes -- Great Teams</li>
                                <li>Quality Through Excellence</li>
                            </ul>
                            <ul className="actions">
                                {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/ourphilosophy" className="image">
                        <img src={ourphilosophy2} alt="" />
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
                            {/* <header className="major"> */}
                                <h2>Commitment to Safety</h2>
                            {/* </header> */}
                            <p>
                                Safety is a conscience, non-negotiable commitment of
                                RPD.  This commitment is made between the employees, the subcontractors and vendors.
                                As a company, RPD and its teammembers follow strict guidelines to ensure all disciplines
                                of work are in accordance with federal, state and local jurisdictions.  RPD instills accountability
                                within its ranks to achieve its safety goals.
                            </p>
                            <p>Because of its emphasis on safety, RPD is proud of the following: 2007, 2008, 2009, 2010, 2011
                                L&I Experience Factor of .6000 Non-management Safety Steering Team 100% comprehensive drug testing program.
                            </p>
                            <ul className="actions">
                                {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/ourphilosophy" className="image">
                        <img src={ourphilosophy3} alt="" />
                    </Link>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            {/* <header className="major"> */}
                                <h2>The Paradigm for Quality and Excellence in Construction and Development</h2>
                            {/* </header> */}
                            <p>
                                With great attitudes come great teams with a passion for integrity dedication
                                to services.  We will lead by serving, sacraficing and mentoring both in-house within our community.
                                We will be renowned for striving for perfection in every aspect of our daiy operations, while 
                                having positive impacts on the lives we touch.  The name "RPD" will
                                be synonymous with quality workmanship, quality citizenship and the leader in the industry.
                            </p>
                            <ul className="actions">
                                {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </div>
)

export default AtWork
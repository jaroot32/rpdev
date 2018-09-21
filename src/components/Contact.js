import React from 'react'

import Link from 'gatsby-link'

import footlogo from '../assets/images/logo-rpd-foot.png'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <Link to="/" className="logo"><img src={footlogo}/></Link>  
            </section>
            <span>    
                <div>
                    <p>
                        Rickabaugh Pentecost Development builds strong families and communities 
                        by offering quality innovative services and building landmark projects.
                    </p>
                    <p>Leading by Serving</p>
                    <p>Building Strong Family and Community</p>
                    <p>Teaching, Mentoring, and Training</p>
                    <p>Great Attitudes-Great Teams</p>
                    <p>Quality Through Excellence</p>
                </div>
             </span> 
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt"></span>
                        {/* <h3>Email</h3> */}
                        <a href="mailto:info@rpdevelopment.com">info@rpdevelopment.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt"></span>
                        {/* <h3>Phone</h3> */}
                         <a href="tel:2536047200"><span>(253) 604-7200</span></a>
                    </div>
                </section>
                <section>
                  <a href="https://goo.gl/maps/79WqCmaWAut">  <div className="contact-method">
                        <span className="icon alt"></span>
                        <h4>Rickabaugh Pentecost Development, LLC</h4>
                        <span>108 W Stewart<br />
                        Puyallup, WA 98371<br /></span>
                    </div>
                  </a>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

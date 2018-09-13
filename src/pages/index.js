import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import vertical1 from '../assets/images/vertical1.jpg'
import vertical2 from '../assets/images/vertical2.jpg'
import vertical3 from '../assets/images/vertical3.jpg'
import vertical4 from '../assets/images/vertical4.jpg'
import vertical5 from '../assets/images/vertical5.jpg'
import RPDSlideShow from '../components/SimpleSlide';

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <RPDSlideShow />

               <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${vertical1})`}}>
                            <header className="major">
                                <h3>PHILOSOPHY</h3>
                            </header>
                            <Link to="/ourphilosophy" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${vertical2})`}}>
                            <header className="major">
                                <h3>CAPABILITIES</h3>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${vertical3})`}}>
                            <header className="major">
                                <h3>WORK</h3>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${vertical4})`}}>
                            <header className="major">
                                <h3>PROJECTS</h3>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${vertical5})`}}>
                            <header className="major">
                                <h3>PEOPLE</h3>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
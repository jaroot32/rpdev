import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/ourphilosophy">Philosophy</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/capabilities">Capabilities</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/atwork">Work</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/projects">Projects</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/investing">People</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu

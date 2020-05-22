import React from 'react'
import SocialIcons from './SocialIcons'
import links from '../constants/links'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Location from './Location'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <SocialIcons showInSmallDevices={true} />
                <ul className="footer__links">
                    {links.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="footer__link"
                                alt={`Link to ${item.path}`}
                            >
                                <AniLink
                                    fade
                                    to={item.path}
                                    alt={`Link to ${item.text}`}
                                >
                                    {item.text}
                                </AniLink>
                            </li>
                        )
                    })}
                </ul>
                <Location />
            </div>
            <div className="footer__copyright">
                copyright &copy; Rte. Salamanca {new Date().getFullYear()}
                <div> todos los derechos reservados</div>
            </div>
        </div>
    )
}

export default Footer

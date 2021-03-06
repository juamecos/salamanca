import React from 'react'
import links from '../constants/links'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import loadable from '@loadable/component'
import Logotext from '../images/logotext.inline.svg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import legal from '../constants/legal'

// const Location = loadable(() => import('./Location'))
const SocialIcons = loadable(() => import('./SocialIcons'))

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Logotext className="footer__logo" alt="logo" />
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
                                    activeClassName="active"
                                    to={item.path}
                                    alt={`Link to ${item.text}`}
                                >
                                    {item.text}
                                </AniLink>
                            </li>
                        )
                    })}
                </ul>
                <div className="footer__location">
                    <a
                        href="https://goo.gl/maps/KCDfs4sDqL792EeR8"
                        className="footer__location--link"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="Link to Ubicación Google maps"
                    >
                        <FaMapMarkerAlt className="footer__location--icon" />
                        <div className="footer__location--address">
                            Adv. Castellón 6, Cullera
                        </div>
                    </a>
                </div>
                <div className="footer__divider"></div>
                <ul className="footer__legal">
                    {legal.map((item, index) => {
                        return (
                            <li className="footer__legal--item" key={index}>
                                <AniLink
                                    swipe
                                    direction="up"
                                    duration={0.5}
                                    to={item.path}
                                    alt={`link a ${item.text}`}
                                    activeClassName="footer__legal--active"
                                >
                                    {item.text}
                                </AniLink>
                            </li>
                        )
                    })}
                </ul>
                <div className="footer__copyright">
                    copyright &copy; Rte. Salamanca {new Date().getFullYear()}
                    <div> todos los derechos reservados</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

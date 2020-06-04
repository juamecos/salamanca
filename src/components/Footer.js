import React from 'react'
import links from '../constants/links'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import loadable from '@loadable/component'
import Logotext from '../images/logotext.inline.svg'

const Location = loadable(() => import('./Location'))
const SocialIcons = loadable(() => import('./SocialIcons'))

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <Logotext className="footer__logo" alt="logo" />
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
                <SocialIcons showInSmallDevices={true} />
            </div>
            <div className="footer__copyright">
                copyright &copy; Rte. Salamanca {new Date().getFullYear()}
                <div> todos los derechos reservados</div>
            </div>
        </div>
    )
}

export default Footer

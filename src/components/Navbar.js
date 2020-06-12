import React, { useState } from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import links from '../constants/links'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import loadable from '@loadable/component'
import Logo from '../images/logo.inline.svg'

const SocialIcons = loadable(() => import('./SocialIcons'))

const Navbar = () => {
    const [isOpen, setNav] = useState(false)
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    const navLinksClass = isOpen ? `navbar__links show-nav` : `navbar__links`

    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__header">
                    <div className="navbar__logo">
                        <Logo className="navbar__logo--image" />
                    </div>
                    <button
                        type="button"
                        className="navbar__mobile--menu"
                        onClick={toggleNav}
                        alt="menu button"
                    >
                        <FaAlignJustify className="navbar__mobile--icon" />
                        <div className="navbar__mobile--text">MENÚ</div>
                    </button>
                </div>
                <ul className={navLinksClass}>
                    {links.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="navbar__link"
                                alt={`Link to ${item.path}`}
                            >
                                <AniLink
                                    activeClassName="active"
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
                <SocialIcons showInSmallDevices={false} />
            </div>
        </div>
    )
}

export default Navbar

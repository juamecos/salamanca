import React, { useState } from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import links from '../constants/links'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SocialIcons from './SocialIcons'
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
                        <div className="navbar__logo--text">Rte.Salamanca</div>
                    </div>
                    <button
                        type="button"
                        className="navbar__mobile--menu"
                        onClick={toggleNav}
                        alt="menu button"
                    >
                        <FaAlignJustify className="navbar__mobilmenu--icon" />
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

import React, { useState, useEffect } from 'react'
import socialIcons from '../constants/social-icons'
const SocialIcons = props => {
    const [isLarge, setLarge] = useState(window.innerWidth > 1048)

    const updateMedia = () => {
        setLarge(window.innerWidth > 1024)
    }
    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        return () => window.removeEventListener('resize', updateMedia)
    })

    return (
        <>
            {isLarge || props.showInSmallDevices ? (
                <div className="social-icons">
                    {socialIcons.map((item, index) => {
                        return (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                alt={`Link to ${item.url}`}
                            >
                                {item.icon}
                            </a>
                        )
                    })}
                </div>
            ) : null}
        </>
    )
    // return (

    // )
}

export default SocialIcons

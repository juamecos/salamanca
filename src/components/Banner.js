import React from 'react'
import Logotext from '../images/logotext.inline.svg'

const Banner = ({ info, children }) => {
    return (
        <div className="banner">
            <Logotext className="banner__title" />
            <h2 className="banner__info">{info}</h2>
            {children}
        </div>
    )
}

export default Banner

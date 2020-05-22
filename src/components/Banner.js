import React from 'react'

const Banner = ({ title, info, children }) => {
    return (
        <div className="banner">
            <h1 className="banner__title">{title}</h1>
            <h2 className="banner__info">{info}</h2>
            {children}
        </div>
    )
}

export default Banner

import React from 'react'
import Title from './Title'

const Section = ({ children, classname, title, message }) => {
    return (
        <section className={`section ${classname}`}>
            <Title title={title} message={message} />
            {children}
        </section>
    )
}

export default Section

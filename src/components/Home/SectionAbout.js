import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Section from '../Section'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SectionAbout = ({ data }) => {
    const { aboutImage } = useStaticQuery(getAbout)

    return (
        <Section
            classname="section-about"
            title="Déjanos decirte"
            message="quiénes somos"
        >
            <div className="section-about__container">
                <article className="section-about__images">
                    <Img
                        fluid={aboutImage.childImageSharp.fluid}
                        alt="Vista paseo marítimo"
                    />
                </article>
                <article className="section-about__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae aliquam quasi tenetur? Facere ex natus modi quam
                    accusantium ab incidunt, neque tempora at maiores deleniti
                    deserunt nobis. Eaque, unde repudiandae!
                </article>
                <AniLink
                    fade
                    to="/restaurante"
                    alt="Boton a página restaurante"
                    className="btn btn--section"
                >
                    Restaurante
                </AniLink>
            </div>
        </Section>
    )
}

export const getAbout = graphql`
    query aboutAbout {
        aboutImage: file(relativePath: { eq: "palmeras.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default SectionAbout

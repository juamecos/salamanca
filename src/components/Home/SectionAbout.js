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
                    <p>
                        El RESTAURANTE SALAMANCA está situado en la playa de San
                        Antonio de Cullera. Cada año miles de personas nos
                        visitan y disfrutan de una comida buena y de calidad,{' '}
                        <span className="highlighted">frente a la playa.</span>
                    </p>
                    <p>
                        El plato típico del restaurante es{' '}
                        <span className="highlighted">la paella</span>, en
                        cambio, muchos de nuestros clientes aprecian nuestra
                        forma de elaborar{' '}
                        <span className="highlighted">
                            zarzuelas y mariscadas.
                        </span>
                    </p>
                </article>
            </div>
            <AniLink
                fade
                to="/restaurante"
                alt="Boton a página restaurante"
                className="btn btn--section btn--restaurante"
            >
                Restaurante
            </AniLink>
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

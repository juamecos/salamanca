import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Section from '../Section'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SectionEspecialidades = ({ data }) => {
    const { zarzuela, paellabogavante, mariscada } = useStaticQuery(
        getEspecialidades
    )

    const especialidadesArr = [
        { img: zarzuela, text: 'Zarzuela de Marisco' },
        { img: paellabogavante, text: 'Paella de Bogavante' },
        { img: mariscada, text: 'Mariscada' },
    ]
    return (
        <Section
            classname="especialidades"
            title="Nuestras"
            message="especialidades"
        >
            <div className="especialidades__container">
                {especialidadesArr.map((item, index) => (
                    <article
                        className={`especialidades__block especialidades__block--${
                            index + 1
                        }`}
                        key={index}
                    >
                        <Img
                            className="especialidades__image"
                            fluid={item.img.childImageSharp.fluid}
                            alt={`Imagen de ${item.text}`}
                        />
                        <caption className="especialidades__text">
                            {item.text}
                        </caption>
                    </article>
                ))}

                <AniLink
                    fade
                    to="/carta"
                    alt="Boton a página carta"
                    className="btn btn--section"
                >
                    Carta
                </AniLink>
            </div>
        </Section>
    )
}

export const getEspecialidades = graphql`
    query especialidades {
        zarzuela: file(relativePath: { eq: "zarzuela.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        paellabogavante: file(relativePath: { eq: "paella-bogavante.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mariscada: file(relativePath: { eq: "mariscada.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
export default SectionEspecialidades

import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import Title from '../components/Title'
import { FaPhoneAlt } from 'react-icons/fa'
import SEO from '../components/SEO'

const contacto = ({ data }) => {
    return (
        <Layout>
            <SEO title="Contacto" />
            <StyledBackgroundSection
                className="contacto__hero"
                home={false}
                image={data.message.childImageSharp.fluid}
                alt="imagen de fondo chica lee carta"
            />
            <section className="contacto section">
                <div className="contacto__container">
                    <Title title="Contacta con" message="Nosotros" />
                    <div className="contacto__content">
                        <h1 className="contacto__heading">Reserva tu mesa</h1>
                        <p className="contacto__paragraph">
                            En temporada lo mejor es reservar
                        </p>
                        <a
                            href="tel:+34961722712"
                            alt="enlace a llamanos"
                            className="contacto__tel--link btn btn--section"
                        >
                            <FaPhoneAlt className="contacto__icon" />
                            <div className="contacto__subheading">
                                ¡Llámanos!
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default contacto
export const query = graphql`
    query {
        message: file(relativePath: { eq: "messageInBottle.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1900) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

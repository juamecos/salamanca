import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import Title from '../components/Title'

const restaurante = ({ data }) => {
    return (
        <Layout>
            <StyledBackgroundSection
                className="menu__hero"
                home={false}
                image={data.menudia.childImageSharp.fluid}
                alt="imagen de menus del día"
            />
            <section className="menu section">
                <div className="menu__container">
                    <Title title="Nuestro" message="Menú del Día" />
                    <div className="menu__content">
                        <div className="menu__group">
                            <h2 className="menu__heading">Primeros</h2>
                            <ul className="menu__platos">
                                <li className="menu__plato">
                                    <div className="menu__item">
                                        Ensalada Valenciana
                                    </div>
                                </li>
                                <li className="menu__plato">
                                    <div className="menu__item">
                                        Ensalada de chipirones
                                    </div>
                                </li>
                                <li className="menu__plato">
                                    <div className="menu__item">
                                        Mejillones al Vapor
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="menu__group">
                            <h2 className="menu__heading">Segundos</h2>
                            <ul className="menu__platos">
                                <li className="menu__plato">
                                    <div className="menu__item">
                                        Paella de marisco
                                    </div>
                                </li>
                                <li className="menu__plato">
                                    <div className="menu__item">
                                        Ensalada de chipirones
                                    </div>
                                </li>
                                <li className="menu__plato">
                                    <div className="menu__item">
                                        Mejillones al Vapor
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h2 className="menu__incluido">
                            Pan, Postre y café incluidos
                        </h2>
                        <h3 className="menu__precio">13.50 EUR</h3>
                        <p className="menu__aparte">bebida aparte</p>
                        <p className="menu__aparte">
                            suplemento carajillo 0.50 EUR
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default restaurante

export const query = graphql`
    query {
        menudia: file(relativePath: { eq: "menudia.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

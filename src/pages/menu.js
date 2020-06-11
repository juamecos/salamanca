import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import Title from '../components/Title'

const restaurante = ({ data }) => {
    console.log(data)
    const primeros = data.primeros.edges
    const segundos = data.segundos.edges
    const incluido = data.incluido.edges
    console.log(primeros)

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
                                {primeros.map(item => {
                                    return (
                                        <li
                                            className="menu__plato"
                                            key={item.node.titulo}
                                        >
                                            <div className="menu__item">
                                                {item.node.titulo}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="menu__group">
                            <h2 className="menu__heading">Segundos</h2>
                            <ul className="menu__platos">
                                {segundos.map(item => {
                                    return (
                                        <li
                                            className="menu__plato"
                                            key={item.node.titulo}
                                        >
                                            <div className="menu__item">
                                                {item.node.titulo}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <h2 className="menu__incluido">
                            {incluido[0].node.incluido}
                        </h2>
                        <h3 className="menu__precio">{`${incluido[0].node.precioMenu} EUR`}</h3>
                        <p className="menu__aparte">Bebida aparte</p>
                        <p className="menu__aparte">
                            {incluido[0].node.suplemento}
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
        primeros: allDatoCmsPrimero {
            edges {
                node {
                    titulo
                    alergenos
                }
            }
        }
        segundos: allDatoCmsSegundo {
            edges {
                node {
                    titulo
                    alergenos
                }
            }
        }
        incluido: allDatoCmsIncluidomenu {
            edges {
                node {
                    incluido
                    precioMenu
                    suplemento
                }
            }
        }
    }
`

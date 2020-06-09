import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import Title from '../components/Title'
import Img from 'gatsby-image'

const restaurante = ({ data }) => {
    return (
        <Layout>
            <StyledBackgroundSection
                className="contacto__hero"
                home={false}
                image={data.restaurante.childImageSharp.fluid}
                alt="imagen de vista restaurante"
            />
            <section className="restaurante section">
                <div className="restaurante__container">
                    <Title title="Restaurante" message="Salamanca" />
                    <div className="restaurante__content">
                        <div className="restaurante__history">
                            <h2 className="restaurante__heading">
                                Los comienzos
                            </h2>
                            <p className="restaurante__paragraph">
                                En 1991 la familia Millet-García adquirieron el
                                bajo ubicado en la playa de San Antonio, cerca
                                de la Plaza de la Constitución. Al principiio no
                                fue facil, pero consiguieron levantar el
                                negocio. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eius, ratione doloribus iusto
                                illo temporibus vitae quod cupiditate nisi
                                beatae similique. Sequi ducimus obcaecati
                                accusamus esse fugit, cumque odit quod
                                reiciendis.
                            </p>
                            <Img
                                fluid={data.paellas.childImageSharp.fluid}
                                className="restaurante__image"
                            />

                            <h2 className="restaurante__heading">Hoy en día</h2>
                            <p className="restaurante__paragraph">
                                En la actualidad es uno de los mejores
                                restaurantes de la playa de Cullera, donde
                                puedes degustar de unos esquisitos manjares del
                                mediterráneo. Litros y litros de sangría salen
                                de nuestro "Copón" que son preparados con cariño
                                con los mejores materiales. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Eius,
                                ratione doloribus iusto illo temporibus vitae
                                quod cupiditate nisi beatae similique. Sequi
                                ducimus obcaecati accusamus esse fugit, cumque
                                odit quod reiciendis.
                            </p>
                            <Img
                                fluid={data.sangria.childImageSharp.fluid}
                                className="restaurante__image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default restaurante

export const query = graphql`
    query {
        restaurante: file(relativePath: { eq: "restaurante.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        paellas: file(relativePath: { eq: "paellas.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        sangria: file(relativePath: { eq: "sangria.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

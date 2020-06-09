import React from 'react'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'

export const getInfo = graphql`
    query {
        categories: allDatoCmsCategorie(
            filter: { locale: { eq: "es" } }
            sort: { fields: orden }
        ) {
            edges {
                node {
                    slug
                    category
                    imagencategory {
                        fluid {
                            ...GatsbyDatoCmsFluid_noBase64
                        }
                    }
                }
            }
        }
    }
`

const TagList = () => {
    const response = useStaticQuery(getInfo)
    const categories = response.categories.edges

    return (
        <section className="tag-list section">
            <Title title="Nuestra" message="Carta" />
            <div className="tag-list__center">
                {categories.map(item => {
                    return (
                        <div className="tag-list__item" key={item.node.slug}>
                            <AniLink
                                fade
                                to={`/carta/${item.node.slug}`}
                                alt={`link a ${item.node.category}`}
                                className="tag-list__link"
                            >
                                <Img
                                    fluid={item.node.imagencategory.fluid}
                                    className="tag-list__image"
                                />
                                <div className="tag-list__text">
                                    {item.node.category}
                                </div>
                            </AniLink>
                        </div>
                    )
                })}
            </div>

            <AniLink
                fade
                to="/contacto"
                className="btn btn--section"
                alt="button to reserva"
            >
                Reserva
            </AniLink>
        </section>
    )
}

export default TagList

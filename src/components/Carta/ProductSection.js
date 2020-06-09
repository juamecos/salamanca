import React from 'react'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import ProductCard from './ProductCard'

export const getCategories = graphql`
    query {
        categories: allDatoCmsCategorie(
            filter: { locale: { eq: "es" } }
            sort: { fields: orden }
        ) {
            edges {
                node {
                    slug
                    category
                }
            }
        }
    }
`

const ProductSection = ({ data, location }) => {
    const response = useStaticQuery(getCategories)
    const categories = response.categories.edges
    const pathName = location.pathname.split('/')[2]
    const flt = categories.filter(item => item.node.slug === pathName)
    const category = flt[0].node.category

    return (
        <section className="product">
            <div className="product__center">
                <Title title={category} />

                <ul className="product__list">
                    {data.edges.map((item, index) => {
                        return (
                            <ProductCard
                                data={item.node}
                                key={index}
                                location={location}
                            />
                        )
                    })}
                </ul>
                <AniLink
                    fade
                    to="/carta"
                    alt={`link a Carta`}
                    className="btn btn--section"
                >
                    Volver a Carta
                </AniLink>
            </div>
        </section>
    )
}

export default ProductSection

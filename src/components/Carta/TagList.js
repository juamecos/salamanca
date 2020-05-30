import React from 'react'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const TagList = () => {
    const response = useStaticQuery(getTags)
    const tags = response.allTags.edges

    return (
        <section className="tag-list section">
            <Title title="Nuestra" message="Carta" />
            <div className="tag-list__center">
                {tags.map(({ node }) => {
                    return (
                        <div className="tag-list__item" key={node.apiKey}>
                            <AniLink
                                to={`/carta/${node.apiKey}`}
                                alt={`link a ${node.apiKey}`}
                                className="tag-list__link"
                            >
                                {node.name}
                            </AniLink>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TagList

export const getTags = graphql`
    query MyQuery {
        allTags: allDatoCmsModel(sort: { order: ASC, fields: name }) {
            edges {
                node {
                    name
                    apiKey
                }
            }
        }
    }
`

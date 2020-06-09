import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import TagList from '../components/Carta/TagList'

const carta = ({ data }) => {
    return (
        <Layout>
            <StyledBackgroundSection
                className="cartaHero"
                home={false}
                image={data.carta.childImageSharp.fluid}
                alt="imagen de fondo chica lee carta"
            />
            <TagList />
        </Layout>
    )
}

export default carta

export const query = graphql`
    query {
        carta: file(relativePath: { eq: "carta.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

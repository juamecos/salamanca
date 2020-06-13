import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import TagList from '../components/Carta/TagList'
import SEO from '../components/SEO'

//Carta is rendering tag-lists. Data is taken as props from Template pulled from DatoCMS and passes data to Tag_List

const carta = ({ data }) => {
    return (
        <Layout>
            <SEO title="Carta" />
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
                fluid(quality: 90, maxWidth: 1900) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

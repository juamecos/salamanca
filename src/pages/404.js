import React from 'react'
import Layout from '../components/Layout'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
const error = ({ data }) => {
    return (
        <Layout>
            <SEO title="Error" />
            <StyledBackgroundSection
                className="styledHero"
                home={true}
                image={data.error.childImageSharp.fluid}
                style={{
                    background: 'none;',
                    opacity: '0;',
                }}
            >
                <Banner
                    title="¿Te sientes perdido?"
                    info="Esta página no existe"
                >
                    <a
                        href="/"
                        className="btn btn--hero"
                        alt="button to inicio"
                    >
                        Vuelve al inicio
                    </a>
                </Banner>
            </StyledBackgroundSection>
        </Layout>
    )
}

export default error

export const query = graphql`
    query ErrorPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        error: file(relativePath: { eq: "errorImage.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

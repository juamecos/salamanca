import React from 'react'
import '../styles/main.scss'
import Layout from '../components/Layout'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import About from '../components/Home/SectionAbout'
import Especialidades from '../components/Home/SectionEspecialidades'
import StyledParallaxComponent from '../components/ParallaxComponent'
import SEO from '../components/SEO'

export default ({ data }) => (
    <Layout>
        <SEO title="Inicio" description="this is description" />
        <StyledBackgroundSection
            className="styledHero"
            home={true}
            image={data.hero.childImageSharp.fluid}
        >
            <Banner
                title={data.site.siteMetadata.title}
                info={data.site.siteMetadata.description}
            >
                <a
                    href="/contacto"
                    className="btn btn--hero"
                    alt="button to book"
                >
                    Reserva
                </a>
            </Banner>
        </StyledBackgroundSection>
        <About />

        <StyledParallaxComponent clasName="parallax"></StyledParallaxComponent>

        <Especialidades />
    </Layout>
)

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        hero: file(relativePath: { eq: "playa.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

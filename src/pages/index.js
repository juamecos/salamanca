import React from 'react'
import '../styles/main.scss'
import Layout from '../components/Layout'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import About from '../components/Home/SectionAbout'
import Especialidades from '../components/Home/SectionEspecialidades'
import StyledParallaxComponent from '../components/ParallaxComponent'

export default ({ data }) => (
    <Layout>
        <StyledBackgroundSection className="styledHero" home={true}>
            <Banner
                title={data.site.siteMetadata.title}
                info={data.site.siteMetadata.description}
            >
                <button className="btn btn--hero" alt="botón a reservas">
                    Reserva
                </button>
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
    }
`

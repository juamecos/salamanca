import React from 'react'
import '../styles/main.scss'
import Layout from '../components/Layout'
import StyledBackgroundSection from '../components/StyledBackgroundSection'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'

import About from '../components/Home/SectionAbout'
import Especialidades from '../components/Home/SectionEspecialidades'

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
        <Especialidades />
    </Layout>
)

// TODO query for metadata title, info
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

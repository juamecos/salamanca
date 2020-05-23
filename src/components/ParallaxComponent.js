import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const ParallaxComponent = ({ className, children }) => (
    <StaticQuery
        query={graphql`
            query {
                parallaxImage: file(
                    relativePath: { eq: "parallax-1920x600.jpg" }
                ) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            const imageData = data.parallaxImage.childImageSharp.fluid
            return (
                <BackgroundImage
                    // Tag="section"
                    className={className}
                    fluid={imageData}
                >
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

const StyledParallaxComponent = styled(ParallaxComponent)`
    min-height: 40vh;
    opacity: 1 !important; /* default 0.99 so filter won't work*/
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default StyledParallaxComponent

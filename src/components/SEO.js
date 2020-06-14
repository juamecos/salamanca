import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const getData = graphql`
    query {
        site {
            siteMetadata {
                siteTitle: title
                siteDesc: description
                author
                siteUrl
                image
                twitterUsername
            }
        }
    }
`
//TODO create SEO for all pages with proper data
const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(getData)

    const {
        siteDesc,
        siteTitle,
        siteURL,
        image,
        twitterUsername,
        author,
    } = site.siteMetadata
    return (
        <Helmet
            htmlAttributes={{ lang: 'es' }}
            title={`${title} | ${siteTitle}`}
        >
            <meta name="description" content={description || siteDesc} />
            <meta name="image" content={image} />
            <meta name="author" content={author}></meta>

            {/* facebook cards */}
            <meta name="og:url" content={siteURL} />
            <meta name="og:url" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDesc} />
            <meta property="og:image" content={`${siteURL}${image}`} />
            <meta property="og:image:width" content={'400'} />
            <meta property="og:image:height" content={'300'} />

            {/* twittercard */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDesc} />
            <meta name="twitter:image" content={`${siteURL}${image}`} />
        </Helmet>
    )
}

export default SEO

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Rte. Salamanca`,
        siteUrl: `https://www.gatsbyjs.org`,
        description: `Cocina mediterránea a la orilla del mar. Especialidad en zarzuelas, arroces y mariscos.`,
        twitterUsername: '@JuanJosMenaCost',
        image: '/hero-image.jpg',
        siteUrl: 'https://gatsby-contentful-portfolio-blog.netlify.app/',
    },

    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Montserrat`,
                        variants: [`400`, `700`],
                    },
                    {
                        family: `Roboto`,
                        variants: [`400`, `700`],
                    },
                    {
                        family: `Montez`,
                        variants: [`400`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                // You can find your read-only API token under the Settings > API tokens
                // section of your administrative area:
                apiToken: process.env.YOUR_READONLY_API_TOKEN,

                // If you are working on development/staging environment, you might want to
                // preview the latest version of records instead of the published one:
                previewMode: false,

                // Disable automatic reloading of content when some change occurs on DatoCMS:
                disableLiveReload: false,

                // Custom API base URL (most don't need this)
                apiUrl: 'https://site-api.datocms.com',

                // Setup locale fallbacks
                // In this example, if some field value is missing in Italian, fall back to English
                localeFallbacks: {
                    en: ['es'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-leaflet',
            options: {
                linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-transition-link`,
    ],
}

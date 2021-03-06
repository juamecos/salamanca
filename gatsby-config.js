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
        title: `Restaurante Salamanca`,
        description: `Cocina mediterránea a la orilla del mar. Especialidad en mariscadas, zarzuelas, arroces y tapas. Fundado en 1991.`,
        author: '@JuanJosMenaCost',
        twitterUsername: '@JuanJosMenaCost',
        image: '/hero-image.jpg',
        siteUrl: 'https://www.restaurantesalamancacullera.com/',
    },

    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
                // ignore: `**/*.svg`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/categorias`,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Open Sans`,
                        variants: [`600`],
                    },
                    {
                        family: `Roboto`,
                        variants: [`500`],
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
                apiToken: process.env.DATO_API_TOKEN,

                // If you are working on development/staging environment, you might want to
                // preview the latest version of records instead of the published one:
                previewMode: false,

                // Disable automatic reloading of content when some change occurs on DatoCMS:
                disableLiveReload: false,

                // Custom API base URL (most don't need this)
                apiUrl: 'https://site-api.datocms.com',

                // Setup locale fallbacks
                // In this example, if some field value is missing in Italian, fall back to English
                // localeFallbacks: {
                //     en: ['es'],
                // },
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
                    include: /\.inline\.svg$/,
                    omitKeys: [
                        'xmlnsDc',
                        'xmlnsCc',
                        'xmlnsRdf',
                        'xmlnsSvg',
                        'xmlnsSodipodi',
                        'xmlnsInkscape',
                        'sodipodiDocname',
                        'inkscapeVersion',
                    ],
                },
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.restaurantesalamancacullera.com/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Restaurante Salamanca`,
                short_name: `Restaurante Salamanca`,
                start_url: `/`,
                background_color: `#27496d`,
                theme_color: `#27496d`,
                display: `standalone`,
                cache_busting_mode: 'none',
                icon: `src/images/logo-512x512.svg`,
            },
        },
        `gatsby-plugin-offline`,
        // {
        //     resolve: 'gatsby-plugin-offline',
        //     options: {
        //         precachePages: [`/`, `/carta/*`],
        //         workboxConfig: {
        //             globPatterns: ['**/*'],
        //         },
        //     },
        // },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-transition-link`,
    ],
}

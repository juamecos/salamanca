const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data } = await graphql(`
        query {
            allDatoCmsCategorie {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    data.allDatoCmsCategorie.edges.forEach(({ node }) => {
        const slug = node.slug
        createPage({
            path: `carta/${slug}`,
            component: path.resolve('src/templates/tagList-template.js'),
            context: {
                slug: `${slug}`,
            },
        })
    })
}

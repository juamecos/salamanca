const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data } = await graphql(`
        query {
            allDatoCmsModel {
                edges {
                    node {
                        name
                        apiKey
                    }
                }
            }
        }
    `)

    data.allDatoCmsModel.edges.forEach(({ node }) => {
        const slug = node.apiKey
        createPage({
            path: `carta/${slug}`,
            component: path.resolve('src/templates/tagList-template.js'),
            context: {
                slug: `${slug}s`,
            },
        })
    })
}

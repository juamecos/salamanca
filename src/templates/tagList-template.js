import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Products from '../components/Carta/Products'
import Allergens from '../components/Allergens'
import SEO from '../components/SEO'
// This component renders the Products (Dishes) and Allergens
// Data is pulled from DatoCMS pased to children as props

const Template = ({ data, location }) => {
    const path = location.pathname
    const title = path
        .split('/')[2]
        .replace('-', ' ')
        .replace('-', ' ')
        .toUpperCase()
    return (
        <Layout>
            <SEO title={title} />
            <Products data={data} location={location} />
            <Allergens />
        </Layout>
    )
}

export const query = graphql`
    query {
        tapas: allDatoCmsTapa(sort: { fields: orden }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    slug
                }
            }
        }
        entrantes: allDatoCmsEntrante(sort: { fields: orden }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    slug
                }
            }
        }
        ensaladas: allDatoCmsEnsalada(sort: { fields: orden }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    slug
                }
            }
        }
        carne: allDatoCmsCarne(sort: { fields: orden }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    slug
                }
            }
        }
        pescado: allDatoCmsPescado {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    slug
                }
            }
        }
        arroces: allDatoCmsArroz(sort: { fields: orden }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    slug
                }
            }
        }
        postres: allDatoCmsPostre {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    slug
                }
            }
        }
        bodega: allDatoCmsBodega {
            edges {
                node {
                    tipo
                    titulo
                    precio
                    descripcion
                    slug
                }
            }
        }
    }
`

export default Template

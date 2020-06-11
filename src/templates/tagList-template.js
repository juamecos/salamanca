import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Products from '../components/Carta/Products'
import Allergens from '../components/Allergens'

const Template = ({ data, location }) => {
    return (
        <Layout>
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

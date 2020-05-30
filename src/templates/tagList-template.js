import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Products from '../components/Carta/Products'

const Template = ({ data, location }) => {
    return (
        <Layout>
            <Products data={data} location={location} />
        </Layout>
    )
}

export const query = graphql`
    query section {
        arroz: allDatoCmsArroz(filter: { locale: { eq: "es" } }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    precioPorPersona
                    minimo2Personas
                }
            }
        }
        carne: allDatoCmsCarne(filter: { locale: { eq: "es" } }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    precioPorPersona
                    minimo2Personas
                }
            }
        }
        ensalada: allDatoCmsEnsalada(filter: { locale: { eq: "es" } }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    precioPorPersona
                    minimo2Personas
                }
            }
        }
        entrante: allDatoCmsEntrante(filter: { locale: { eq: "es" } }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    precioPorPersona
                    minimo2Personas
                }
            }
        }
        marisco: allDatoCmsMarisco(filter: { locale: { eq: "es" } }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    precioPorPersona
                    minimo2Personas
                }
            }
        }
        pescado: allDatoCmsPescado(filter: { locale: { eq: "es" } }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    precioPorPersona
                    minimo2Personas
                }
            }
        }
        zarzuela: allDatoCmsZarzuela(filter: { locale: { eq: "es" } }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    precioPorPersona
                    minimo2Personas
                }
            }
        }
        postre: allDatoCmsPostre(filter: { locale: { eq: "es" } }) {
            edges {
                node {
                    titulo
                    precio
                    descripcion
                    alergenos
                    precioPorPersona
                    minimo2Personas
                }
            }
        }
    }
`

export default Template

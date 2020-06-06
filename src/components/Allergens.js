import React from 'react'
import Gluten from '../images/alergenos/gluten.inline.svg'
import Crustaceos from '../images/alergenos/crustaceos.inline.svg'
import Huevo from '../images/alergenos/huevo.inline.svg'
import Pescado from '../images/alergenos/pescado.inline.svg'
import Cacahuetes from '../images/alergenos/cacahuete.inline.svg'
import Lacteos from '../images/alergenos/lacteos.inline.svg'
import Frutos from '../images/alergenos/frutos.inline.svg'
import Apio from '../images/alergenos/apio.inline.svg'
import Mostaza from '../images/alergenos/mostaza.inline.svg'
import Altramuces from '../images/alergenos/altramuces.inline.svg'
import Moluscos from '../images/alergenos/moluscos.inline.svg'
import Sesamo from '../images/alergenos/sesamo.inline.svg'
import Sulfitos from '../images/alergenos/sulfitos.inline.svg'
import Soja from '../images/alergenos/soja.inline.svg'

const props = {
    viewBox: '0 0 263 372',
    width: '80',
    height: '80',
}

export const AllergensComponents = [
    <Gluten {...props} />,
    <Crustaceos {...props} />,
    <Huevo {...props} />,
    <Pescado {...props} />,
    <Cacahuetes {...props} />,
    <Lacteos {...props} />,
    <Frutos {...props} />,
    <Apio {...props} />,
    <Mostaza {...props} />,
    <Altramuces {...props} />,
    <Moluscos {...props} />,
    <Sesamo {...props} />,
    <Sulfitos {...props} />,
    <Soja {...props} />,
]

// const getPNGS = graphql`
//     query {
//         pngs: allFile(
//             filter: {
//                 relativeDirectory: { eq: "alergenos" }
//                 extension: { eq: "png" }
//             }
//         ) {
//             edges {
//                 node {
//                     childImageSharp {
//                         fluid {
//                             ...GatsbyImageSharpFluid_tracedSVG
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

const Allergens = () => {
    // const allergenPGNS = useStaticQuery(getPNGS)
    // const PNGS = allergenPGNS.pngs.edges
    // console.log(PNGS)

    return (
        <ul className="allergen__list">
            {AllergensComponents.map((item, index) => (
                <li className="allergen__item" key={index}>
                    {item}
                </li>
            ))}

            {/* {PNGS.map((item, index) => {
                return (
                    <li className="allergen__item" key={index}>
                        <Img
                            fluid={item.node.childImageSharp.fluid}
                            className="allergen__item allergen__item--image"
                        />
                    </li>
                )
            })} */}
            {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
        </ul>
    )
}

export default Allergens

// export const query = graphql`
//     query {
//         allergenData: allFile(
//             filter: {
//                 relativeDirectory: { eq: "alergenos" }
//                 extension: { eq: "png" }
//             }
//         ) {
//             totalCount
//             edges {
//                 node {
//                     childImageSharp {
//                         fluid {
//                             src
//                             originalName
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

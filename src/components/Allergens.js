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

const propierties = {
    viewBox: '0 0 263 372',
    width: '80',
    height: '80',
}

export const AllergensComponents = [
    <Gluten {...propierties} />,
    <Crustaceos {...propierties} />,
    <Huevo {...propierties} />,
    <Pescado {...propierties} />,
    <Cacahuetes {...propierties} />,
    <Lacteos {...propierties} />,
    <Frutos {...propierties} />,
    <Apio {...propierties} />,
    <Mostaza {...propierties} />,
    <Altramuces {...propierties} />,
    <Moluscos {...propierties} />,
    <Sesamo {...propierties} />,
    <Sulfitos {...propierties} />,
    <Soja {...propierties} />,
]

const Allergens = () => {
    return (
        <ul className="allergen__list">
            {AllergensComponents.map((item, index) => (
                <li className="allergen__item" key={index}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default Allergens

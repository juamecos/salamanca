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

const properties = {
    viewBox: '0 0 263 263',
    width: '50',
    height: '50',
}

export const AllergensComponents = [
    <Gluten {...properties} />,
    <Crustaceos {...properties} />,
    <Huevo {...properties} />,
    <Pescado {...properties} />,
    <Cacahuetes {...properties} />,
    <Lacteos {...properties} />,
    <Frutos {...properties} />,
    <Apio {...properties} />,
    <Mostaza {...properties} />,
    <Altramuces {...properties} />,
    <Moluscos {...properties} />,
    <Sesamo {...properties} />,
    <Sulfitos {...properties} />,
    <Soja {...properties} />,
]

const Allergens = () => {
    return (
        <ul className="allergen__list">
            {AllergensComponents.map((item, index) => (
                <div className="allergen__item" key={index}>
                    <div className="allergen__svg">
                        {item}
                        <div className="allergen__text">
                            {item.type.name.split('Inline')}
                        </div>
                    </div>
                </div>
            ))}
        </ul>
    )
}

export default Allergens

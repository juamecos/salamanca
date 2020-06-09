import React from 'react'
import Allergens from '../../components/Allergens'

const ProductCard = ({ data, location }) => {
    const slung = location.pathname
    const { titulo, descripcion, precio, alergenos } = data

    // if not bodega alergenos exist then get the numbers from the string and convert them in numbers if not null
    const alergenosNumbers =
        slung !== '/carta/bodega'
            ? alergenos.map(item => parseInt(item.split('-')[0]))
            : null
    return (
        <li className="product__card" key={titulo}>
            <div className="product__title">{titulo}</div>
            {descripcion ? (
                <div className="product__description">{descripcion}</div>
            ) : null}
            <div className="product__price">{precio}</div>
            {alergenos ? (
                <div className="product__allergens">
                    {alergenosNumbers.map((item, index) => (
                        <div className="product__allergen" key={index + 1}>
                            {item !== 0
                                ? Allergens().props.children[item - 1]
                                : null}
                        </div>
                    ))}
                </div>
            ) : null}
        </li>
    )
}

export default ProductCard

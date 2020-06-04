import React from 'react'
// import Gluten from '../images/gluten.inline.svg'

const ProductCard = ({ data }) => {
    const { titulo, descripcion, precio, alergenos } = data
    const alergenosNumbers = alergenos.map(item => item.charAt(0)) // Get the first character

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
                        <div className="product__allergen" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            ) : null}
        </li>
    )
}

export default ProductCard

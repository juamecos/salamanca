import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const ProductCard = ({ data }) => {
    const {
        titulo,
        descripcion,
        precio,
        precioPorPersona,
        minimo2Personas,
        alergenos,
    } = data

    return (
        <li className="product_item" key={titulo}>
            <details className="product__details">
                <summary className="product__summary">
                    <h4>
                        {titulo} <FaChevronDown />
                    </h4>
                </summary>
                <div className="product__info">
                    <h2>{descripcion}</h2>
                    <div className="product__price">
                        {precioPorPersona ? (
                            <div>
                                <span>Precio por persona</span>
                                <span>{precio}</span>
                            </div>
                        ) : (
                            <span>{precio}</span>
                        )}
                    </div>
                    <div className="product__min2">
                        {minimo2Personas ? 'Min. 2 personas' : null}
                    </div>
                    <div>
                        {alergenos.map((alergeno, index) => {
                            return <h6 key={index}>{alergeno}</h6>
                        })}
                    </div>
                    <FaChevronUp />
                </div>
            </details>
        </li>
    )
}

export default ProductCard

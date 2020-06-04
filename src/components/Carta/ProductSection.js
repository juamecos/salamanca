import React from 'react'
import Title from '../Title'

import ProductCard from './ProductCard'

const ProductSection = ({ data }) => {
    console.log('form ProdSec', data)

    return (
        <section className="product">
            <div className="product__center">
                <Title title="Nuestros" message="arroces" />

                {data.edges.map(item => (item.tipo ? item.tipo : null))}

                <ul className="product__list">
                    {data.edges.map((item, index) => {
                        return <ProductCard data={item.node} key={index} />
                    })}
                </ul>
            </div>
        </section>
    )
}

export default ProductSection

import React from 'react'
import Title from '../Title'
import { getInfo } from '../Carta/TagList'

import ProductCard from './ProductCard'

console.log('from porduct section', typeof getInfo)

const ProductSection = ({ data, location }) => {
    return (
        <section className="product">
            <div className="product__center">
                <Title title="Nuestros" />

                <ul className="product__list">
                    {data.edges.map((item, index) => {
                        return (
                            <ProductCard
                                data={item.node}
                                key={index}
                                location={location}
                            />
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default ProductSection

import React from 'react'
import ProductSection from './ProductSection'

const Products = ({ data, location }) => {
    switch (location.pathname) {
        case '/carta/arroz':
            return <ProductSection data={data.arroz} />

        case '/carta/carne':
            return <ProductSection data={data.carne} />

        case '/carta/ensalada':
            return <ProductSection data={data.ensalada} />

        case '/carta/entrante':
            return <ProductSection data={data.entrante} />

        case '/carta/marisco':
            return <ProductSection data={data.marisco} />

        case '/carta/pescado':
            return <ProductSection data={data.pescado} />

        case '/carta/postre':
            return <ProductSection data={data.postre} />

        case '/carta/zarzuela':
            return <ProductSection data={data.zarzuela} />
        default:
            return
    }
}

export default Products

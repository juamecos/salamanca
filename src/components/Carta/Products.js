import React from 'react'
import ProductSection from './ProductSection'

const Products = ({ data, location }) => {
    console.log(data)

    const {
        arroces,
        bodega,
        carne,
        ensaladas,
        entrantes,
        pescado,
        postres,
        tapas,
    } = data
    console.log(carne)

    // return <div className="test">esto es de products</div>

    switch (location.pathname) {
        case '/carta/arroces-y-paellas':
            return <ProductSection data={arroces} />
        case '/carta/carnes':
            return <ProductSection data={carne} />
        case '/carta/ensaladas':
            return <ProductSection data={ensaladas} />
        case '/carta/entrantes':
            return <ProductSection data={entrantes} />
        case '/carta/pescados-y-mariscos':
            return <ProductSection data={pescado} />
        case '/carta/postres':
            return <ProductSection data={postres} />

        case '/carta/bodega':
            return <ProductSection data={bodega} />
        case '/carta/tapas':
            return <ProductSection data={tapas} />
        default:
            return
    }
}

export default Products

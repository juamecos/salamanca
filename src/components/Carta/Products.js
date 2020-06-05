import React from 'react'
import ProductSection from './ProductSection'

const Products = ({ data, location }) => {
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

    // return <div className="test">esto es de products</div>

    switch (location.pathname) {
        case '/carta/arroces-y-paellas':
            return <ProductSection data={arroces} location={location} />
        case '/carta/carnes':
            return <ProductSection data={carne} location={location} />
        case '/carta/ensaladas':
            return <ProductSection data={ensaladas} location={location} />
        case '/carta/entrantes':
            return <ProductSection data={entrantes} location={location} />
        case '/carta/pescados-y-mariscos':
            return <ProductSection data={pescado} location={location} />
        case '/carta/postres':
            return <ProductSection data={postres} location={location} />

        case '/carta/bodega':
            return <ProductSection data={bodega} location={location} />
        case '/carta/tapas':
            return <ProductSection data={tapas} location={location} />
        default:
            return
    }
}

export default Products

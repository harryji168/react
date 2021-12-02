import React, { useState } from 'react';
import NewProductForm from './NewProductForm'

export default function ProductNewPage(props) {
    const [product, setProduct] = useState({});

    const handleProductForm = (type, val) => {
        const { title, description, price } = product;
        switch (type) {
            case 'CHANGE_TITLE':
                setProduct({
                    title: val,
                    description,
                    price
                })
                break;
            case 'CHANGE_DESCRIPTION':
                setProduct({
                    description: val,
                    title,
                    price
                })
                break;
            case 'CHANGE_PRICE':
                setProduct({
                    price: val,
                    description,
                    title: title
                })
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <NewProductForm {...props} handleProductForm={handleProductForm} product={product} />
        </div>
    )
}

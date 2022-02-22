import React from 'react'

export default function ProductDetails(props) {
    const { title, description, price, created_at, seller } = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <span>${price}</span>
            <span><strong>Created: {created_at ? created_at.toLocaleString() : ""}</strong></span>
            <strong>Seller: {seller ? seller.full_name : ""}</strong>
        </div>
    )
}


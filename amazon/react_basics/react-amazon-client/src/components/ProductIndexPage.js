import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../request'

export default function ProductIndexPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Product.all().then(data => {
            setProducts(data)
        })
    }, []);

    const deleteProduct = id => {
        setProducts(products.filter((element) => element.id !== id))
    }

    return (
        <main>
            <h1>Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <p>
                            <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
                            <button className="ui right floated red button" onClick={() => deleteProduct(product.id)} >
                                Delete
                            </button>
                            <br />
                            <small>Price: {product.price} </small>
                            <br />
                            <small>Created at: {new Date(product.created_at).toLocaleDateString()}</small>
                            <br />
                            <small>Seller: {product.seller.full_name}</small>
                            <br />
                        </p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

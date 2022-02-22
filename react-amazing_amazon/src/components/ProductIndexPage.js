import React, { Component } from 'react';
import NewProductForm from './NewProductForm';


class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "id": 117,
                    "title": "Tophat jones",
                    "price": 5,
                    "seller": {
                        "id": 33,
                        "first_name": "Keanu",
                        "last_name": "Murazik",
                        "full_name": "Keanu Murazik"
                    }
                },
                {
                    "id": 177,
                    "title": "Morty smith",
                    "price": 6,
                    "seller": {
                        "id": 19,
                        "first_name": "Ward",
                        "last_name": "Cartwright",
                        "full_name": "Ward Cartwright"
                    }
                },
                {
                    "id": 65,
                    "title": "Beth's mytholog",
                    "price": 8,
                    "seller": {
                        "id": 9,
                        "first_name": "Neva",
                        "last_name": "Trantow",
                        "full_name": "Neva Trantow"
                    }
                },
                {
                    "id": 41,
                    "title": "Snowball",
                    "price": 3,
                    "seller": {
                        "id": 48,
                        "first_name": "Isaac",
                        "last_name": "Spinka",
                        "full_name": "Isaac Spinka"
                    }
                },
                {
                    "id": 173,
                    "title": "Jerry smith",
                    "price": 5,
                    "seller": {
                        "id": 44,
                        "first_name": "Anibal",
                        "last_name": "Ondricka",
                        "full_name": "Anibal Ondricka"
                    }
                },
                {
                    "id": 300,
                    "title": "Beta vii",
                    "price": 4,
                    "seller": {
                        "id": 12,
                        "first_name": "Abbey",
                        "last_name": "Watsica",
                        "full_name": "Abbey Watsica"
                    }
                },
                {
                    "id": 301,
                    "title": "Rick sanchez",
                    "price": 10,
                    "seller": {
                        "id": 23,
                        "first_name": "Gregoria",
                        "last_name": "Koepp",
                        "full_name": "Gregoria Koepp"
                    }
                }
            ]
        };
        this.createProduct = this.createProduct.bind(this);
    }
    createProduct(params) {
        this.setState((state) => {
            return {
                products: [
                    {
                        ...params,
                        created_at: new Date(),
                        id: Math.max(...state.products.map((product) => product.id)) + 1,
                        seller: { full_name: "Admin User" }
                    },
                    ...state.products
                ]
            };
        });
    }
    deleteProduct(id) {
        // id = 117 
        this.setState({ products: this.state.products.filter((element) => element.id !== id) });
    }
    render() {
        return (
            <main>
                <h1>Products</h1>
                <ul>
                    {this.state.products.map((product, index) => (
                        <li key={index}>
                            <p>
                                <b>{product.title}</b>
                                <button className="ui right floated red button" onClick={() => this.deleteProduct(product.id)} >
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
                <NewProductForm onCreateProduct={this.createProduct} />
            </main>
        );
    }
}

export default ProductIndexPage;
import React from 'react';
import { Product } from '../request'

function NewProductForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        // const formData = new FormData(currentTarget);

        // Product.create({
        //     title: formData.get('title'),
        //     price: formData.get('price'),
        //     description: formData.get("description")
        // }).then(data => {
        //     const pid = data.id;
        //     props.history.push(`/products/${pid}`)
        // })
        Product.create({
            title: props.product.title,
            price: props.product.price,
            description: props.product.description
        }).then(data => {
            const pid = data.id;
            props.history.push(`/products/${pid}`)
        })
    }
    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder="Please Enter Title"
                    value={props.product.title}
                    onChange={event => {
                        props.handleProductForm("CHANGE_TITLE", event.currentTarget.value)
                    }}
                />
            </div>
            <div className="field">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" placeholder="Please Enter Title"
                    value={props.product.description}
                    onChange={event => {
                        props.handleProductForm("CHANGE_DESCRIPTION", event.currentTarget.value)
                    }}
                />
            </div>
            <div className="field">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" placeholder="Please Enter Price"
                    value={props.product.price}
                    onChange={event => {
                        props.handleProductForm("CHANGE_PRICE", event.currentTarget.value)
                    }}
                />
            </div>
            <button className="ui button" type="submit">
                Submit
            </button>
        </form>
    );
}

export default NewProductForm;
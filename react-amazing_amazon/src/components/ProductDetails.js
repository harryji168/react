import React from 'react';
function ProductDetails(props) {
    return (
        <div>
            <h2>Title: {props.title}</h2>
            <p>Description:
                {props.description} <br />
            </p>
            <h4>Price: ${props.price}</h4>
            <h5>Create Date: {new Date(props.created_at).toLocaleDateString()}</h5>
            <p>
                <small>Seller: {props.seller.full_name} </small>
            </p>
        </div>
    );
}

export default ProductDetails;

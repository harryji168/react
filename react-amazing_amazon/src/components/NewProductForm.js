import React from 'react';

function NewProductForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        props.onCreateProduct({
            title: formData.get('title'),
            price: formData.get('price')
        });
        currentTarget.reset();
    }
    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder="Please Enter Title" />
            </div>
            <div className="field">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" placeholder="Please Enter Price" />
            </div>
            <button className="ui button" type="submit">
                Submit
            </button>
        </form>
    );
}

export default NewProductForm;

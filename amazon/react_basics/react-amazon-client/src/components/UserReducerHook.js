import React, { useReducer, useState } from 'react';

const formDataReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_TITLE":
            return { title: val, description: state.description, price: state.price }
        case "CHANGE_DESCRIPTION":
            return { description: val, title: state.title, price: state.price }
        case "CHANGE_PRICE":
            return { price: val, description: state.description, title: state.title }
        default:
            break;
    }
}

export default function UserReducerHook() {
    const [product, setProduct] = useState({});
    const [fromState, dispatch] = useReducer(formDataReducer, { title: "this is title", description: "this is description", price: 2 })
    return (
        <form>
            <div>
                <input type="text" name="title" id="title" onChange={event => {
                    dispatch({
                        type: "CHANGE_TITLE",
                        val: event.currentTarget.value
                    })
                }} />
            </div>
            <div>
                <input type="text" name="description" id="description" onChange={event => {
                    dispatch({
                        type: "CHANGE_DESCRIPTION",
                        val: event.currentTarget.value
                    })
                }} />
            </div>
            <div>
                <input type="text" name="price" id="price" onChange={event => {
                    dispatch({
                        type: "CHANGE_PRICE",
                        val: event.currentTarget.value
                    })
                }} />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

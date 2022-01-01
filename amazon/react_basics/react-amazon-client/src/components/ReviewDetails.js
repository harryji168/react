import React from 'react';
import StarRating from './StarRating';

export default function ReviewDetails(props) {
    return (
        <p>
            <strong>Rating: {props.rating}</strong>
            <br />
            {props.body}
            <br />
            {/* Created at: {props.created_at.toString()} */}
            <br />
            Created by: {props.full_name}
            <StarRating max={5} current={props.rating} />
            <button className="ui right floated red button" onClick={() => {
                props.onDeleteClick(props.id)
            }}>
                Delete
            </button>
        </p>
    )
}

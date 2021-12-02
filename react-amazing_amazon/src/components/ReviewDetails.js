import React from 'react';
import StarRating from './StarRating'

function ReviewDetails(props) {
    return (
        <div className="ui segment ReviewDetails">
            <div className="ui header">Review Details</div>
            <p>
                {props.body} <br />
            </p>
            <p>
                <small>rating: {props.rating}</small>
                <small>Reviewer: {props.full_name}</small>
                <small>Create Date: {props.created_at}</small>
                <button className="ui right floated red button" onClick={() => {
                    props.onDeleteClick(props.id)
                }}>
                    Delete
                </button>

            </p>
            <StarRating max={5} current={props.rating} />
        </div>
    );
}

export default ReviewDetails;
import React from 'react';
import ReviewDetails from './ReviewDetails';

function ReviewList(props) {
    return (
        <ul className="ReviewList">
            {props.reviews.map((review) => (
                <li className="ui segment" key={review.id}>
                    <ReviewDetails
                        {...review}
                        onDeleteClick={props.onReviewDelete}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ReviewList;
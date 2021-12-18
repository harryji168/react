import React from 'react'
import ReviewDetails from './ReviewDetails'

export default function ReviewList(props) {
    return (
        <>
            <h4>Review List:</h4>
            <ul>
                {props.reviewList ? props.reviewList.map((review, i) => {
                    return <li key={review.id}>
                        <ReviewDetails
                            // rating={e.rating}
                            // body={e.body}
                            // created_at={e.created_at}
                            // full_name={e.full_name}
                            {...review}
                            onDeleteClick={props.onReviewDelete}
                        />
                    </li>
                }) : null}
            </ul>
        </>
    )
}

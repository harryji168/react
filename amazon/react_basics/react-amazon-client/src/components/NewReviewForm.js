import React from 'react'

export default function NewReviewForm(props) {
    const { onChange, handleAddNewReview, review } = props;

    const handleSubmit = event => {
        event.preventDefault();
        handleAddNewReview(review);
        // event.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>New Review Form</h3>
            <div>
                <label htmlFor="body">body</label>
                <input type="text" name="body" id="body"
                    onChange={(event) => onChange("CHANGE_BODY", event.currentTarget.value)}
                    value={review.body}
                />
            </div>
            <div>
                <label htmlFor="rating">rating</label>
                <input type="text" name="rating" id="rating"
                    onChange={(event) => onChange("CHANGE_RATING", event.currentTarget.value)}
                    value={review.rating}
                />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}

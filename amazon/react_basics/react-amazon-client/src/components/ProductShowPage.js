import React, { useState, useEffect } from 'react'
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import { Product } from '../request';
import NewReviewForm from './NewReviewForm'

export default function ProductShowPage(props) {
    const [product, setProduct] = useState({})
    const [review, setReview] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const pid = props.match.params.id;
        Product.one(pid).then(data => {
            const { reviews, ...rest } = data;
            setProduct({ ...rest });
            setReviews(reviews);
        })
    }, []);

    const deleteReview = reviewId => {
        setProduct(
            reviews.filter((review) => review.id !== reviewId)
        )
    }

    const handleReviewForm = (type, val) => {
        if (type === "CHANGE_BODY") {
            const { body, ...rest } = this.state.review;
            setReview({
                body: val,
                ...rest
            })
        } else {
            const { rating, ...rest } = this.state.review;
            setReview({
                rating: val,
                ...rest
            })
        }
    }
    const handleAddNewReview = (params) => {
        setReviews([
            ...this.state.reviews,
            {
                id: 123,
                ...params
            }
        ])
    }
    return (
        <div>
            <ProductDetails
                title={product.title}
                description={product.description}
                created_at={product.created_at}
                seller={product.seller}
                price={product.price}
            />
            <ReviewList reviewList={reviews} onReviewDelete={deleteReview} />
            <NewReviewForm onChange={handleReviewForm} review={review} handleAddNewReview={handleAddNewReview} />
        </div>
    )
}



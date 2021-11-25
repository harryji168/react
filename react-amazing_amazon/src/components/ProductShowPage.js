import React, { Component } from 'react'
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';


class ProductShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 102,
                title: 'Snowboard Boots X-L',
                description: 'Crazy extreme boots of snow & board.',
                created_at: '2014-June-25',
                seller: {
                    full_name: 'Jimbo McStreme'
                },
                price: 200,
                reviews: [
                    {
                        id: 225,
                        rating: 3,
                        body:
                            'Synth park swag. Sustainable kickstarter synth biodiesel lomo 8-bit trust fund. Dreamcatcher ugh slow-carb photo booth whatever chicharrones mumblecore bitters. Lumbersexual helvetica tacos pop-up. Salvia chillwave sartorial five dollar toast.',
                        created_at: '2014-June-27',
                        reviewer: {
                            full_name: 'Hipster Dude'
                        }
                    },
                    {
                        id: 224,
                        rating: 4,
                        body:
                            "Keffiyeh tofu typewriter butcher phlogiston. You probably haven't heard of them neutra gastropub ennui lo-fi ethical health. Church-key neutra meditation. Literally ramps art party phlogiston kale chips loko messenger bag thundercats. Xoxo pickled letterpress park selvage.",
                        created_at: '2014-June-26',
                        reviewer: {
                            full_name: 'Sally Tofupants'
                        }
                    },
                    {
                        id: 223,
                        rating: 3,
                        body:
                            "Vegan seitan you probably haven't heard of them mixtape disrupt etsy dreamcatcher. Flannel beard kombucha ramps. Chillwave meh actually waistcoat cray hashtag wolf knausgaard. Microdosing intelligentsia raw denim dreamcatcher gentrify wayfarers direct trade. Everyday tousled biodiesel pork belly.",
                        created_at: '2014-June-26',
                        reviewer: {
                            full_name: 'Veronika Biodiesel'
                        }
                    }
                ],
                tags: ['sports', 'fitness', 'outdoors']
            }
        };
        this.deleteReview = this.deleteReview.bind(this);
    }
    deleteReview(reviewId) {
        this.setState((state) => {
            return {
                product: {
                    ...state.product,
                    reviews: state.product.reviews.filter((review) => review.id !== reviewId)
                }
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Product</h1>
                <ProductDetails
                    {...this.state.product}
                />
                <ReviewList onReviewDelete={this.deleteReview} reviews={this.state.product.reviews} />
            </div>
        );
    }
}
export default ProductShowPage;
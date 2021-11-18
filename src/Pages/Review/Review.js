import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import customer from '../../images/customer.png';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://nameless-wave-63778.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className="container">
            <h2 className="title">CUSTOMER REVIEWS</h2>

            <div className="row text-center">
                {
                    reviews.map(review => <div key={review._id} className="col-md-4 mb-5">
                        <div className="border py-5">
                            <img className="img-fluid w-25 pb-3" src={customer} alt="" />
                            <h2>{review.displayName}</h2>
                            <p>{review.reviewText}</p>
                            <Rating
                                style={{ color: 'orange' }}
                                initialRating={review.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;
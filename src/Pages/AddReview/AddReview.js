import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../contexts/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const { reset } = useForm();

    const handleRating = e => {
        setRating(e.target.value);
    };

    const handleText = e => {
        setReviewText(e.target.value);
    };

    const handleReview = e => {
        e.preventDefault();
        const newReview = { displayName: user.displayName, email: user.email, rating, reviewText }
        fetch('https://bike-store-website-server.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Added Successfully!');
                    reset();
                }
            })
    }
    return (
        <div className="container">
            <h2 className="text-center text-success my-4 py-2">Please Add A Review About Us</h2>
            <form onSubmit={handleReview} className="customer-form my-5">

                <textarea onChange={handleText} type="text" placeholder="Write Review" required />
                <br />
                <select value={rating} onChange={handleRating} className="mb-3">
                    <option value="0">Select Your Rating</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <input className="order-btn btn-warning rounded-3" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddReview;
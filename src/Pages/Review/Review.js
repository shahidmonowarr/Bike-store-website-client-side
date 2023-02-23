import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Rating from "react-rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import customer from "../../images/customer.png";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bike-store-website-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <h2 className="title">CUSTOMER REVIEWS</h2>

      {reviews.length === 0 ? (
        <div className="">
          <h2>
            <Spinner className="mt-5" animation="border" variant="warning" />
          </h2>
          <h3 className="text-warning">Loading...</h3>
        </div>
      ) : (
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review._id}
              className="mb-5"
            >
              <div
                className=" review-sec"
              >
                <img
                  style={{ width: "25%" }}
                  className="img-fluid mx-auto pb-2"
                  src={customer}
                  alt=""
                />
                <h2>{review.displayName}</h2>
                <p>{review.reviewText}</p>
                <Rating
                  style={{ color: "orange" }}
                  initialRating={review.rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly
                />
              </div>
            </div>
          ))}
        </Slider>
      )}

      {/* <div className="row text-center">
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
            </div> */}
    </div>
  );
};

export default Review;

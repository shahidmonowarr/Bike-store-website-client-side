import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Brands from '../../Brands/Brands';
import Review from '../../Review/Review';
import SingleProduct from '../../SingleProduct/SingleProduct';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    const [products, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://bike-store-website-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div>
            <Banner></Banner>

            <div className="container" id="demo-products">

                <h2 className="title">POPULAR <i class="fas fa-biking"></i> BIKES <i class="fas fa-biking"></i></h2>
                {products.length === 0 ? (
                    <div className="">
                        <h2><Spinner className='mt-5' animation="border" variant="warning" /></h2>
                        <h3 className="text-warning">Loading...</h3>
                    </div>
                ):
                (
                    <div className="row">
                    {
                        products.slice(0, 6).map(singleProduct => <SingleProduct
                            key={singleProduct._id}
                            singleProduct={singleProduct}
                        >
                        </SingleProduct>)
                    }
                </div>
                )}
                <Link to={"/products"}>
                        <button className="btn mt-5 btn-warning text-white">View All Products <i class="fas fa-angle-double-right"></i></button>
                    </Link>
            </div>
            <Brands></Brands>
            <Review></Review>
            <section className="container offer-section">
                <h6 className="text-white fw-bold fs-5 pt-5 ">HOLIDAY PACKAGE OFFER</h6>
                <h2 className="offer-title">HOLIDAY SPECIAL 25% OFF !</h2>
                <input className="input-field" type="email" name="" placeholder="Your Email" id="" />
                <Link to="/login">
                    <Button className="input-button">SignUp Now</Button>
                </Link>
            </section>
        </div>
    );
};

export default Home;
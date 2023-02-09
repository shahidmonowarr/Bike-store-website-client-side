import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://bike-store-website-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div className="container" id="demo-products">
            <h6 className="text-danger fw-bold fs-5 mt-5 "><i class="fas fa-long-arrow-alt-right"></i>EXPLORE GREAT bIKES</h6>
            <h2 className="title">OUR COLLECTIONS</h2>
            <Row className='mb-3'>
                {
                    products.map(singleProduct => <SingleProduct
                        key={singleProduct._id}
                        singleProduct={singleProduct}
                    >
                    </SingleProduct>)
                }
            </Row>
        </div>
    );
};

export default Products;
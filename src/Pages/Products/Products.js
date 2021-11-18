import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://nameless-wave-63778.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div className="container" id="demo-products">
            <h6 className="text-danger fw-bold fs-5 mt-5 "><i class="fas fa-long-arrow-alt-right"></i>EXPLORE GREAT PLACES</h6>
            <h2 className="title">POPULAR PACKAGES</h2>
            <div className="row">
                {
                    products.map(singleProduct => <SingleProduct
                        key={singleProduct._id}
                        singleProduct={singleProduct}
                    >
                    </SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;
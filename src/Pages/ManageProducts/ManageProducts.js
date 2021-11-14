import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Package deleted')
                    const remaining = products.filter(singleProduct => singleProduct._id !== id);
                    setProducts(remaining);
                }

            })
    }
    return (
        <div className="manage-Packages ">
            <h2 className="text-success fw-bold pt-5 pb-3 fs-1">Remove package If Needed</h2>
            <br />
            {
                products.map(singleProduct => <div key={singleProduct._id}>
                    <div className="package-div my-2 container">
                        <h3 className="fw-bold fs-4 "><i class="fas fa-hand-holding-heart"></i> {singleProduct.title}</h3>
                        <button className="bg-warning mx-3" onClick={() => handleDelete(singleProduct._id)}> Remove <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;
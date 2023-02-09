import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://bike-store-website-server.onrender.com/products/')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = id => {
        const url = `https://bike-store-website-server.onrender.com/products/${id}`;
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


        <div className=" manage-order" >
            <div className="container">
                <h1 className="text-dark fw-bold pb-3 fs-1">Manage Product</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Product Name</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((singleProduct) => (
                                <tr key={singleProduct._id}>
                                    <td>{singleProduct.title}</td>
                                    <td><button className=" mx-3" onClick={() => handleDelete(singleProduct._id)}> <i class="fas fa-trash-alt"></i></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageProducts;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../contexts/useAuth';
import './MyOrder.css';

const MyOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://bike-store-website-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => {
                const myOrders = data.filter(singleData => singleData.email === user.email);
                setOrders(myOrders);
            });
    }, [orders])

    const handleDelete = id => {
        const proceed = window.confirm("Are You sure, You want to delete?");
        if (proceed) {
            const url = `https://bike-store-website-server.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Order deleted Successfully')
                        const remaining = orders.filter(singlePackage => singlePackage._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }

    return (
        <div className=" manage-order" >
            <div className="container">
                <h1 className=" text-dark fw-bold pt-5 pb-3 fs-1">My Order</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Order Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order.title}</td>
                                    <td>{order.price}</td>
                                    <td>{order.orderStatus}</td>
                                    <td><button className=" mx-3" onClick={() => handleDelete(order._id)}> <i class="fas fa-trash-alt"></i></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrder;
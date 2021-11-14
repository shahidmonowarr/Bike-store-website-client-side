import React, { useEffect, useState } from 'react';
import useAuth from '../../contexts/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const myOrders = data.filter(singleData => singleData.email == user.email);
                setOrders(myOrders);
            });
    }, [orders])

    const handleDelete = id => {
        const proceed = window.confirm("Are You sure, You want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
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
        <div className="my-order-page">
            <h2 className="text-success fw-bold pt-5 pb-3 fs-1">My Order</h2>
            {
                orders.map(order => <div className=" my-order m-5 p-3 border-2 rounded-3 bg-success" key={order._id}>
                    <h1>Title: {order.title}</h1>
                    <h4>price: {order.price}</h4>
                    <h6>Order Status: {order.orderStatus}</h6>
                    <button className="bg-warning mx-3" onClick={() => handleDelete(order._id)}> Remove <i class="fas fa-angle-double-right"></i></button>
                </div>)
            }
        </div>
    );
};

export default MyOrder;
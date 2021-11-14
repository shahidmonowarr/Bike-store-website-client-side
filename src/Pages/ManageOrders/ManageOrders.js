import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleConfirm = id => {
        const matchedOrder = orders.filter(order => order._id == id);
        matchedOrder[0].orderStatus = 'Confirmed';

        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(matchedOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))


        // fetch()
    }

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
        <div className="manage-orders">
            <h2 className="text-success fw-bold pt-5 pb-3 fs-1">Remove and Update</h2>
            <br />
            {
                orders.map(order => <div className="orders-div" key={order._id}>
                    <div className="order-div my-2 container">
                        <h3 className="fw-bold fs-4 "> {order.title} </h3>
                        <h6 className="text-white ps-2"> Order status: {order.orderStatus}</h6>
                        <button className="bg-warning mx-3" onClick={() => handleConfirm(order._id)}> Confirm <i class="fas fa-angle-double-right"></i></button>
                        <button className="bg-warning mx-3" onClick={() => handleDelete(order._id)}> Remove <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://bike-store-website-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    const handleConfirm = id => {
        const matchedOrder = orders.filter(order => order._id === id);
        matchedOrder[0].orderStatus = 'Confirmed';

        fetch(`https://bike-store-website-server.onrender.com/orders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(matchedOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('order confirmed')
            })


        // fetch()
    }

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
                <h1 className="text-dark fw-bold pt-1 pb-3 fs-1">Remove and Update Orders</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Order Status</th>
                            <th>Approve</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order.name}</td>
                                    <td>{order.title}</td>
                                    <td>{order.orderStatus}</td>
                                    <td><button onClick={() => handleConfirm(order._id)}> <i class="fas fa-check-circle"></i></button></td>
                                    <td><button className=" " onClick={() => handleDelete(order._id)}> <i class="fas fa-trash-alt"></i></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageOrders;
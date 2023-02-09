import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../contexts/useAuth';
import './Purchase.css';

const Purchase = () => {
    const { productId, } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {

        const orderStatus = "pending";
        data.orderStatus = orderStatus;

        console.log(data);

        axios.post('https://bike-store-website-server.onrender.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data)
                    alert('Added Successfully');
                    reset();
                }
            })
    };

    useEffect(() => {
        fetch(`https://bike-store-website-server.onrender.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data));
    }, [])

    return (
        <div className="booking-page">
            <h2 className="text-success fw-bold pt-5 pb-3 fs-1">Product title: {singleProduct.title}</h2>
            <br />

            <div className="package-info text-white">
                <div className="" >
                    <div>
                        <img className="w-50" src={singleProduct.img} alt="" />
                    </div>
                    <h2>{singleProduct.title}</h2>
                    <p className="fs-5">{singleProduct.description}</p>
                    <h3>Price: {singleProduct.price} <i class="fas fa-dollar-sign"></i></h3>
                </div>
            </div>
            <h2 className="title text-white">FillUp this form to Place Order</h2>
            <div className="shipping-section ">

                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} placeholder="Email" {...register("email", { required: true })} />

                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Package Title" defaultValue={singleProduct.title} {...register("title")} />
                    <input placeholder="Price" defaultValue={singleProduct.price} {...register("price")} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />

                    <input placeholder="Phone No." defaultValue="" {...register("phone")} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;
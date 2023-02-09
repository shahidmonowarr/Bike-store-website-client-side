import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://bike-store-website-server.onrender.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    };
    return (
        <div className="add-product pb-5">
            <h2 className="text-light fw-bold pt-5 mb-3 fs-1">Please add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control' {...register("title", { required: true, maxLength: 200 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input className='form-control' type="number" {...register("price")} placeholder="Price" />
                <input className='form-control' {...register("img")} placeholder="Image url" />
                <input  className="bg-warning form-control fs-6 fw-bold text-white" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;
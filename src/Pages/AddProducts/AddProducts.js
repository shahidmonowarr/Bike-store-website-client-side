import axios from 'axios';
import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://nameless-wave-63778.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    };
    return (
        <div className="add-product">
            <h2 className="text-light fw-bold mt-5 mb-3 fs-1">Please add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 200 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input className="bg-warning fs-6 fw-bold text-white" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;
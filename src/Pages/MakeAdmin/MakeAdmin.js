import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [addAdmin, setAddAdmin] = useState(false);


    const handleAdminEmail = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };

        fetch(`https://bike-store-website-server.onrender.com/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAddAdmin(true);
                    setEmail('');
                }
                console.log(data);
            })

        e.preventDefault();

    }
    return (
        <div className="container">
            <h3 className="text-success my-3 py-2">Make a Admin</h3>
            <div className="mx-auto my-5">
                <form className="mb-5 " onSubmit={handleMakeAdmin}>
                    <input
                        onBlur={handleAdminEmail}
                        className="w-75 form-control"
                        style={{ outline: 'none' }}
                        type="email"
                        placeholder="Email"
                    />
                    <button
                        className="bg-warning form-control w-25 mt-3"
                        type="submit"
                    >Make Admin</button>
                </form>
                {
                    addAdmin && <div><h6 className="my-3">An Admin Added Successfully</h6></div>
                }

            </div>
        </div>
    );
};

export default MakeAdmin;
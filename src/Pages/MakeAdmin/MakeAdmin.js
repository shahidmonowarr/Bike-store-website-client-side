import { Alert } from 'bootstrap';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [addAdmin, setAddAdmin] = useState(false);


    const handleAdminEmail = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };

        fetch(`http://localhost:5000/users/admin`, {
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
            <h3 className="text-center bg-danger text-light my-4 py-2">Make a Admin</h3>
            <div className="text-center mt-5">
                <form onSubmit={handleMakeAdmin}>
                    <input
                        onBlur={handleAdminEmail}
                        className="w-50"
                        style={{ outline: 'none' }}
                        type="email"
                        placeholder="Email"
                    />
                    <button
                        style={{ background: 'green', color: 'white', outline: 'none', border: 'none', padding: '4px 10px', borderRadius: '5px' }}
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
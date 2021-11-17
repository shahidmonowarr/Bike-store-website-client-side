import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../contexts/useAuth';

const Login = () => {

    const [isTrue, setIsTrue] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle, createUserAccount, userLogin, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // const auth = getAuth();
    const handleRegistration = () => {
        createUserAccount(name, email, password, location, history);
    }
    const handleLogin = () => {
        userLogin(email, password, location, history);
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }

    return (
        <div className="container">
            <form >
                {
                    !isTrue ? (
                        <div>
                            <h2>Please Register</h2>
                            <div className="row mb-3">
                                <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input placeholder="Enter Username" onChange={handleNameChange} type="name" className="form-control" id="inputName3" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input placeholder="Enter Email" onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input placeholder="Enter Password" onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                                </div>
                            </div>
                            <p className="text-danger">{error}</p>
                            <button onClick={handleRegistration} type="button" className="btn btn-primary">Register</button>
                            <p>Already have an account? <span style={{ color: 'yellow', cursor: 'pointer', backgroundColor: 'black', padding: '4px' }} onClick={() => setIsTrue(true)}>click here</span></p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="fs-2 fw-bold text-success py-3">Please Login</h2>
                            <div className="row mb-3 px-5">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input placeholder="Enter Email" onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                                </div>
                            </div>
                            <div className="row mb-3 px-5">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input placeholder="Enter Password" onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                                </div>
                            </div>
                            <p className="text-danger">{error}</p>
                            <button onClick={handleLogin} type="button" className="btn btn-warning text-white fw-bold">Login</button>
                            <p>Don't have an Account? <span onClick={() => setIsTrue(false)}>click here</span></p>
                        </div>
                    )
                }


            </form>


            <div>
                <h5 className="fst-italic fw-bold fs-4 text-primary my-3">Or</h5>
                <h2 className="fs-2 fw-bold text-success py-3">Please Log In With</h2>
                <button onClick={handleGoogleSignIn} className="btn btn-warning mb-3 text-white fw-bold"><i class="fab fa-google text-danger"></i>oogle Sign In</button>
            </div>
        </div>
    );
};

export default Login;
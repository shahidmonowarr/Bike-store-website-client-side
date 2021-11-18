import React from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../contexts/useAuth';
import AddProducts from '../AddProducts/AddProducts';
import AddReview from '../AddReview/AddReview';
import AdminRoute from '../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';

const DashBoard = () => {
    const { user, admin, logOut } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">

                    {admin ? (<div className="my-5">
                        <Link to={`${url}/manageOrders`} style={{ textDecoration: "none" }}>Manage all Orders</Link>
                        <br />
                        <Link to={`${url}/addProducts`} style={{ textDecoration: "none" }}>Add Products</Link>
                        <br />
                        <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }}>Make Admin</Link>
                        <br />
                        <Link to={`${url}/manageProducts`} style={{ textDecoration: "none" }}>Manage Products</Link>
                        <br />
                        {user?.email &&
                            <Link to="" className="pb-2" style={{ textDecoration: "none" }} onClick={logOut} >Logout</Link>
                        }
                    </div>)
                        : (<div className="my-5">
                            <Link to={`${url}/pay`} style={{ textDecoration: "none" }}>Pay</Link>
                            <br />
                            <Link to={`${url}/myOrder`} style={{ textDecoration: "none" }}>My Orders</Link>
                            <br />
                            <Link to={`${url}/addReview`} style={{ textDecoration: "none" }}>Review</Link>
                            <br />
                            {user?.email &&
                                <Link to="" className="pb-2" style={{ textDecoration: "none" }} onClick={logOut} >Logout</Link>
                            }
                        </div>)}

                </div>
                <div className="col-md-10">

                    <Switch>
                        <AdminRoute path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`} >
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageOrders`} >
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`} >
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/addReview`}>
                            <AddReview></AddReview>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
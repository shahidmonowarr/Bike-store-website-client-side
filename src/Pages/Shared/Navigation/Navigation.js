import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand className="fs-3 fw-bold" href="#home">Bike Zone</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        {/* <Nav className="ms-auto text-light">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#packages-page">Packages</Nav.Link>




                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                            {user?.email &&
                                <Nav.Link as={Link} to="/addPackage">Add Package</Nav.Link>
                            }
                            {user?.email &&
                                <Nav.Link as={Link} to="/managePackages">Manage Package</Nav.Link>
                            }
                            {user?.email &&
                                <Nav.Link as={Link} to="/manageOrders">Manage Orders</Nav.Link>
                            }
                            {user?.email &&
                                <Nav.Link as={Link} to="/myOrder">My Order</Nav.Link>
                            }
                            {user?.email ?
                                <Button onClick={logOut} variant="light" className="mx-3 bg-warning text-white">Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                User: <a style={{ textDecoration: "none" }} href="#login"> {user?.displayName}</a>
                            </Navbar.Text>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
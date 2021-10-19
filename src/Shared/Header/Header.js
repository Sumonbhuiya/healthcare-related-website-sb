import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Container className="align-items-end">
                    <Nav.Link as={Link} to="/home" className="" ></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="ms-4" id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link className="fs-5 mx-2" as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className="fs-5 mx-2" as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link className="fs-5 mx-2" as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link className="text-white w-50 mx-auto rounded-pill fs-5 px-4 mx-2" as={Link} to="/signup" style={{ backgroundColor: '#ed145c' }}>Sign Up</Nav.Link>
                        </Nav>
                        <Nav className="align-items-lg-end">
                            <Navbar.Text className="mx-2" style={{ fontSize: '18px' }}>Faius Mojumder Nahin</Navbar.Text>

                        </Nav>
                    </Navbar.Collapse>
                    <div className="d-flex">
                    </div>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Family Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/ambulance">Ambulance</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            {user?.email ?
                                <Nav>
                                    <Navbar.Text>
                                        |{user?.displayName}|
                                    </Navbar.Text>
                                    <Nav.Link onClick={logOut} as={Link} to="/home">log Out</Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link as={Link} to="/login">log in</Nav.Link>
                                    <Nav.Link eventKey={2} as={Link} to="/register">Registration</Nav.Link>
                                </Nav>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
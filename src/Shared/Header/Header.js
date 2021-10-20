import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    // header navbar 
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><span className="fs-2 fw-bold">Family Care</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/ambulance">Ambulance</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            {/* chack user  */}
                            {user.uid || user.email ?
                                <Nav>
                                    <Navbar.Text>
                                        |{user.displayName}|
                                    </Navbar.Text>
                                    <Nav.Link onClick={logOut} as={Link} to="/home"><span className="text-danger">log Out</span></Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link as={Link} to="/login"><span className="text-danger fw-bold fs-5">login</span></Nav.Link>
                                    <Nav.Link eventKey={2} as={Link} to="/register"><span className="text-danger fw-bold fs-5">Registration</span></Nav.Link>
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
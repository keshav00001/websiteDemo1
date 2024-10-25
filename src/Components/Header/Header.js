import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsTelephoneFill } from 'react-icons/bs';
import { CgSearch } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './style.css'
import { Link } from "react-router-dom";
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Routes,
//     Route,
//     Link,
//   } from "react-router-dom";

function Header(props) {
    console.log("thisis header")
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" className="navColor">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://thepixelcurve.com/html/techmax/techmax/assets/images/logo.png"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <NavDropdown title="Home" id="collasible-nav-dropdown" className="navLink_space">
                            <NavDropdown.Item href="#action/3.1">Home One</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Home Two
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Home Three</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Home Three
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing" className="navLink_space">About Us</Nav.Link>
                        <NavDropdown title="Pages" id="collasible-nav-dropdown" className="navLink_space">
                            <NavDropdown.Item href="#ourTeams">
                                <Link to="/ourTeams">
                                    <div className="header_space"><span className="dropDownLabel">Our Team</span> </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Services">
                                <Link to="/Services">
                                    <div className="header_space"><span className="dropDownLabel">Service</span> </div>
                                </Link>
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Why Choose Us</NavDropdown.Item> */}
                            <NavDropdown.Item href="#Tetimonial">
                                <Link to="/Tetimonial">
                                    <div className="header_space"><span className="dropDownLabel">Tetimonial</span> </div>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Login & Register
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Contact" className="navLink_space">
                            <Link to="/contact">
                                <div className="header_space">Contact Us</div>
                            </Link>
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">

                            <Row>
                                <Col>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div>
                                            <BsTelephoneFill className="contactIcon" />
                                        </div>
                                        <div>
                                            <span className="free_consult">Free Consultant</span><br></br>
                                            <span className="free_consult2">+36 55 540 069</span>
                                        </div>
                                    </div>
                                </Col>

                            </Row>


                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#memes">
                            <div className="searchIcon">
                                <div>
                                    <CgSearch className="" />
                                </div>
                            </div>
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#memes">
                            <div className="searchIcon">
                                <div>
                                    <AiOutlineShoppingCart className="" />
                                </div>
                                <span className="Headercount">0</span>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default Header;

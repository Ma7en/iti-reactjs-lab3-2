/* eslint-disable no-unused-vars */

import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/react-fontawesome";

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Link to={"/"} className="navbar-brand">
                        Products App
                    </Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link to={"/register"} className="nav-link">
                                Register
                            </Link>

                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>

                            <Link to={"/shoppingcard"} className="nav-link">
                                <FontAwesomeIcon icon={faBasketShopping} />
                                {/* <Button variant="primary">
                                    Profile 
                                    <Badge bg="secondary">9</Badge>
                                    <span className="visually-hidden">
                                        unread messages
                                    </span>
                                </Button> */}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

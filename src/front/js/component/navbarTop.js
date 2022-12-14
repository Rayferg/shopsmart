import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useContext, useEffect } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from "./Login";
import { Context } from "../store/appContext";
import SearchBar from "./SearchBar";

export const MyNavbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	return (
			<Navbar id="topNav">
			  <Container fluid >
				<Navbar.Brand href="/" id="brand">
					<i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
					Shop Smart
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll"> */}
				  {/* <Nav
					className="me-auto my-2 my-lg-0"
					style={{ maxHeight: '100px' }}
					navbarScroll
				  > */}
				<SearchBar/>
				<Button variant="primary" onClick={handleShow}>
					LogIn
				</Button>

				<Offcanvas show={show} placement='end' onHide={handleClose} >
					<Offcanvas.Header closeButton>
						<Offcanvas.Title></Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Login />
					</Offcanvas.Body>
				</Offcanvas>	
			  </Container>
			</Navbar>
	);
};

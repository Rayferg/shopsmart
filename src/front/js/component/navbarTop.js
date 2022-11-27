import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MyNavbar = () => {
	return (
			<Navbar id="topNav">
			  <Container fluid >
				<Navbar.Brand href="#" style={{color:"white"}}>
					Shop Smart
					<i className="fa fa-shopping-cart" aria-hidden="true"></i>
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll"> */}
				  {/* <Nav
					className="me-auto my-2 my-lg-0"
					style={{ maxHeight: '100px' }}
					navbarScroll
				  > */}
					<Form className="searchbar">
					<Form.Control
					  type="search"
					  placeholder="Search"
					  className="me-2"
					  aria-label="Search"
					/>
				  </Form>
					<Nav.Link href="#" style={{color: "white"}} >
					  Log in / Sign Up
					</Nav.Link>
				  {/* </Nav> */}
				{/* </Navbar.Collapse> */}
			  </Container>
			</Navbar>
	);
};

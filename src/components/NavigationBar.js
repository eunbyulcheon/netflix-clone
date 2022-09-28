import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Container, Form, Nav } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

const NavigationBar = () => {
	return (
		<Navbar bg="black" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">
					<img
						width={100}
						src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
						alt="netflix logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Link to="/">Home</Link>
						<Link to="/movies">Movies</Link>
						<Link to="/movies">My Favorite</Link>
					</Nav>

					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-danger">
							<BiSearch style={{ fontSize: '22px' }} />
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;

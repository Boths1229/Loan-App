import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'

class Navigation extends Component {
    render () {
       return (
       <div>
           <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><h2>Loan App</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/faqs">FAQs</NavDropdown.Item>
                    <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Testimonials</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <Nav>
                <Nav.Link href="/signup">Sign up</Nav.Link>
                <Nav.Link href="/signin">Sign in</Nav.Link>
                </Nav>   
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}

export default Navigation;
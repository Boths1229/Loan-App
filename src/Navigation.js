import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

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
                    <NavDropdown.Item href="/requestLoan">Request Loan</NavDropdown.Item>
                    <NavDropdown.Item href="/loanRepayment">Loan Repayment</NavDropdown.Item>
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
            <div style={{color: 'black'}} className='tc f3' >
          <h1 className='text-capitalize'>Wont you rather deal with us?</h1>
          <p><b>Our loans are deposited within hours. We are fast in our transaction, which makes us the customers <i>number one choice</i></b></p>
          <p><b>Use this link to <NavLink to='/signup'>
           Register
          </NavLink> with us and enjoy our wonderful benefits </b></p>
          <p><b>If you have already registered, you can <NavLink to='/signin'>
            Login
          </NavLink> into your account from here.</b></p>
        </div>
        </div>
        )
    }
}

export default Navigation;
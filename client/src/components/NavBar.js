import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/nav'
import Image from 'react-bootstrap/Image'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar expand="sm" sticky="top" id="navbar-custom">
                <NavDropdown title={
                    <Image
                        height={50}
                        with={50}
                        src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/skype2512x512.png"
                    />
                } id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                        <Nav.Link href="../CreateAccount">Create Account</Nav.Link>
                        <Nav.Link href="../LogIn">Log In</Nav.Link>
                    </NavDropdown.Item>
                </NavDropdown>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="mr-4">
                        <Nav.Link href="../"><b>Home</b></Nav.Link>
                        <Nav.Link href="../Cities"><b>Cities</b></Nav.Link>
                        <Nav.Link href="../Mytinerary"><b>MYtinerary</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        )
    }
}

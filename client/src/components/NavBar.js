import React from 'react'
import { Navbar, NavDropdown, NavbarBrand, Nav, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
const logo = require('../images/logo-olecosta.svg')



export default function NavBar({ interfaceName }) {

    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push("/login")
        } catch {

        }
    }

    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/" className="">
                    {/* <img
                        src={logo}
                        alt="logo"
                        className='w-25'
                    /> */}
                    <strong className="white-text">{interfaceName}</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/newTicket">Nuevo tique</Nav.Link>
                        <NavDropdown title="Admin" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/new-Worker">Nuevo trabajador</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => handleLogout()}>Cerrar Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>




    )
}


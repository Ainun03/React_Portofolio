import React, { Fragment } from "react";

import 
{
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Image,

} from 'react-bootstrap'
function MyNavbar () {
    return(
        <Fragment>
            <Navbar bg="primary"  variant="white" fixed="top" expand="lg">
                <Container fluid="sm">
                    <Navbar.Brand href="/">
                    <Image
                        alt=""
                        src="/images/logo192.png"
                        width="30"
                        height="25"
                        className="d-inline-block mt-1 align-top"
                        />{' '}
                        Portofolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                    <Nav className="ms-auto" variant="pills" >
                        <Nav.Link className="nav1" eventKey="1" href="/">Beranda</Nav.Link>
                        <Nav.Link className="nav1" eventKey="2" href="/tentang">Tentang</Nav.Link>
                        <Nav.Link className="nav1" eventKey="3" href="/event">Agenda</Nav.Link>
                        <Nav.Link className="nav1" href="/kontak">Kontak</Nav.Link>
                        <NavDropdown className="nav1" title="Research" id="basic-nav-dropdown">
                            <NavDropdown.Item  href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/register">
                                Register
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </Fragment>
    )
}
export default MyNavbar
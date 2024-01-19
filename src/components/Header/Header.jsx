import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { FaPhone } from "react-icons/fa";

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="logo.svg" alt="" className="img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/baskan">
              Başkan
            </Nav.Link>
            <Nav.Link as={Link} to="/meram-tarihce">
              Tarihçe
            </Nav.Link>
            <Nav.Link as={Link} to="/mega">
              Mega
            </Nav.Link>
            <Nav.Link as={Link} to="/meram">
              Meram
            </Nav.Link>
            <Nav.Link as={Link} to="/iletisim">
              İletişim
            </Nav.Link>
            <h4 className="mb-0">
              <FaPhone /> 444 3 042
            </h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;

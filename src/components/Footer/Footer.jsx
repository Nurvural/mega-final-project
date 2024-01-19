import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="text-center text-white">
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row>
          <Col>
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              style={{ color: " rgb(6, 92, 59)" }}
            >
              <FaFacebook />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg m-1"
              href="#!"
              role="button"
              style={{ color: " rgb(6, 92, 59)" }}
              data-mdb-ripple-color="dark"
            >
              <FaTwitter />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg m-1"
              style={{ color: " rgb(6, 92, 59)" }}
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

import React from "react";
import logo from "../logo1.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand className="my-0 mr-md-auto font-weight-normal">
            <Link to={"/"} className="text-decoration-none">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <text className="text-white">CoLawab</text>
            </Link>
          </Navbar.Brand>
          <Nav className="my-2 my-md-0 mr-md-3">
            <Nav.Link href="#home">
              <Link to={"/"} className="text-decoration-none">
                <text className="text-white">Home</text>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={"search"} className="text-decoration-none">
                <text className="text-white">Talk to lawyers</text>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"navigation"} className="text-decoration-none">
                <text className="text-white">Talk to AI</text>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"templates"} className="text-decoration-none">
                <text className="text-white">Templates</text>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Navigationbar;

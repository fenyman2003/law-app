import React from "react";
import logo from "../logo.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand className="my-0 mr-md-auto font-weight-normal">
            <Link to={"/"}>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              CoLawab
            </Link>
          </Navbar.Brand>
          <Nav className="my-2 my-md-0 mr-md-3">
            <Nav.Link href="#home">
              <Link to={"/"}>
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                Home
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={"search"}>Search</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"navigation"}>Navigation</Link>
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

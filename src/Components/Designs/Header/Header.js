import { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// const NavUnlisted = styled.ul`
//   text-decoration: none;
// `;

export const linkStyle = {
  margin: "0.5rem",
  textDecoration: "none",
  color: "#757783",
  fontSize: "18px",
  fontWeight: "600",
};

const Header = () => {
  const [color, setColor] = useState("");
  const changeColor = (e) => {
    setColor((e.target.style.color = "black"));
  };
  const defaultColor = (e) => {
    setColor((e.target.style.color = "gray"));
  };

  return (
    <Fragment>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "white", position: "sticky" }}
      >
        <Container style={{ textAlign: "left" }}>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/Images/Logo.jpg"
                width="60"
                height="60"
                className="rounded-5 d-inline-block align-top"
                alt="React Bootstrap logo"
                style={{ border: "2px solid black" }}
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link
                style={linkStyle}
                to="/home"
                onMouseOver={changeColor}
                onMouseLeave={defaultColor}
              >
                Home
              </Link>

              <Link
                style={linkStyle}
                to="/about"
                onMouseOver={changeColor}
                onMouseLeave={defaultColor}
              >
                About Us
              </Link>

              <Link
                style={linkStyle}
                to="/services"
                onMouseOver={changeColor}
                onMouseLeave={defaultColor}
              >
                Services
              </Link>

              <Link
                style={linkStyle}
                to="/career"
                onMouseOver={changeColor}
                onMouseLeave={defaultColor}
              >
                Career
              </Link>

              <Link
                style={linkStyle}
                to="/contact"
                onMouseOver={changeColor}
                onMouseLeave={defaultColor}
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;

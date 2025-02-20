import { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import { FaUserAlt } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar
        expand="md"
        bg="dark"
        data-bs-theme="dark"
        className="fixed-top bg-body-tertiary shadow"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-success fw-semibold">
              Rooling Sound
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex align-items-center">
              <div className="d-flex flex-grow-1">
                <Nav.Link href="/" className="active text-uppercase">
                  Home
                </Nav.Link>
                <Nav.Link href="/About" className="active text-uppercase">
                  About
                </Nav.Link>
                <Nav.Link href="/Top10" className="active text-uppercase">
                  Top10
                </Nav.Link>

                <Nav.Link
                  href="/Administration"
                  className="active text-uppercase"
                >
                  Administration
                </Nav.Link>
              </div>
              <Button onClick={() => setShowLogin(true)}>
                <FaUserAlt size={25} />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
};

export default NavBar;

import { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import { FaUserAlt } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
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
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <img
              className={`imgDisco ${isCollapsed ? "collapsed" : ""}`}
              src="./Logo.png"
              alt="logo"
            />
            <Nav className="ms-auto w-100 d-flex justify-content-start">
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
            </Nav>
          </Navbar.Collapse>

          <Button onClick={() => setShowLogin(true)}>
            <FaUserAlt size={25} />
          </Button>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
};

export default NavBar;

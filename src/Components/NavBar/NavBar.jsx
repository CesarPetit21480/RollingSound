import { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "./NavBar.css";
import LoginRegisterModal from "../LoginRegisterModal/LoginRegisterModal";



const NavBar = () => {
  /* const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false); */
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showModal, setShowModal] = useState(false);
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
              Rolling Sound
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
              <Nav.Link as={Link} to="/" className="active text-uppercase">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="active text-uppercase">
                Nosotros
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/administration"
                className="active text-uppercase"
              >
                Administracion
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
          {/* <Button onClick={() => setShowLogin(true)}>
            <FaUserAlt size={25} />
          </Button>

          <Button onClick={() => setShowRegister(true)}>
            <FaUserAlt size={25} />
          </Button>
           */}

       <Button onClick={() => setShowModal(true)} style={{backgroundColor: "rgb(39, 94, 53)", border: "none"}}> 
            <FaUserAlt size={25} />
          </Button>
        </Container>
      </Navbar>

      {/* <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <RegisterModal show={showRegister} handleClose={() => setShowRegister(false)}/> */}

<LoginRegisterModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default NavBar;

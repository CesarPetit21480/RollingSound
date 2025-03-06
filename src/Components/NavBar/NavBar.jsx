import { useState, useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

import { FaUserAlt } from "react-icons/fa";
import "./NavBar.css";
import LoginRegisterModal from "../LoginRegisterModal/LoginRegisterModal";
import { useNavigate } from "react-router";
import { Context } from "../../Context/Context";

const NavBar = () => {
  /* const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false); */
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();
  const { user, setUser, loguer } = useContext(Context);

  let usuarioLogueado = loguer ? loguer : user ? user : undefined;

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <Navbar
        expand="md"
        bg="dark"
        data-bs-theme="dark"
        className="fixed-top bg-body-tertiary shadow"
      >
        <Container fluid>
          <Navbar.Brand
            className="navbar-brand text-success fw-semibold"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Rolling Sound
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
              <Nav.Link
                onClick={() => navigate("/")}
                className="active text-uppercase"
                style={{ cursor: "pointer" }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                onClick={() => navigate("/about")}
                className="active text-uppercase"
                style={{ cursor: "pointer" }}
              >
                About
              </Nav.Link>

              {/* <Nav.Link
                onClick={() => navigate("/top10")}
                className="active text-uppercase"
                style={{ cursor: "pointer" }}
              >
                Top10
              </Nav.Link> */}
              {usuarioLogueado && (
                <Nav.Link
                  onClick={() => navigate("/administration")}
                  className="active text-uppercase"
                  style={{ cursor: "pointer" }}
                >
                  Administration
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          {usuarioLogueado && (
            <Navbar.Text className="text-white mx-3 d-flex align-items-center">
              <img
                src={usuarioLogueado.foto}
                alt="User"
                className="rounded-circle me-2"
                style={{ width: "30px", height: "30px", objectFit: "cover" }}
                onClick={handleLogout}
              />
              {usuarioLogueado.username.toUpperCase()}
            </Navbar.Text>
          )}

          <Button Button onClick={() => setShowModal(true)}>
            <FaUserAlt size={25} />
          </Button>
        </Container>
      </Navbar>
      <LoginRegisterModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
};

export default NavBar;

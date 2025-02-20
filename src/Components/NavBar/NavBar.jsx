import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar
        expand="md"
        bg="dark"
        data-bs-theme="dark"
        className="fixed-top bg-body-tertiary shadow"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-success fw-semibold">
              Rooling Sound 
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-start w-100">
              <Nav.Link href="/" className="active text-uppercase">
                Home
              </Nav.Link>
              <Nav.Link href="/About" className="active text-uppercase">
                About
              </Nav.Link>
              <Nav.Link href="/Top10" className="active text-uppercase">
                Top10
              </Nav.Link>
              <Nav.Link href="/login" className="active text-uppercase">
                Login
              </Nav.Link>

              <Nav.Link href="/Administration" className="active text-uppercase">
                Administracion
              </Nav.Link>

              {/* <Nav.Link
                href="/Administration"
                className="active text-uppercase"
              >
                Administration
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

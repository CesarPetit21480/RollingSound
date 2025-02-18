import { Row, Col, Form, Button, Container } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaMusic,
} from "react-icons/fa";

const MusicFooter = () => {
  return (
    <footer
      className="bg-dark text-light py-4"   
    >
      <Container fluid className="px-5">
        <Row className="justify-content-between">    
          <Col md={4} className="text-center mb-3">
            <FaMusic size={50} className="mb-2 text-primary" />
            <h5>Rolling Sound</h5>
            <p>Explora, descubre y vibra con la mejor música.</p>
          </Col>     
          <Col md={4} className="text-center mb-3">
            <h5>Síguenos</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="text-light">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="text-light">
                <FaTwitter size={25} />
              </a>
              <a href="#" className="text-light">
                <FaSpotify size={25} />
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center mb-3">
            <h5>Suscríbete</h5>
            <Form>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Tu correo electrónico"
                />
              </Form.Group>
              <Button variant="primary" className="mt-2" size="sm">
                Suscribirse
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Derechos reservados */}
        <Row className="text-center mt-3">
          <Col>
            <small>
              &copy; {new Date().getFullYear()} Rolling Sound. Todos los
              derechos reservados.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MusicFooter;




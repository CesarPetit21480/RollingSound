import React, { useState } from "react";
import { userSearchMusic } from "../../hooks/userSearchMusic";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Modal,
  Form,
} from "react-bootstrap";

const Administration = () => {
  const { music, actualizarObjeto, eliminarCancion } = userSearchMusic();
  const [show, setShow] = useState(false);
  const [editingSong, setEditingSong] = useState(null);
  const [formData, setFormData] = useState({
    titulo: "",
    cantante: "",
    linkImagen: "",
  });

  const handleEdit = (song) => {
    setEditingSong(song.id);
    setFormData(song);
    setShow(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditingSong(null);
    actualizarObjeto(editingSong, formData);
    setShow(false);
    setFormData({ titulo: "", cantante: "", linkImagen: "" });
  };

  const handleDelete = (id) => {
    if (!id) return;
    eliminarCancion(id);
  };

  return (
    <Container className="mt-5 pt-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h2 className="text-center text-bg-primary mb-5 text-uppercase fw-bold fs-1 mt-5 rounded px-3 py-2">
            Administración de Canciones
          </h2>
          <Button variant="success" onClick={() => setShow(true)}>
            + Agregar Canción
          </Button>
        </Col>
      </Row>

      <Row className="mt-4 d-flex justify-content-center">
        {music && music.length > 0 ? (
          music.map((song) => (
            <Col key={song.id} md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src={
                    song.linkImagen && song.linkImagen.trim() !== ""
                      ? song.linkImagen
                      : "https://via.placeholder.com/150"
                  }
                  alt={song.titulo}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{song.titulo}</Card.Title>
                  <Card.Text>{song.cantante}</Card.Text>
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(song)}
                    className="me-2"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(song.id)}
                  >
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p
            className="text-center mt-3"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            No hay canciones disponibles.
          </p>
        )}
      </Row>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingSong ? "Editar Canción" : "Agregar Canción"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Título */}
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                maxLength={30}
                required
              />
            </Form.Group>

            {/* Cantante */}
            <Form.Group className="mb-3">
              <Form.Label>Cantante</Form.Label>
              <Form.Control
                type="text"
                name="cantante"
                value={formData.cantante}
                onChange={handleChange}
                maxLength={30}
                required
              />
            </Form.Group>

            {/* Imagen (URL) */}
            <Form.Group className="mb-3">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                type="text"
                name="linkImagen"
                value={formData.linkImagen}
                onChange={handleChange}
                maxLength={200}
                required
              />

              {/* Validación de URL */}
              {!/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(
                formData.linkImagen
              ) &&
                formData.linkImagen.length > 0 && (
                  <p className="text-danger">
                    ⚠ Debe ser una URL válida (jpg, png, gif).
                  </p>
                )}
            </Form.Group>

            {/* Botón de Guardar */}
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                disabled={
                  !formData.titulo.trim() ||
                  !formData.cantante.trim() ||
                  !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(
                    formData.linkImagen
                  )
                }
              >
                Guardar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Administration;

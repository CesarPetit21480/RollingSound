import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";

const LoginModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCloseModal = () => {
    setError("");
    setEmail("");
    setPassword("");
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    alert(`Bienvenido ${email}`);

    handleCloseModal();
  };

  return (
    <Modal show={show} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="w-100 mt-3 bg-primary p-2">
            Iniciar Sesión
          </Button>
          <Button
                      variant="link"
                      className="w-100 mt-3"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

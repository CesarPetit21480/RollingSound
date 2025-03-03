import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";

const LoginRegisterModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre Login y Register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Solo para Register
  const [username, setUsername] = useState(""); // Nuevo campo para el nombre de usuario (solo en Registro)
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // Estado para mostrar la ventana de bienvenida

  const handleCloseModal = () => {
    setError("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    setIsSuccess(false); // Reiniciar el estado de éxito
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Validación de Email con regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // 2. Validación de la contraseña
    if (!password || password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // 3. Validación de la confirmación de la contraseña (solo para registro)
    if (!isLogin && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // 4. Validación de nombre de usuario (solo para registro)
    if (!isLogin && !username) {
      setError("Por favor, ingresa un nombre de usuario.");
      return;
    }

    const userData = { email, password, username };
    if (!isLogin) {
      userData.confirmPassword = confirmPassword; // Agregar confirmación de contraseña en registro
    }

    try {
      const response = await fetch(
        isLogin ? "https://jsonplaceholder.typicode.com/posts" : "https://jsonplaceholder.typicode.com/posts", // Cambiado por la URL de prueba
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData), // 🔥 Convertimos los datos a JSON
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en la autenticación");
      }

      setIsSuccess(true); // Si la solicitud es exitosa, mostrar la ventana de bienvenida
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? "Iniciar Sesión" : "Registrarse"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}

        {isSuccess ? (
          <div className="text-center">
            <h4>¡Bienvenido!</h4>
            <p>Has iniciado sesión o creado tu cuenta con éxito.</p>
            <Button variant="primary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>

              <Form.Group controlId="formUsername" className="mt-3">
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required // Validación HTML para campo requerido
                  />
                </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Validación HTML para campo requerido
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Validación HTML para campo requerido
                minLength={6} // Contraseña debe tener al menos 6 caracteres
              />
            </Form.Group>

            {/* Campo adicional para confirmación de contraseña en Registro */}
            {!isLogin && (
              <>

                <Form.Group controlId="formConfirmPassword" className="mt-3">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repite tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required // Validación HTML para campo requerido
                    minLength={6} // Confirmación debe tener al menos 6 caracteres
                  />
                </Form.Group>
              </>
            )}

            <Button type="submit" className="w-100 mt-3 bg-primary p-2">
              {isLogin ? "Iniciar Sesión" : "Registrarse"}
            </Button>
          </Form>
        )}

        {/* Botón para cambiar entre Login y Registro */}
        {!isSuccess && (
          <Button
            variant="link"
            className="w-100 mt-3"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LoginRegisterModal;
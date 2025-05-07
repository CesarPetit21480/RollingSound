import { useState, useContext } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Context } from "../../Context/Context";
import { userSearchHook } from "../../hooks/userSearchHook";
import bcrypt from "bcryptjs";

const LoginRegisterModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [foto, setFoto] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { setUser } = useContext(Context);
  const { user, actualizarUsuario } = userSearchHook();

  const handleCloseModal = () => {
    setError("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    setIsSuccess(false);
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!isLogin && (!email || !emailRegex.test(email))) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (!password || password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (!isLogin && !username) {
      setError("Por favor, ingresa un nombre de usuario.");
      return;
    }

    const userData = { email, password, username, foto };

    try {
      const usuario = user.find((us) => us.username === userData.username);

      if (isLogin) {
        // Inicio de sesión
        if (usuario) {
          const validoPassword = await bcrypt.compare(
            userData.password,
            usuario.password
          );

          if (validoPassword) {
            setUser(usuario);
            localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
            Swal.fire({
              title:
                "<h1 style='color: #007bff; font-weight: bold;'>BIENVENIDO</h1>",
              html: `<h2 style="font-size: 40px; font-weight: 500; color: #333;">${usuario.username.toUpperCase()}</h2>`,
              imageUrl: usuario.foto,
              imageWidth: 150,
              imageHeight: 150,
              imageAlt: "Custom image",
            }).then(() => {
              handleCloseModal();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Password incorrect",
              icon: "error",
              confirmButtonText: "Cerrar",
            });
          }
        } else {
          setError("Usuario no encontrado.");
        }
      } else {
        if (usuario) {
          setError("El nombre de usuario ya está en uso.");
          return;
        }

        userData.password = await bcrypt.hash(password, 10);

        await actualizarUsuario(userData);

        Swal.fire({
          title: "Registro Exitoso",
          text: "Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.",
          icon: "success",
          confirmButtonText: "Cerrar",
        }).then(() => {
          setIsLogin(true);
          handleCloseModal();
        });
      }
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
                required
                minLength={6}
                maxLength={20}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                maxLength={20}
              />
            </Form.Group>

            {!isLogin && (
              <>
                <Form.Group controlId="formConfirmPassword" className="mt-3">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repite tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                    maxLength={20}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={30}
                  />
                </Form.Group>

                <Form.Group controlId="imagenUrl" className="mt-3">
                  <Form.Label>Ingrese Url Imagen</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese Una imagen"
                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}
                    required
                    minLength={6}
                  />
                </Form.Group>
              </>
            )}

            <Button type="submit" className="w-100 mt-3 bg-primary p-2">
              {isLogin ? "Iniciar Sesión" : "Registrarse"}
            </Button>
          </Form>
        )}

        {!isSuccess && (
          <Button
            variant="link"
            className="w-100 mt-3"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "¿No tienes cuenta? Regístrate"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LoginRegisterModal;

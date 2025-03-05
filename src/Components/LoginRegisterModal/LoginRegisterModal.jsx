import { useState, useContext } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import usuarios from "../../data/usuarios.json";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Context } from "../../Context/Context";




const LoginRegisterModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { setUser } = useContext(Context);

  const usuariosJson = Array.isArray(usuarios) ? usuarios : "";

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
    if (!email || !emailRegex.test(email)) {
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

    const userData = { email, password, username };
    if (!isLogin) {
      userData.confirmPassword = confirmPassword;
    }

    try {

      const usuario = usuariosJson.find(us => us.username === userData.username)

      if (usuario) {
        const foto = usuario.foto
        const user = usuario.username.toUpperCase();

        if (usuario.password === userData.password) {
          setUser(usuario)
          Swal.fire({
            title: "<h1 style='color: #007bff; font-weight: bold;'>BIENVENIDO</h1>",
            html: `<h2 style="font-size: 40px; font-weight: 500; color: #333;">${user}</h2>`,
            imageUrl: foto,
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: "Custom image"
          });
        }
        else {
          Swal.fire({
            title: 'Error!',
            text: 'Password incorrect',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          })
        }

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
            {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LoginRegisterModal;
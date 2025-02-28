import { Modal, Button } from "react-bootstrap";
import "./MusicDetail.css";
import { MdOutlineSimCard } from "react-icons/md";

function MusicDetail({ musica, onClose, isCollapsed }) {
  console.log("Datos de musica:", musica);
  if (!musica) return null;

  return (
    <Modal
    show={true}
    onHide={onClose}
    centered
    backdrop={false} // Evita el oscurecimiento del fondo
    className="modal-custom " // Agrega clase personalizada para aplicar estilos
  
  >
    <Modal.Header className="bg-dark">
      <div className="d-flex justify-content-between align-items-center">
        <Modal.Title className="text-success">{musica.titulo}</Modal.Title>
        <img
          className={`imgDisco ${isCollapsed ? "collapsed" : ""}`}
          src="./Logo.png"
          alt="logo"
          style={{ width: "50px", height: "50px", objectFit: "cover", marginLeft: "10px" }}
        />
      </div>
    </Modal.Header>
    <Modal.Body className="bg-dark text-success">
      <div className="d-flex">
        <img
          src={musica.linkImagen}
          alt={musica.titulo}
          className="rounded me-3 img-fluid"
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
        <div>
          <p>
            Cantante: <strong>{musica.cantante}</strong>
          </p>
          <p>
            Categoría: <strong>{musica.categoria}</strong>
          </p>
          <p>
            Duración: <strong>{musica.duracion}</strong>
          </p>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer className="bg-dark">
  <div className="d-flex w-100 align-items-center justify-content-between">
    <Button variant="success" className="w-50 text-dark" onClick={onClose}>
      Cerrar
    </Button>
    <div className="text-success ml-3">
      Categoría: {musica.categoria}
    </div>
  </div>
</Modal.Footer>

    
  </Modal>

  );
}

export default MusicDetail;

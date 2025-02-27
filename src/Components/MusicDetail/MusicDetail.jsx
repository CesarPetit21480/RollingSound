import { Modal, Button } from "react-bootstrap";
import "./MusicDetail.css";


function MusicDetail({musica,onClose,isCollapsed}) {
  console.log("Datos de musica:",musica)
  if (!musica) return null;

  return (
    <Modal
      show={true}
      onHide={onClose}
      centered
      size="lg"
      backdrop={false}
      className="bg-dark text-success"
      dialogClassName="modal-dialog-transparent"
    >
      <Modal.Header closeButton className="border-success align-content-between">
      <div className="d-flex align-items-center"> {/* Alinea título e imagen */}
          <Modal.Title className="text-success">{musica.titulo}</Modal.Title>
          <img
            className={`imgDisco ${isCollapsed ? "collapsed" : ""}`}
            src="./Logo.png"
            alt="logo"
            style={{ width: "50px", height: "50px", marginLeft: "10px" }} // Asegura separación entre el título y la imagen
          />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <img
            src={musica.linkImagen}
            alt={musica.titulo}
            className="rounded me-3"
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
      <Modal.Footer>
        <Button variant="success" className="text-dark" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MusicDetail;

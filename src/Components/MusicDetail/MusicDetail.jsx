import "./MusicDetail.css";
import { Card, Button, CardBody, CardTitle, CardText } from "react-bootstrap";

function MusicDetail({ musica,onClose }) {
  if (!musica) return null;
  return (
    <div className="music-detail-overlay " onClick={onclose}>
      <Card className="music-datail-card" onClick={(e) => e.stopPropagation()}>
        <div className="d-flex">
          <img
            src={musica.linkImagen}
            alt={musica.titulo}
            className="music-detail-image"
          />
          <CardBody>
            <CardTitle>{musica.titulo}</CardTitle>
            <CardText>
              Cantante: <strong>{musica.cantante}</strong>
            </CardText>
            <CardText>
              Categoria: <strong>{musica.categoria}</strong>
            </CardText>
            <CardText>
              Duracion: <strong>{musica.duracion}</strong>
            </CardText>
            <Button
              variant="danger"
              onClick={() => {
                console.log("cerrar modal"); // Log de consola si lo necesitas
                onClose(); // Cierra el modal
              }}
            >
              Cerrar
            </Button>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

export default MusicDetail;

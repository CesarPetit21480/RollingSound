import "./MusicDetail.css";
import { Card, Button, CardBody, CardTitle, CardText } from "react-bootstrap";

function MusicDetail({ musica, onClose, isCollapsed }) {
  if (!musica) return null;
  return (
    <div className="music-detail  " onClick={onclose}>
      <Card className="music-datail-card   " onClick={(e) => e.stopPropagation()}>
        <div className="row-MusicDetail bg-dark  border-2">
          <img
            className={`imgDisco ${isCollapsed ? "collapsed" : ""}  m-2`}
            src="./Logo.png"
            alt="logo"
          />
        </div>
          <hr style={{ borderTop: '10px solid #28a745', backgroundColor: 'transparent', margin: 0 }} />
        <div className="d-flex bg-dark border-2 ">
          <img
            src={musica.linkImagen}
            alt={musica.titulo}
            className="music-detail-image"
            style={{ width: '150px', height: '150px' }} // Ajusta el tamaño según sea necesario
          />
          <CardBody className="text-success">
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
              variant="success"
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

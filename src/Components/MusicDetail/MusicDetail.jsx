import { Modal, Button } from "react-bootstrap";
import "./MusicDetail.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              marginLeft: "10px",
            }}
          />
        </div>
      </Modal.Header>
      <Modal.Body className="bg-dark text-success">
        <div className="d-flex flex-column flex-md-row gap-3">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="mb-3"
            style={{ flex: 1 }}
            onSlideChange={(swiper) => console.log('Slide index changed to: ', swiper.activeIndex)}
            effect="fade"
            
          >
            {musica.imagenesCarrusel.map((img,index) => {
              console.log(musica.imagenesCarrusel);
              return(            
              <SwiperSlide key={index}>
                <img
                  src={img.trim()}
                  alt={`imagen ${index}`}
                  className="ruonded img-fluid"
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
              </SwiperSlide>)
            })}
          </Swiper>

          <div style={{flex:1}}>
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
          <Button
            variant="success"
            className="w-50 text-dark"
            onClick={onClose}
          >
            Cerrar
          </Button>
          <div className="text-success ml-3">Categoría: {musica.categoria}</div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default MusicDetail;

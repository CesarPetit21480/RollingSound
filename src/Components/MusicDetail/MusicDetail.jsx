import { Modal, Button } from "react-bootstrap";
import "./MusicDetail.css";
import { useEffect, useState } from "react";

function MusicDetail({ musica, onClose, isCollapsed }) {
  console.log("Datos de musica:", musica.imagenesCarrusel);
  if (!musica) return null;
  //
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        //hace que el cuando llegue a 3 vuelva a cero ya que cuando llega  a 3 lo divide en el length que es 3 ,el resto es ceero y retona eso 
        const newindex = (prev + 1) % musica.imagenesCarrusel.length;
        return newindex;
      });
    }, 3000);

    //limpiaos e intervalo
    return () => clearInterval(interval);
  }, [musica.imagenesCarrusel.length]);
 
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
          <div
            className="carrousel"
            style={{ flex: 1, overflow: "hidden", position: "relative" }}
          >
            <div
              className="carrousel-inner"
              style={{
                transform: `translateX(-${index * 100}%)`,
                display: "flex",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {/* en esta lline se donde se hace el mapeo  hace una comprobaacion si erray no tiene nada devuelve la imagen de portada si no devuelve el carrousel*/ }
              {musica.imagenesCarrusel && musica.imagenesCarrusel.length > 0 ? (
                musica.imagenesCarrusel.map((img, index) => (
                  <div
                    key={index}
                    className="carrousel-item"
                    style={{ flex: "0 0 100%" }}
                  >
                    <img
                      src={img}
                      alt={musica.titulo}
                      className="carrousel-item rounded img-fluid"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        aspectRatio: "16/9",
                      }}
                    />
                  </div>
                ))
              ) : (
                <div>
                  <img
                    src={musica.linkImagen}
                    alt={musica.titulo}
                    className="rounded img-fluid"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <div style={{ flex: 1 }}>
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

/*aqui fui poniendo los codigo que fui usando y descartando por que no logre que funcionen los carousel de las primeras 8 imagenes
lo dejo por las dudas cuando revisemos el codigo se necesite usar*/
/* <Swiper
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
          </Swiper>*/

/*const nextSlide = () => {
    setIndex((prev) => {
      const newIndex = (prev + 1) % musica.imagenesCarrusel.length;
      console.log("Índice después de siguiente:", newIndex); // Muestra el nuevo índice
      return newIndex;
    });
  };

  const prevSlide = () => {
    setIndex((prev) => {
      const newIndex =
        (prev - 1 + musica.imagenesCarrusel.length) %
        musica.imagenesCarrusel.length;
      console.log("Índice después de anterior:", newIndex); // Muestra el nuevo índice
      return newIndex;
    });
  };*/
/*<button
              onClick={prevSlide}
              className="carousel-button prev  text-dark fw-bold"
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                
                zIndex: 1,
                fontSize:"60px"
              }}
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="carousel-button next  fw-bold"
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                zIndex: 1,
                fontSize:"60px"
              }}
            >
              &gt;
            </button>*/

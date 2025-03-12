import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";
import "./CardDetail.css";
import { Context } from "../../Context/Context";
import { useContext, useState } from "react";
import MusicDetail from "../MusicDetail/MusicDetail";

const CardDetail = ({ musica }) => {
  const { setTracks } = useContext(Context);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [disabledTrack, setDisabledTrack] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [musicaSeleccionada, setMusicaSeleccionada] = useState(null);

  const handleShowModal = () => {
    setshowModal(true);
  };
   const MusicaSelecionada = (item) => {
 
    setMusicaSeleccionada(item);
  };

  const handleClick = (item) => {
    setTracks(item.id);
    setCurrentTrack(item.id);
    setDisabledTrack(item.id);
  };

  return (
    <div className="container text-center">
      <h2 className="text-center text-white mb-5 text-uppercase fw-bold fs-1 mt-5" style={{backgroundColor:"rgb(24, 77, 37)"}}>
        Rolling Sound Canciones
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {musica.map((item) => (
          <div className="col-auto" key={item.id}>
            <Card
              className="h-100 shadow w-100"
              style={{
                maxWidth: "50rem", 
                minWidth: "20rem",
              }}
            >
              <CardBody>
                <CardText className="text-success">{item.titulo}</CardText>
                <div className="d-flex align-items-center">
                  <img
                    src={item.linkImagen}
                    alt={item.titulo}
                    className="mx-3 shadow img-fluid"
                    style={{
                      maxWidth: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src="./play.png"
                    alt="play"
                    onClick={() => handleClick(item)}
                    className={`cursor-pointer ${
                      disabledTrack === item.id ? "disabled" : ""
                    }`}
                    style={{
                      cursor:
                        disabledTrack === item.id ? "not-allowed" : "pointer",
                      opacity: disabledTrack === item.id ? 0.5 : 1,
                      pointerEvents:
                        disabledTrack === item.id ? "none" : "auto",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  <div className="d-flex flex-column">
                    <img
                      src="./Logo.png"
                      alt="logo"
                      className={` ${
                        currentTrack === item.id ? "imgDisco" : ""
                      }`}
                      style={{
                        width: "70px",
                        height: "70px",
                        marginLeft: "30px",
                      }}
                    />
                    {currentTrack === item.id && (
                      <div>Está Sonando: {item.titulo}</div>
                    )}
                  </div>
                </div>
              </CardBody>
              <CardFooter className="d-flex justify-content-center align-items-center"></CardFooter>
              <CardTitle className="text-success d-flex justify-content-center align-items-center gap-3">
                {item.categoria}
                <Button
                  variant="success"
                  className="perfil-button"
                  onClick={() => {
                    handleShowModal();
                    MusicaSelecionada(item);
                  }}
                >
                  Perfil
                </Button>
                {showModal && musicaSeleccionada && (
                  <MusicDetail
                    musica={musicaSeleccionada}
                    onClose={() => setshowModal(false)}
                  />
                )}
              </CardTitle>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetail;

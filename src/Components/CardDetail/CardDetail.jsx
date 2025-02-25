import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  NavItem,
} from "react-bootstrap";
import "./CardDetail.css";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import MusicDetail from "../MusicDetail/MusicDetail";
import { number } from "yup";

const CardDetail = ({musica}) => {
  //maneja la visibilidad del modal
  const [selectedMusic, setSelectedMusica] = useState(null); //estado par manejar los datos de la musica
  const [selectedMusicId, setSelectedMusicId] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedMusica(item); //establece la musica
    setSelectedMusicId(item.id);
  };
  const handleCloseModal = () => {
    setSelectedMusica(null);
    setSelectedMusicId(null);
  };

  return (
    <div className="card-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">
        Rolling Sound Tracks
      </h2>
      <div className="row g-5">
        {musica.map(
          ({
            id,
            titulo,
            cantante,
            duracion,
            linkImagen,
            categoria,
            music_route,
          }) => (
            <div className="col-lg-4" key={id}>
              <Card
                className="h-100 shadow"
                onClick={() =>
                  handleOpenModal({
                    id,
                    titulo,
                    linkImagen,
                    categoria,
                    duracion,
                    cantante,
                    music_route,
                  })
                }
              >
                <CardBody>
                  <CardText className="text-success">{titulo}</CardText>
                  <div className="d-flex align-items-center ">
                    <img
                      src={linkImagen}
                      alt={titulo}
                      className="card-imge"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      // Ajusta el tamaño si es necesario
                    />
                    {/* <MusicPlayer player={item.player} /> */}

                    <MusicPlayer id={id} />
                  </div>
                </CardBody>
                <CardFooter className="d-flex justify-content-center align-items-center "></CardFooter>
                <CardTitle className="text-success">{categoria}</CardTitle>
              </Card>
              {/*renderiza el modal solo si showModal esta en true*/}

              {selectedMusicId === id && (
                <div className="music-detail-container ">
                  <MusicDetail
                    musica={selectedMusic}
                    onClose={handleCloseModal}
                  />
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardDetail;

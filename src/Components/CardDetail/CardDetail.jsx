/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
} from "react-bootstrap";
import "./CardDetail.css";
import { Context } from "../../Context/Context";
import { useContext, useState } from "react";
import MusicDetail from "../MusicDetail/MusicDetail";

// eslint-disable-next-line react/prop-types
const CardDetail = ({ musica }) => {
  const { setTracks } = useContext(Context);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = (item) => {
    setSelectedMusic(item);
    setShowDetail(true);
    console.log("Modal abierto, música seleccionada:", item);
  };
  const handleClick = (e, item) => {
    e.stopPropagation();
    setTracks(item.id);
    setSelectedMusic(item); //guarda el item seleccionado para mostrrlo en el modal de detalle
  };
  const handleClose = () => {
    setSelectedMusic(null);
    setShowDetail(false)
  };

  return (
    <div className="card-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">
        Rolling Sound Tracks
      </h2>
      <div className="row g-5">
        {musica.map((item) => (
          <div className="col-lg-4" key={item.id}>
            <Card
              className="h-100 shadow"
              onClick={() =>handleShowDetail(item)}
            >
              <CardBody>
                <CardText className="text-success">{item.titulo}</CardText>
                <div className="d-flex align-items-center">
                  <img
                    src={item.linkImagen}
                    alt={item.titulo}
                    className="mx-3 shadow img-fluid"
                    style={{
                      maxWidth: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    onClick={(e) => handleClick(e,item)}
                  />

                  <img src="./Logo.png" alt="logo" />
                </div>
              </CardBody>
              <CardFooter className="d-flex justify-content-center align-items-center "></CardFooter>
              <CardTitle className="text-success">{item.categoria}</CardTitle>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal de detalle */}
      {showDetail && <MusicDetail musica={selectedMusic} onClose={handleClose} />}
    </div>
  );
};

export default CardDetail;

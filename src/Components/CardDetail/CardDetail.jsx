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

const CardDetail = ({ musica }) => {
  const { setTracks } = useContext(Context);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [disabledTrack, setDisabledTrack] = useState(null);

  const handleClick = (item) => {
    setTracks(item.id);
    setCurrentTrack(item.id);
    setDisabledTrack(item.id); // Deshabilita el botón de play
  };

  return (
    <div className="card-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">
        Rolling Sound Tracks
      </h2>
      <div className="row g-5">
        {musica.map((item) => (
          <div className="col-lg-4" key={item.id}>
            <Card className="h-100 shadow">
              <CardBody>
                <CardText className="text-success">{item.titulo}</CardText>
                <div className="d-flex align-items-center">
                  <img
                    src={item.linkImagen}
                    alt="pepe"
                    className="mx-3 shadow img-fluid"
                    style={{
                      maxWidth: "100px",
                      height: "100px",
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
                      width: "50px",
                      height: "50px",
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
                        width: "80px",
                        height: "80px",
                        marginLeft: "50px",
                      }}
                    />

                    {currentTrack === item.id ? (
                      <div>Esta Sonando: {item.titulo}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </CardBody>
              <CardFooter className="d-flex justify-content-center align-items-center "></CardFooter>
              <CardTitle className="text-success">{item.categoria}</CardTitle>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetail;

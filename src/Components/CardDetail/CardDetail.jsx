import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
} from "react-bootstrap";
import "./CardDetail.css";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const CardDetail = ({ musica }) => {
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
                    }} // Ajusta el tamaño si es necesario
                  />
             

             
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

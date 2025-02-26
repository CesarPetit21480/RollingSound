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
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const CardDetail = ({ musica }) => {
  const { setTracks } = useContext(Context);

  const handleClick = (item) => {
    setTracks(item.id);
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
                    onClick={() => handleClick(item)}
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
    </div>
  );
};

export default CardDetail;

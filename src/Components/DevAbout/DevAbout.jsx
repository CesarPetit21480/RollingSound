import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { TbBackground } from "react-icons/tb";
import data from "../../data/about.json";
import "./DevAbout.css";

const DevAbout = (developer) => {
  return (
    <>
      <Container>
        <div className="whit">
          
          <h3  className="text-center text-bg-primary mb-5 text-uppercase fw-bold fs-1 mt-5 rounded px-3 py-2">Nuestra Historia</h3>
          <p>
            En Rolling Sound, creemos que la música tiene el poder de unir a las
            personas y transformar emociones. Somos un equipo apasionado por la
            música y la tecnología, dedicados a crear una experiencia única
            donde los sonidos se convierten en parte de tu vida diaria.
          </p>
          <p>
            Este proyecto es el resultado de nuestra formación en la escuela
            Rolling Code, en el módulo de React, donde fusionamos diseño y
            funcionalidad para ofrecer una plataforma intuitiva, moderna y
            accesible. Aquí encontrarás las mejores recomendaciones, playlists
            personalizadas y una comunidad de amantes de la música que comparte
            tu misma pasión.
          </p>
          <p>
            ¡Únete a nosotros y deja que Rolling Sound se convierta en la
            plataforma sonora de tu vida!
          </p>
          <br />
          <h3 className="whit-des">Desarrolladores</h3>
        </div>
        <Row>{developer.children}</Row>
      </Container>
    </>
  );
};

export default DevAbout;

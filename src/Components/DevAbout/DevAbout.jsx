import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { TbBackground } from 'react-icons/tb';

function DevAbout() {
    return (
      <>
            <Container>
            <div className=''>
            <h3>Nuestra Historia</h3>
            <p>En Rolling Sound, creemos que la música tiene el poder de unir a las personas y transformar emociones. Somos un equipo apasionado por la música y la tecnología, dedicados a crear una experiencia única donde los sonidos se convierten en parte de tu vida diaria.</p>
            <p>Este proyecto es el resultado de nuestra formación en la escuela Rolling Code, en el módulo de React, donde fusionamos diseño y funcionalidad para ofrecer una plataforma intuitiva, moderna y accesible. Aquí encontrarás las mejores recomendaciones, playlists personalizadas y una comunidad de amantes de la música que comparte tu misma pasión.</p>
            <p>¡Únete a nosotros y deja que Rolling Sound se convierta en la plataforma sonora de tu vida!</p>
                <br />
                    <h3>Desarrolladores</h3>
            </div>
                <Row>
                    
        <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GDrMMZ3vCvSZHCYRrj9AvIOIN5rZIXDyKA&s" roundedCircle />
                        <h4>Elcira Gimenez</h4>
        </Col>
        <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GDrMMZ3vCvSZHCYRrj9AvIOIN5rZIXDyKA&s" roundedCircle />
                        <h4>Joaquín Pavón</h4>
        </Col>
        <Col xs={6} md={4}>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GDrMMZ3vCvSZHCYRrj9AvIOIN5rZIXDyKA&s' roundedCircle />
                        <h4>Mario Chávez</h4>
        </Col>
         <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GDrMMZ3vCvSZHCYRrj9AvIOIN5rZIXDyKA&s/171x180" roundedCircle />
                        <h4>Cesar Petit</h4>
        </Col>
        <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GDrMMZ3vCvSZHCYRrj9AvIOIN5rZIXDyKA&s/17x18" roundedCircle />
                        <h4>Rocio</h4>
        </Col>
        <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GDrMMZ3vCvSZHCYRrj9AvIOIN5rZIXDyKA&s/171x180" roundedCircle />
                        <h4>Eduardo Márquez</h4>
        </Col>
        
      </Row>
    </Container>
    </>
  )
}

export default DevAbout

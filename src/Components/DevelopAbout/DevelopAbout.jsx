import React from 'react'
import'./DevelopAbout.css'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { TbBackground } from 'react-icons/tb';
import data from "../../data/about.json";

function DevelopAbout() {
  return (
      <>
          
          {data.map((developer)=> (
      
             <Col xs={6} md={4}>
                 <div className="flip-card">
                   <div className="flip-card-inner">
                       <div className="flip-card-front">
                           <Image src={developer.foto} roundedCircle />
                          <h4>{developer.nombre}</h4>                                  
                       </div>
                   <div className="flip-card-back">
                          <h1>{developer.nombre}</h1>
                          <p>Ocupacion: Desarrollador</p>
                          <p>Edad: {developer.edad}</p>
                          <p>Parte del proyecto: {developer.proyecto}</p>
                       
                   </div>
                  </div>
                </div>
              </Col>
     
          ))}
      
      </>
          
  )
}

export default DevelopAbout

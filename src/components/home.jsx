import React from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import abilopez from '../assets/contributors/abiportrait.jpg'
import matthew from '../assets/cover/matthew.jpg'
import ahumandoelcorazon from '../assets/cover/ahumandoelcorazon.jpg'
import awaculturalphotoshoot from '../assets/cover/awaculturalphotoshoot.jpg'
import walmartparking from '../assets/cover/walmartparking.jpg'
import untitledpainting from '../assets/cover/untitledpainting.jpg'

import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div class = "home" className="my-2">
    <Container fluid>
      <Row className ="align-items-center">
      <Col className ="lg-7">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={awaculturalphotoshoot}
            alt="AWA Cultural Photoshoot"
          />
          <Carousel.Caption>
            <h5>Rachel Koo in AWA Cultural Photoshoot</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ahumandoelcorazon}
            alt="Ahumando el corazón painting"
          />
          <Carousel.Caption>
            <h5>Ahumando el corazón by Cecilia Valencia</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={walmartparking}
            alt="Walmart Parking Lot Painting"
          />
          <Carousel.Caption>
            <h5>Walmart Parking by Song Wu</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={untitledpainting}
            alt="Untitled Painting"
          />
          <Carousel.Caption>
            <h5>Untitled by Gabby Mendoza</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={matthew}
            alt="Matthew Painting"
          />
          <Carousel.Caption>
            <h5>Matthew by Drew Vallero</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      <Col className ="lg-5">
      <h1 className="font-weight-light">About Exhibition</h1>
      <p>
      The Immigrant Art Expo is a collection of art created by members of the Stanford community to explore their immigrant identity. 
      The collection includes poems, essays, paintings, performances, and sculptures that share community narratives from many immigrant 
      backgrounds.This expo creates space for important discourse and encourages viewers to reimagine identity and immigration. 
      More importantly, The Immigrant Art Expo empowers contributors to explore their identity and reclaim their narrative. We will be 
      printing an Immigrant Art Zine for all contributors near the end of Spring Quarter. 
      </p>
      <Button variant="outline-secondary" onClick={() => navigate("collection")}>See Collection</Button>
      </Col>
      </Row>
      </Container>
      <Container fluid className="my-3">
        <Row className="align-items-center">
        <Col className="lg-7">
            <img
                  class="img-fluid rounded"
                  src={abilopez}
                  alt="Abi Lopez Portrait"
                  style={{width: 500, height: 'auto'}}
            />
        </Col>
        <Col className="lg-5">
        <h1 class="font-weight-light">About Organizer</h1>
        <p>
        Abi Lopez (she/her) is a daughter of Mexican immigrants from Southeast LA. 
        She's currently completing her undergraduate degree at Stanford University in 
        Electrical Engineering with a minor in Human Rights. She strives to leverage her 
        education to advance immigrant rights, racial justice, and environmental justice. 
        Her current project is creating an immigration art exposition at Stanford for students 
        to share their journey exploring their immigrant identity through art.
        </p>
        <Button variant="outline-secondary" onClick={() => navigate("about")}>Read Bio</Button>
        </Col>
        </Row>

      </Container>
    </div>   
  );
}

export default Home;

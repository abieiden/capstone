import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import kayumanggi from '../assets/trishakayumanggi.jpg'
import RBApic from '../assets/trishaRBA.jpg'
import RBApdf from '../assets/TLitong_RBA.pdf'
import gentleman from '../assets/mayagentlemanwolf.jpg'
import lemonade from '../assets/mayalemonade.jpg'
import artery from '../assets/mayaartery.jpg'
import window from '../assets/mayawindow.jpg'

function Collection() {
  return (
    <div className="collection">
      <h1>Collection</h1>
      <Container fluid style={{maxWidth: 1500}} >
        <Row >
        <Col>
          <Card>
            <Card.Img variant="top" src={kayumanggi}  />
            <Card.Body>
              <Card.Text>
              Trisha Litong.
            </Card.Text><Card.Text>
            Kayumanggi, meaning "brown-skinned" in Tagalog, is a non-audition 
            Pilipinx cultural arts group at Stanford. We perform traditional Pilipinx folk 
            dances that are as diverse as the many different islands in the Philippines. 
            Kayu aims to promote awareness of Pilipinx culture through dance, art, music, 
            and drama. We hope to create an outlet for self-exploration and discovery, 
            encouraging inclusiveness and openness not just among Pilipinx-Americans, but with 
            the greater Stanford and Bay Area community.
              </Card.Text>
              <Card.Link href="https://www.youtube.com/watch?v=HALSPdWlBgA&ab_channel=CommonOrigins">Watch Here</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={RBApic}  />
            <Card.Body>
            <Card.Text>
              Trisha Litong.
            </Card.Text>
            <Card.Text>
            Regaining Control of the Filipino-American Identity through Stanford University's 
            Pilipino-American Student Union (PASU). Research Based Analysis Paper written for 
            Stanford's Program in Writing and Rhetoric. 
            </Card.Text>
            <Card.Link href={RBApdf}>Read Here</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={lemonade} />
            <Card.Body>
              <Card.Text>
              Maya Salameh.
              </Card.Text>
              <Card.Text>
              THE PRESBYTERIAN CHURCH ON EUCLID DOESN'T SELL LEMONADE ANYMORE. Published in Anomaly. 
              </Card.Text>
              <Card.Link href="https://anmly.org/ap33/maya-salameh/">Read Here</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        </Row>

        <Row style={{marginTop: 15 }}>
        <Col>
          <Card>
            <Card.Img variant="top" src={window} />
            <Card.Body>
              <Card.Text>
              Maya Salameh.
              </Card.Text>
              <Card.Text>
              Open Window at 3PM When I Was Seven. Published in the Brooklyn Review. 
              </Card.Text>
              <Card.Link href="https://www.bkreview.org/plus/open-window-at-3pm-when-i-was-seven-maya-salameh/">Read Here</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={gentleman} />
            <Card.Body>
              <Card.Text>
              Maya Salameh.
              </Card.Text>
              <Card.Text>
              A GENTLEMAN IS SIMPLY A PATIENT WOLF. Published in Asian American Writers' Workshop
              </Card.Text>
              <Card.Link href="https://aaww.org/a-gentleman-is-simply-a-patient-wolf/">Read Here</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={artery} />
            <Card.Body>
              <Card.Text>
              Maya Salameh.
              </Card.Text>
              <Card.Text>
              How to Braid an Artery. Published in POETRY Magazine. 
              </Card.Text>
              <Card.Link href="https://www.poetryfoundation.org/poetrymagazine/poems/156415/how-to-braid-an-artery ">Read Here</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        </Row>

      </Container>
      </div>
      
  );
}

export default Collection;


/*
<div class="container" style={{marginTop: 15 }} >
        <h1>Collection</h1>
      </div>

      <div class="container" >
        <div class="row align-items-center">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded"
              src={trisha}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h2 class="font-weight-light">Trisha Litong</h2>
            <p>
            Trisha Litong (she/her) is a Product Design senior and Mechanical Engineering 
            coterm at Stanford. She is a second-generation Filipino American and was born 
            in Texas after her parents migrated there from the Philippines.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded"
              src={maya}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h2 class="font-weight-light">Maya Salameh</h2>
            <p>
            Maya Salameh is a poet fellow of the William Male Foundation and a 
            2016 National Student Poet, America's highest honor for youth poets. 
            She is the winner of the 2022 Etel Adnan Prize, through which her debut 
            poetry collection, HOW TO MAKE AN ALGORITHM IN THE MICROWAVE, will be 
            published in October 2022. Her poems have appeared in POETRY Magazine, 
            The Rumpus, ANMLY, and Asian American Writer's Workshop, among others. 
            Maya is the author of rooh (Paper Nautilus Press 2020).

            </p>
          </div>
        </div>
      </div>
*/
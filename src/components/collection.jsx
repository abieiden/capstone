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

      <p> [Expo Title] is a collection of art created by members of the Stanford community to explore their immigrant identity. 
            As college students, we are inherently in a state of growth, whether it is in our classes widening our understanding, 
            or making decisions that shape our future and who we are. For many of us, this time of exploration has also focused on 
            our immigrant identity. The collection includes poems, essays, paintings, performances, and even computer science projects 
            that share community narratives from many immigrant backgrounds. Through diverse art and multidimensional perspectives, 
            this exhibition presents an opportunity to contextualize and understand a complex topic like immigration. This 
            exhibition creates space for important discourse and encourages viewers to reimagine identity and immigration. 
            But more importantly, [Expo Title] empowers contributors to explore their identity and reclaim their narrative. 
            I hope to present the art exposition near the end of Spring Quarter at White Plaza.</p>

      <p>If you would like to contribute art, please fill out this <a href={"https://forms.gle/6BsFh65SQBXPE8jp7"}>Google Form</a>. 
        If you have any questions, comments, suggestions, or want to get involved with planning, please reach out to Abi Lopez via email abieiden@stanford.edu. 
      </p>


      <Container fluid  >
        <Row >
        <Col>
          <Card>
            <Card.Img variant="top" src={kayumanggi} altt="Clip from Kayumanggi Video" />
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
            <Card.Img variant="top" src={RBApic} alt="Picture of text from Trisha's RBA" />
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
            <Card.Img variant="top" src={lemonade} alt="Picture of text from THE PRESBYTERIAN CHURCH ON EUCLID DOESN'T SELL LEMONADE ANYMORE." />
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
            <Card.Img variant="top" src={window} alt="Picture of text from Open Window at 3PM When I Was Seven."/>
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
            <Card.Img variant="top" src={gentleman} alt="Picture of text from A GENTLEMAN IS SIMPLY A PATIENT WOLF."  />
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
            <Card.Img variant="top" src={artery} alt="Picture of text from How to Braid an Artery." />
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
        <Row>
          <Col>
          <Card>
            <Card.Img variant="top" src={coloringcambodia} alt="Cambodian Woman" />
            <Card.Body>
              <Card.Text>
              Vanessa Lakana Veak and Victoria Sampors Chiek 
              </Card.Text>
              <Card.Text>
              Coloring Cambodia is an archival project comprising interviews and portraits of 
              women of Indigenous Khmer ancestry speaking about their personal experiences with 
              colorism within the Cambodian community.
              </Card.Text>
              <Card.Link href="https://www.coloringcambodia.com/">Learn More Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </div>
      
  );
}

export default Collection;
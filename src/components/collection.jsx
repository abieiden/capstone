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
import coloringcambodia from '../assets/coloringcambodia.jpg'
import bluegirlpic from '../assets/bluegirl.jpg'
import bluegirldoc from '../assets/bluegirldoc.pdf'
import awaculturalphotoshoot from '../assets/awaculturalphotoshoot.jpg'
import rachelculturalphotoshoot from '../assets/rachelculturalphotoshoot.jpg'
import walmartparking from '../assets/walmartparking.jpg'
import escribo from '../assets/escribo.jpg'
import enelfin from '../assets/enelfin.jpg'
import photochildhood from '../assets/astillphotographofmychildhood.jpg'

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
            I hope to present the art exposition near the end of Spring Quarter.</p>

      <p>If you would like to contribute art, please fill out this <a href={"https://forms.gle/6BsFh65SQBXPE8jp7"}>Google Form</a>. 
        If you have any questions, comments, suggestions, or want to get involved with planning, please reach out to Abi Lopez via email abieiden@stanford.edu. 
      </p>


      <Container fluid >
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
        <Row style={{marginTop: 15 }}>
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
            <Card.Img variant="top" src={coloringcambodia} alt="Cambodian Woman" />
            <Card.Body>
              <Card.Text>
              Vanessa Lakana Veak and Victoria Sampors Chiek.
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
          <Col>
          <Card>
            <Card.Img variant="top" src={bluegirlpic} alt="Picture of Blue Girl text" />
            <Card.Body>
            <Card.Text>
            Janica Mendillo.
            </Card.Text>
            <Card.Text>
            Blue Girl explores a middle school girl's first period. It reflects on the mysteries of 
            the body young women exist in and the inability to speak about its phenomena with their immigrant mothers.
            </Card.Text>
            <Card.Link href={bluegirldoc}>Read Here</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row style={{marginTop: 15 }}>
        <Col>
          <Card>
            <Card.Img variant="top" src={awaculturalphotoshoot} alt="AWA Cultural Photoshoot" />
            <Card.Body>
              <Card.Text>
              Rachel Koo and AWA.
              </Card.Text>
              <Card.Text>
              AWA provides a space for Asian and Asian-American womxn to gather in solidarity with one another and 
              deepen our understanding of ethnic identity while creating lasting bonds. AWA is an ethnic, cultural 
              and social organization that exists to raise awareness about Asian womxn identity and gender-based violence, 
              standing in solidarity with other womxn of color on campus. 


              The Cultural photoshoot is both a social art piece and communal bonding event that celebrates the multicultural 
              backgrounds of the Asian Women's Alliance family whether it be in the form of representing cultures from home, 
              national pride, personal identity, and etc. This photoshoot aims to create a community of open-mindedness and 
              acceptance across the diverse “Asian/Asian American” label that we live under, pushing us to explore our cultural 
              identity especially in relations to cultural diversity in the United States. Our outfits may vary from person to person, 
              but the goal is to celebrate our own cultures and learn about each other's cultures in a respectful way. These may 
              include flags, traditional cultural wear, cultural patterns, flag colors, and etc. We will wear uniform Asian Women's 
              Alliance masks as a representation of the political cultural identity of Asian Women in the US especially in protest of 
              the rise in Asian hate this past year and throughout the pandemic. These masks will be symbolic of Asian women and their 
              struggles to find their voices to speak up against societal expectations as well as the defiance against Asian hate during 
              the pandemic. We will host a teach-in for this photoshoot to explore the boundaries of embracing one's cultural identity 
              through a conversation about Cultural Appreciation vs Cultural Appropriation. This conversation aims to critically examine 
              our unique individual relationships with our own cultures and how they may differ from person to person.
              </Card.Text>
              <Card.Link href="https://asianwomensalliance.weebly.com/">Learn about AWA Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          <Row style={{marginTop: 15 }}>
          <Col>
          <Card>
            <Card.Img variant="top" src={rachelculturalphotoshoot} alt="Picture of Rachel Koo from Cultural Photoshoot" />
            <Card.Body>
              <Card.Text>
               Rachel Koo
              </Card.Text>
              <Card.Text>
              Rachel Koo wearing a traditional Korean Hanbok top with a western tulle skirt to symbolize her bicultural identity as 
              part of the AWA cultural photoshoot.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={walmartparking} alt="Walmart Parking Lot Painting" />
            <Card.Body>
              <Card.Text>
              Song Wu.
              </Card.Text>
              <Card.Text>
              Walmart Parking Lot. Oil on canvas, 16" x 20". Created June 11, 2021. 
              A painting of my mom holding me as a child as we stand to take a photo in the Walmart parking lot.
              </Card.Text>
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
            <Card.Img variant="top" src={enelfin} alt="Picture of text from En el Fin" />
            <Card.Body>
              <Card.Text>
              Elvira Prieto.
              </Card.Text>
              <Card.Text>
              En el Fin from SCHOOLING chapter in An (Im)possible Life: Poesía y Testimonio in the Borderlands, published in 2015. 
              </Card.Text>
              <Card.Link href="http://www.elviraprieto.com/">Learn more about Elvira Prieto and her Book Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={escribo} alt="Picture of text from escribo" />
            <Card.Body>
              <Card.Text>
              Elvira Prieto.
              </Card.Text>
              <Card.Text>
              escribo from FAMILIA chapter in An (Im)possible Life: Poesía y Testimonio in the Borderlands, published in 2015. 
              </Card.Text>
              <Card.Link href="http://www.elviraprieto.com/">Learn more about Elvira Prieto and her Book Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={photochildhood} alt="Picture of text from A Still Photograph of My Childhood" />
            <Card.Body>
              <Card.Text>
              Elvira Prieto.
              </Card.Text>
              <Card.Text>
              A Still Photograph of My Childhood from familia chapter in An (Im)possible Life: Poesía y Testimonio in the Borderlands, published in 2015. 
              </Card.Text>
              <Card.Link href="http://www.elviraprieto.com/">Learn more about Elvira Prieto and her Book Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={stop} alt="STOP" />
            <Card.Body>
              <Card.Text>
              Drew Vallero.
              </Card.Text>
              <Card.Text>
              “STOP!” Acrylic on metal panel, 24”x24”. I made this monochrome self portrait as we were sent home for the pandemic in 2020. 
              It serves as a relic of where I was at that time and how seemingly overnight, everything—plans, futures, relationships—halted to a stop.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={matthew} alt="Picture of text from A Still Photograph of My Childhood" />
            <Card.Body>
              <Card.Text>
              Drew Vallero.
              </Card.Text>
              <Card.Text>
              “Matthew,” oil on canvas. This is a portrait of my younger brother that celebrates his youth and the complexities of brown skin in sunlight.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={photochildhood} alt="Picture of text from A Still Photograph of My Childhood" />
            <Card.Body>
              <Card.Text>
              Elvira Prieto.
              </Card.Text>
              <Card.Text>
              A Still Photograph of My Childhood from familia chapter in An (Im)possible Life: Poesía y Testimonio in the Borderlands, published in 2015. 
              </Card.Text>
              <Card.Link href="http://www.elviraprieto.com/">Learn more about Elvira Prieto and her Book Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </div>
      
  );
}

export default Collection;

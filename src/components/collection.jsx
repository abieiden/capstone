import React from "react";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import kayumanggi from '../assets/collection/trishakayumanggi.jpg'
import RBApic from '../assets/collection/trishaRBA.jpg'
import RBApdf from '../assets/collection/TLitong_RBA.pdf'
import gentleman from '../assets/collection/mayagentlemanwolf.jpg'
import lemonade from '../assets/collection/mayalemonade.jpg'
import artery from '../assets/collection/mayaartery.jpg'
import window from '../assets/collection/mayawindow.jpg'
import coloringcambodia from '../assets/collection/coloringcambodia.jpg'
import bluegirlpic from '../assets/collection/bluegirl.jpg'
import bluegirldoc from '../assets/collection/bluegirldoc.pdf'
import awaculturalphotoshoot from '../assets/collection/awaculturalphotoshoot.jpg'
import rachelculturalphotoshoot from '../assets/collection/rachelculturalphotoshoot.jpg'
import walmartparking from '../assets/collection/walmartparking.jpg'
import escribo from '../assets/collection/escribo.jpg'
import enelfin from '../assets/collection/enelfin.jpg'
import photochildhood from '../assets/collection/astillphotographofmychildhood.jpg'
import matthew from '../assets/collection/matthew.jpg'
import stopsign from '../assets/collection/stop.jpg'
import untitledpainting from '../assets/collection/untitledpainting.jpg'
import untitledpaintingdoc from '../assets/collection/untitledpaintingdoc.pdf'
import immigrantties from '../assets/collection/immigrantties.jpg'
import immigranttiesdoc from '../assets/collection/immigranttiesdoc.pdf'
import cantheUSbuychinamoon from '../assets/collection/cantheUSbuychinamoon.jpg'
import respeto1 from '../assets/collection/respeto/respeto1.jpg'
import respeto2 from '../assets/collection/respeto/respeto2.jpg'
import respeto3 from '../assets/collection/respeto/respeto3.jpg'
import respeto4 from '../assets/collection/respeto/respeto4.jpg'
import respeto5 from '../assets/collection/respeto/respeto5.jpg'
import respeto6 from '../assets/collection/respeto/respeto6.jpg'
import respeto7 from '../assets/collection/respeto/respeto7.jpg'
import respeto8 from '../assets/collection/respeto/respeto8.jpg'
import respeto9 from '../assets/collection/respeto/respeto9.jpg'
import respeto10 from '../assets/collection/respeto/respeto10.jpg'
import vines1 from '../assets/collection/vines/vines1.jpg'
import vines2 from '../assets/collection/vines/vines2.JPG'
import vines3 from '../assets/collection/vines/vines3.JPG'
import vines4 from '../assets/collection/vines/vines4.JPG'
import vines5 from '../assets/collection/vines/vines5.jpeg'
import ahumandoelcorazon from '../assets/collection/ahumandoelcorazon.jpg'
import bulaklakan from '../assets/collection/bulaklakan.jpg'

function Collection() {
  return (
    <div className="collection">
      <h1>Collection</h1>

      <p>The Immigrant Art Expo is a collection of art created by members of the Stanford community to explore their immigrant identity. 
            As college students, we are inherently in a state of growth, whether it is in our classes widening our understanding, 
            or making decisions that shape our future and who we are. For many of us, this time of exploration has also focused on 
            our immigrant identity. In this collection, "art" is broadly defined as a medium used to communicate a story, identity, emotion, etc.
            The collection includes poems, essays, paintings, performances, and even computer science projects 
            that share community narratives from many immigrant backgrounds. Through diverse art and multidimensional perspectives, 
            this exhibition presents an opportunity to contextualize and understand a complex topic like immigration. This 
            exhibition creates space for important discourse and encourages viewers to reimagine identity and immigration. 
            But more importantly, The Immigrant Art Expo empowers contributors to explore their identity and reclaim their narrative. 
            We will be printing an Immigrant Art Zine for all contributors near the end of Spring Quarter. 
                        
            </p>

      <p>To be a part of the <strong>Immigrant Art Zine</strong>, please fill out this <a href={"https://forms.gle/6BsFh65SQBXPE8jp7"}>Google Form</a>.  by Wednesday, May 18th. 
      We welcome submissions from all Stanford students, faculty, and staff.
      </p>

      <p>We will also be presenting a part of the <strong>Immigrant Art Collection</strong> with the Cantor Spring Arts Fair. 
        Please <a href={"https://bit.ly/spring_museum_night"}>rsvp</a> and join us in celebrating Immigrant Identity and Narratives at Stanford.
      </p>
      
      <p>
        If you have any questions, comments, suggestions, or want to get involved with planning, please reach out to Abi Lopez via email abieiden@stanford.edu. 
      </p>

      <Container fluid >
        <Row style={{marginTop: 15 }}>
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
            <Card.Img variant="top" src={stopsign} alt="STOP painting" />
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
            <Card.Img variant="top" src={matthew} alt="Matthew painting" />
            <Card.Body>
              <Card.Text>
              Drew Vallero.
              </Card.Text>
              <Card.Text>
              “Matthew,” oil on canvas, 16”x20”. This is a portrait of my younger brother that celebrates his youth and the complexities of brown skin in sunlight.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={untitledpainting} alt="Untitled Painting" />
            <Card.Body>
              <Card.Text>
              Gabby Mendoza 
              </Card.Text>
              <Card.Text>
              "Untitled," painting. Duterte's rule over the Philippines has negatively impacted many activists of any sector. 
              This piece gives a sense of how being red-tagged (blacklisted by the government and targeted) can feel with 24/7 surveillance watching every move someone makes.
              </Card.Text>
              <Card.Link href={untitledpaintingdoc}>See Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row style={{marginTop: 15 }}>
        <Col>
          <Card>
            <Card.Img variant="top" src={immigrantties} alt="Immigrant Ties Sculpture" />
            <Card.Body>
              <Card.Text>
              Jasmine Shih.
              </Card.Text>
              <Card.Text>
              Immigrant Ties. 3D work (8 x 8 x 11.5 inches) created with foam boards, threads, and hardware washers, April 19, 2022. I created this 3D work for the personal geography project 
              in the Design of Data class at the d.school. It tells the story of how my immigrant experience has shaped my identity over the last decade as well as the dilemmas 
              I constantly face as an immigrant with ties to both Taiwan and the United States. My roots run deep in Taiwan, where I was born and raised until 15, yet moving to 
              the United states opened doors to new opportunities, people, and ways of thinking that I would be sad to lose. "Which side do I belong more" and "where should I 
              settle in the future" are the questions that I've never stopped asking myself.
              </Card.Text>
              <Card.Link href={immigranttiesdoc}>See Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          </Row>
        <Row style={{marginTop: 15 }}>
        <Col>
          <Card>
            <Card.Img variant="top" src={RBApic} alt="Text from Trisha's RBA" />
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
            <Card.Img variant="top" src={lemonade} alt="Text from THE PRESBYTERIAN CHURCH ON EUCLID DOESN'T SELL LEMONADE ANYMORE." />
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
          <Col>
          <Card>
            <Card.Img variant="top" src={bluegirlpic} alt="Blue Girl poem text" />
            <Card.Body>
            <Card.Text>
            Janica Mendillo.
            </Card.Text>
            <Card.Text>
            Written June, 11th, 2021. Blue Girl explores a middle school girl's first period. It reflects on the mysteries of 
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
              Rachel Koo in AWA Cultural Photoshoot.
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

              Photographer: Sherry Mestan, @sherrymestan on Instagram/Facebook/other social media platforms 
              </Card.Text>
              <Card.Link href="https://asianwomensalliance.weebly.com/">Learn about AWA Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          <Row style={{marginTop: 15 }}>
          <Col>
          <Card>
            <Card.Img variant="top" src={rachelculturalphotoshoot} alt="Rachel Koo in AWA Cultural Photoshoot" />
            <Card.Body>
              <Card.Text>
               Rachel Koo
              </Card.Text>
              <Card.Text>
              Rachel Koo wearing a traditional Korean Hanbok top with a western tulle skirt to symbolize her bicultural identity as 
              part of the AWA cultural photoshoot.

              Photographer: Sherry Mestan, @sherrymestan on Instagram/Facebook/other social media platforms
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
            <Card.Img variant="top" src={bulaklakan} alt="Trisha Litong in the Pilipinx Cultural Night 2019 Performance" />
            <Card.Body>
              <Card.Text>
              Trisha Litong.
              </Card.Text>
              <Card.Text>
              Trisha Litong in the Pilipinx Cultural Night 2019 Performance. "Bulaklakan" refers to the flowers that flourish the floral garlands. This dance is dedicated to the Virgin Mary and performed in May for Holy Week.
              </Card.Text>
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
        </Row>
        <Row style={{marginTop: 15 }}>
        <Col>
        <Card>
        <Card.Body>
            <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto1}
            alt="…respeto… 1"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto2}
            alt="…respeto… 2"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto3}
            alt="…respeto… 3"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto4}
            alt="…respeto… 4"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto5}
            alt="…respeto… 5"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto6}
            alt="…respeto… 6"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto7}
            alt="…respeto… 7"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto8}
            alt="…respeto… 8"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto9}
            alt="…respeto… 9"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={respeto10}
            alt="…respeto… 10"
          />
          <Carousel.Caption>
            <h5>…respeto…</h5>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <Card.Text>
            Cecilia Valencia
            </Card.Text>
            <Card.Text>
            ...respeto... These portraits were taken for a photography course during the Spring of 2021. Through these images, I hope to tell a story about respect, 
            visibility, and anonymity. Cleaning staff at Stanford University, especially subcontracted workers, are often overworked and disregarded. 
            The ongoing COVID-19 pandemic has exacerbated this relationship.
            </Card.Text>
          </Card.Body>
          </Card>
      </Col>

        <Col>
        <Card>
        <Card.Body>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={vines1}
                  alt="vines 1"
                />
                <Carousel.Caption>
                  <h5>…respeto…</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={vines2}
                  alt="vines 2"
                />
                <Carousel.Caption>
                  <h5>vines</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={vines3}
                  alt="vines 3"
                />
                <Carousel.Caption>
                  <h5>vines</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={vines4}
                  alt="vines 4"
                />
                <Carousel.Caption>
                  <h5>vines</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={vines5}
                  alt="vines 5"
                />
                <Carousel.Caption>
                  <h5>vines</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Card.Text>
            Cecilia Valencia
            </Card.Text>
            <Card.Text>
            Vines. A stop sign at the intersection of Stanford and a NO OUTLET, Esmeralda, Sandra, Jazmin, Cecilia--or some variation of these.
            </Card.Text>
          </Card.Body>
          </Card>
      </Col>
      <Col>
      <Card>
            <Card.Img variant="top" src={ahumandoelcorazon} alt="=Ahumando el corazón painting" />
            <Card.Body>
              <Card.Text>
              Cecilia Valencia
              </Card.Text>
              <Card.Text>
              Ahumando el corazón. Water based oil paint on 16” x 20” canvas. This is a collage-portrait of my grandparents. They are painted 
              amongst religious and fashion iconography and the smoke of the Popocatépetl.
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
      </Row>


        <Row style={{marginTop: 15 }}>
        <Col>
          <Card>
            <Card.Img variant="top" src={enelfin} alt="Text from En el Fin poem" />
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
            <Card.Img variant="top" src={escribo} alt="Text from escribo poem" />
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
            <Card.Img variant="top" src={photochildhood} alt="Text from A Still Photograph of My Childhood poem" />
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
        <Row style={{marginTop: 15 }}>
          <Col>
          <Card>
            <Card.Img variant="top" src={cantheUSbuychinamoon} alt="Can the United States buy China Moon? Still from video" />
            <Card.Body>
              <Card.Text>
              Christina Shen.
              </Card.Text>
              <Card.Text>
              美国能买到中国月并吗? Can the United States buy China Moon? Created March 1st, 2019. 
              This video meditates on translation and intergenerational understanding through my WeChat text conversations with my grandmother, who lives in Shanghai.
              </Card.Text>
              <Card.Link href="https://www.youtube.com/watch?v=Rd-DEr2X0SQ">Watch Here</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row style={{marginTop: 15 }}>
        <Col>
          <Card>
            <Card.Img variant="top" src={window} alt="Text from Open Window at 3PM When I Was Seven."/>
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
            <Card.Img variant="top" src={gentleman} alt="Text from A GENTLEMAN IS SIMPLY A PATIENT WOLF."  />
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
            <Card.Img variant="top" src={artery} alt="Text from How to Braid an Artery." />
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

import React from "react";
import trishalitong from '../assets/trishalitong.jpg'
import mayasalameh from '../assets/mayasalameh.jpg'
import victoriachiek from '../assets/victoriachiek.jpg'
import vanessaveak from '../assets/vanessaveak.jpg'

function Contributors() {
    return (
        <div className="contributors">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded"
                src={trishalitong}
                alt="Trisha Litong Portait"
                style={{width: 500, height: 'auto'}}
              />
            </div>
            <div class="col-lg-6">
              <h1 class="font-weight-light">Trisha Litong</h1>
              <p>
              Trisha Litong (she/her) is a Product Design senior and Mechanical Engineering 
            coterm at Stanford. She is a second-generation Filipino American and was born 
            in Texas after her parents migrated there from the Philippines. 
              </p>
            </div>
          </div>
        </div>
        <div class="container" style={{marginTop: 15 }}>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded"
                src={mayasalameh}
                alt="Maya Salameh Portait"
                style={{width: 500, height: 'auto'}}
              />
            </div>
            <div class="col-lg-6">
              <h1 class="font-weight-light">Maya Salameh</h1>
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
        <div class="container" style={{marginTop: 15 }}>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded"
                src={victoriachiek}
                alt="Victoria Sampors Chiek  Portait"
                style={{width: 500, height: 'auto'}}
              />
            </div>
            <div class="col-lg-6">
              <h1 class="font-weight-light">Victoria Sampors Chiek</h1>
              <p>
              Victoria is a current B.A. candidate in Anthropology and B.A. Candidate for 
              Art Practice at Stanford University graduating in 2023, and a 2020 Chappell 
              Lougee Scholar. Her research focuses on colorism and indigeneity in Cambodia 
              as well as Cambodian diaspora and transnational experiences. Their interests 
              comprise resistance against inequity around the globe and vernacularization of 
              culture in the diaspora to vocal performance and figure skating. She has also 
              worked with Cambodian Genocide narrative archival, her most recent project being 
              assisting with the 40th year anniversary exhibit at the Tuol Sleng Genocide 
              Museum in Phnom Penh. Victoria lived in Saugus and Lynn, Massachusetts where she 
              now likes to spend her free time oil painting and cooking with friends.
              </p>
            </div>
          </div>
        </div>
        <div class="container" style={{marginTop: 15 }}>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded"
                src={vanessaveak}
                alt="Vanessa Lakana Veak Portait"
                style={{width: 500, height: 'auto'}}
              />
            </div>
            <div class="col-lg-6">
              <h1 class="font-weight-light">Vanessa Lakana Veak</h1>
              <p>
              Vanessa is a current M.A. and B.A. candidate in Sociology on the Data Science, 
              Markets and Management Track with a double minor in Human Rights and Education at 
              Stanford University with an anticipated graduation year of 2023, and a 2020 Chappell 
              Lougee Scholar. Her research interests primarily focus on advocating for indigenous 
              rights in Southeast Asia, the LGBTQ+ community, education equity through policy and 
              outreach for marginalized communities, and all of its intersectionality. Social identity 
              being constantly accompanied by the social structure and contexts surrounding it further 
              inspires Vanessa to navigate how colorism plays an integral aspect in navigating their own 
              life, developing research, and position in academia. Vanessa grew up predominantly in Fairfield, 
              Ohio, eating yao hon and lychees with family on special occasions, while thinking about the next 
              time they can go rock climbing.
              </p>
            </div>
          </div>
        </div>
      </div>
        );
}

export default Contributors;
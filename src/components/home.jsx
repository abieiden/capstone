import React from "react";
import Button from 'react-bootstrap/Button'
import abipic from '../assets/abiparis.jpg'
import maya from '../assets/maya.jpg'

function Home() {
  return (
    <div class = "home">
       <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded"
              src={abipic}
              alt="Flowers"
              style={{width: 300, height: 'auto'}}
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Abi</h1>
            <p>
            Abi Lopez (she/her) is a daughter of Mexican immigrants from Southeast LA. 
            She's currently completing her undergraduate degree at Stanford University in 
            Electrical Engineering with a minor in Human Rights. She strives to leverage her 
            education to advance immigrant rights, racial justice, and environmental justice. 
            Her current project is creating an immigration art exposition at Stanford for students 
            to share their journey exploring their immigrant identity through art.
            </p>
            <Button variant="outline-secondary" href="/about">Read Bio</Button>
          </div>
        </div>
      </div>

      <div class="container" style={{marginTop: 15 }}>
        <div class="row align-items-center">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded"
              src={maya}
              alt="Art Work"
              style={{width: 300, height: 'auto'}}
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Exhibition</h1>
            <p>
              asdad
            </p>
            <Button variant="outline-secondary" href="/collection">See Collection</Button>
          </div>
          
        </div>
      </div>
    </div>   
  );
}

export default Home;
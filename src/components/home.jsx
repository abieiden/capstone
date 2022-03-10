import React from "react";
import Button from 'react-bootstrap/Button'
import abilopez from '../assets/abiportrait.jpg'
import colors from '../assets/colors.jpg'
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div class = "home">
       <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded"
              src={abilopez}
              alt="Abi Lopez Portrait"
              style={{width: 500, height: 'auto'}}
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">About Abi</h1>
            <p>
            Abi Lopez (she/her) is a daughter of Mexican immigrants from Southeast LA. 
            She's currently completing her undergraduate degree at Stanford University in 
            Electrical Engineering with a minor in Human Rights. She strives to leverage her 
            education to advance immigrant rights, racial justice, and environmental justice. 
            Her current project is creating an immigration art exposition at Stanford for students 
            to share their journey exploring their immigrant identity through art.
            </p>
            <Button variant="outline-secondary" onClick={() => navigate("about")}>Read Bio</Button>
          </div>
        </div>
      </div>

      <div class="container-fluid" style={{marginTop: 15}}>
        <div class="row align-items-center">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded"
              src={colors}
              alt="Art Work"
              style={{width: 500, height: 'auto'}}
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Exhibition</h1>
            <p>
            [Expo Title] is a collection of art created by members of the Stanford community to explore their immigrant identity. 
            The collection includes poems, essays, paintings, performances, and even computer science projects 
            that share community narratives from many immigrant backgrounds. This exhibition creates space for important 
            discourse and encourages viewers to reimagine identity and immigration. But more importantly, [Expo Title] 
            empowers contributors to explore their identity and reclaim their narrative. 
            I hope to present the art exposition near the end of Spring Quarter at White Plaza.

            </p>
            <Button variant="outline-secondary" onClick={() => navigate("collection")}>See Collection</Button>
          </div>
          
        </div>
      </div>
    </div>   
  );
}

export default Home;
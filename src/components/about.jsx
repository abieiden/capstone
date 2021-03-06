import React from "react";
import abipic from '../assets/contributors/abiportrait.jpg'

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded"
              src={abipic}
              alt="Abi Lopez"
              style={{width: 500, height: 'auto'}}
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Abi Lopez</h1>
            <p>
            Abi Lopez (she/her) is a daughter of Mexican immigrants from Southeast LA. 
            She's currently completing her undergraduate degree at Stanford University in 
            Electrical Engineering with a minor in Human Rights. She strives to leverage her 
            education to advance immigrant rights, racial justice, and environmental justice. 
            Her current project is creating an immigration art exposition at Stanford for students 
            to share their journey exploring their immigrant identity through art. At the Stanford 
            Daily newspaper, Abi is a part of the Tech Team and Data Team, where she utilizes technology 
            in journalism to elevate diverse voices and stories. As the former Policy Discussions Co-Director
            in Stanford in Government, Abi organized around 30 university clubs to bring Ayọ Tometi, Black 
            Lives Matter Co-Founder, and Blair Imani, critically-acclaimed historian, to encourage 
            discussion for racial justice. In her spare time, she enjoys reading novels, painting 
            colorful pieces, and discovering new music. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

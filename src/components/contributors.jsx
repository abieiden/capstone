import React from "react";
import trisha from '../assets/trisha.jpg'
import maya from '../assets/maya.jpg'

function Contributors() {
    return (
        <div className="contributors">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded"
                src={trisha}
                alt="Trisha Litong"
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
                src={maya}
                alt="Maya Salameh"
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
      </div>
        );
}

export default Contributors;

/*
Kayumanggi, meaning "brown-skinned" in Tagalog, is a non-audition 
Pilipinx cultural arts group at Stanford. We perform traditional Pilipinx folk 
dances that are as diverse as the many different islands in the Philippines. 
Kayu aims to promote awareness of Pilipinx culture through dance, art, music, 
and drama. We hope to create an outlet for self-exploration and discovery, 
encouraging inclusiveness and openness not just among Pilipinx-Americans, but with 
the greater Stanford and Bay Area community.
*/
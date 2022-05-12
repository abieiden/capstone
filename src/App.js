import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Collection, Contributors, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <div class="container-fluid" style={{maxWidth: 1400}}>
      <div className="navigation">
        <nav class="navbar navbar-collapseOnSelect navbar-expand-md navbar-light" >
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <span class="h3" >
                Exploring Immigrant Identity Through Art
              </span>
            </Link>
            <div class="navbar-toggler" aria-controls="responsive-navbar-nav"></div>
            <div class="navbar-collapse" id="responsive-navbar-nav">
              <ul class="navbar-nav ml-auto">
                <li>
                  <Link class="nav-link" to="/">
                    <span class="h4">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="about">
                    <span class="h4">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="collection">
                    <span class="h4">
                      Collection
                    </span>
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="contributors">
                    <span class="h4">
                      Contributors
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="container-fluid" style={{maxWidth: 1350}}>
      <div class="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="about" element={<About />} />
          <Route path="contributors" element={<Contributors />} />
        </Routes>
      </div>
      </div>
      <div class="footer">
        <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import { Home, About, Collection, Contributors } from "./components";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <nav class="navbar navbar-expand navbar-light" >
          <div class="container-fluid" style={{maxWidth: 1500}}>
            <Link class="navbar-brand" to="/capstone">
              <span class="h3" style={{}}>
                Exploring Immigrant Identity Through Art
              </span>
            </Link>
            <div>
              <ul class="navbar-nav ml-auto">
                <li>
                  <Link class="nav-link" to="/capstone">
                    <span class="h4">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/capstone/about">
                    <span class="h4">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/capstone/collection">
                    <span class="h4">
                      Collection
                    </span>
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/capstone/contributors">
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
      <div class="main">
        <Routes>
          <Route exact path="/capstone" exact component={Home} />
          <Route path="/capstone/collection" exact component={Collection} />
          <Route path="/capstone/about" exact component={About} />
          <Route path="/capstone/contributors" exact component={Contributors} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


/*

  <Link class="nav-link" to="/">
                    <span class="h4">
                      Home
                    </span>
                    <span class="sr-only">(current)</span>
                  </Link>

import React from 'react';
import './App.css';
import { Route ,Link, Routes} from "react-router-dom";
import Home from "./components/home"
import Collection from "./components/collection"
import About from "./components/about"
//import { Home, About, Collection } from "./components";

function App() {
    return (
      <div className = "App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="collection" element={<Collection />} />
            <Route exact path="about" element={<About />} />
          </Routes>
          <div className="navigation">
                <Link to="/"> </Link>
                  <ul>
                    <li>
                      <Link to="/"> </Link>
                    </li>
                    <li>
                      <Link to="/collection"></Link>
                    </li>
                    <li >
                      <Link to="/about"></Link>
                    </li>
                  </ul>
          </div>
      </div>
    );
    }

export default App;*/

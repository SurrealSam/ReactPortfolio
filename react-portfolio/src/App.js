import React from 'react';
import ProjectsPage from "./components/projects";
import ContactPage from "./components/contact";
import BioPage from "./components/biocard";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MenuHeader from "../src/components/menuheader";

import './App.css';

function App() {

  return (
    <Router>
      <MenuHeader />
      <Switch>
      <Route exact path="/Projects" component={ProjectsPage} />
      <Route exact path="/Contact" component={ContactPage} />
      <Route exact path="/Bio" component={BioPage} />
      <Route path="/" component={BioPage} />
      </Switch>
    </Router>

  );
}

export default App;


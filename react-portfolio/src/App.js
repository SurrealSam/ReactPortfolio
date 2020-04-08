import React from 'react';
import MainPage from "./components/pages/main";
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router>
    <Route exact path="/" component={MainPage} />
    </Router>
    </div>
  );
}

export default App;


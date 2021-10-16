import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header/header';

import Map from "./heatmap/map";

import "./styles.css";

import Homepage from './homepage';
import Resources from './resources';

function App() {
  return (
    <Router>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/heatmap" component={Map} />
        <Route path="/resources" component={Resources} />
    </Router>
)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

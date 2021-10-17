import React from "react";
import Map from "./heatmap/map";
import ReactDOM from "react-dom";
import Homepage from './homepage';
import Resources from './resources';
import Header from './header/header';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
        <Header />
        <Route exact path="/" component={Map} />
        {/* <Route path="/resources" component={Resources} /> */}
    </Router>
)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

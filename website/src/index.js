import React from "react";
import Map from "./heatmap/map";
import ReactDOM from "react-dom";
import Heatmap from './heatmap/heatmap';
import Header from './header/header';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
        <Header />
        <Route exact path="/" component={Map} />
        <Route path="/recommendations" component={Heatmap} />
    </Router>
)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

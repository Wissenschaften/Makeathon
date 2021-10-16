import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header/header';

import Map from "./heatmap/map";

import "./styles.css";

function App() {
  return (
    <>
        <Header />
        <Map />
    </>
)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

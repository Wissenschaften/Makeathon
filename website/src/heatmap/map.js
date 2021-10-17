import React from "react";
import geojson from "./data.json";
import "../../node_modules/leaflet/dist/leaflet.css";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 40.7397,
      lng: -73.9929,
      zoom: 12,
      position: [40.7397, -73.9929]
    };
  }

  render() {
    return (
      <div class="heatmapContainer">
        <div class="mapArea" style={{height: '85vh', width: '150vh'}}>
          <LeafletMap center={this.state.position} zoom={this.state.zoom}>
            <HeatmapLayer
              points={geojson}
              longitudeExtractor={(m) => m[1]}
              latitudeExtractor={(m) => m[0]}
              intensityExtractor={(m) => parseFloat(m[2])}
              max={100}
              minOpacity={0.4}
            />

            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
          </LeafletMap> 
        </div>
        <div class="infoArea">
          <div class="starsArea" style={{width: '42vh'}}>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <p>Score: 2.6176367275604493</p>
            <p>Expected driving time: 30min</p>
            <p>Number of the taxis in the area: 38</p>
          </div>
          <div class="commentsArea">
            
          </div>
          <div class="buttonArea">
            <textarea id="w3review" name="w3review" rows="4" cols="36" placeholder="Your comments are valuable, plase tols us what you thought"></textarea>
            <button class="button">Button</button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Map;

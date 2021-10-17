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
      zoom: 10,
      position: [40.7397, -73.9929]
    };
  }

  render() {
    return (
      <div class="heatmapContainer">
        <div class="mapArea" style={{height: '85vh', width: '210vh'}}>
          <LeafletMap center={this.state.position} zoom={this.state.zoom}>
            <HeatmapLayer
              points={geojson}
              longitudeExtractor={(m) => m[1]}
              latitudeExtractor={(m) => m[0]}
              intensityExtractor={(m) => parseFloat(m[2])}
              max={100}
              minOpacity={0.3}
            />

            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
          </LeafletMap> 
        </div>
      </div>
      
    );
  }
}

export default Map;

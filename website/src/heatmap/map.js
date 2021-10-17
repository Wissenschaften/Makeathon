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
      <LeafletMap center={this.state.position} zoom={this.state.zoom}>
        <HeatmapLayer
          points={geojson}
          longitudeExtractor={(m) => m[0]}
          latitudeExtractor={(m) => m[1]}
          intensityExtractor={(m) => parseFloat(m[1])}
          max={100}
          minOpacity={0.3}
        />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    );
  }
}

export default Map;

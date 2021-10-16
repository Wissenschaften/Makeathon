import React from "react";
import { geojson } from "./atd";
import "../../node_modules/leaflet/dist/leaflet.css";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 48.1496,
      lng: 11.5656,
      zoom: 12,
      position: [48.1496, 11.5656]
    };
  }

  render() {
    return (
      <LeafletMap center={this.state.position} zoom={this.state.zoom}>
        <HeatmapLayer
          points={geojson.features}
          longitudeExtractor={(m) => m.geometry.coordinates[0]}
          latitudeExtractor={(m) => m.geometry.coordinates[1]}
          intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
          max={100}
          minOpacity={0.2}
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
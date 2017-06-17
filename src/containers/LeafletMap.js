import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from './AllMarkers'

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [39.750809, -104.996810],
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.locations.length !== 0) {
      const newLocation = nextProps.locations[nextProps.locations.length - 1]
      this.alterMapCenter(newLocation)
    }
  }

  alterMapCenter(newLocation) {
    const { lat, lng } = newLocation;
    this.setState({ center: [lat, lng] });
  }

  render() {
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={ this.state.center }
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
          animate={true}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <AllMarkers />
          {/* <Polygon bounds={ this.props.polygon } /> */}
        </Map>
      </div>
    );
  }
}

export default LeafletMap;

/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker'
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';

class AllMarkers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      polygon: [],
    };
    this.handlePolygon = this.handlePolygon.bind(this);
  }

  handlePolygon(clickedVals) {
    if(JSON.stringify(this.state.polygon).includes(JSON.stringify(clickedVals))) {
      const filteredPolys = this.state.polygon.filter(latLng => JSON.stringify(clickedVals) !== JSON.stringify(latLng))
      this.setState({ polygon: filteredPolys })
    } else {
      this.setState({ polygon: this.state.polygon.concat([clickedVals]) })
    }
  }

  render() {
    const markerArray = this.props.locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          handleClick={ this.handlePolygon }
        />
      )
    })

    return (
      <div className="paths-container">
        {markerArray}
        <Polygon color="blue" positions={ this.state.polygon } />
      </div>
    );
  }
}

export default AllMarkers;

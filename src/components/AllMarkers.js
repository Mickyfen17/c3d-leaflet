/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker'
import { Polygon } from 'react-leaflet';

class AllMarkers extends Component {

  handlePolygon(clickedVals) {
    if(JSON.stringify(this.props.polygon).includes(JSON.stringify(clickedVals))) {
      this.props.removePolygonLink(clickedVals);
    } else {
      this.props.addPolygonLink(clickedVals);
    }
  }

  render() {
    const markerArray = this.props.locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          handleClick={ (clickedVals) => this.handlePolygon(clickedVals) }
        />
      )
    })

    return (
      <div className="paths-container">
        {markerArray}
        <Polygon color="blue" positions={ this.props.polygon } />
      </div>
    );
  }
}

export default AllMarkers;

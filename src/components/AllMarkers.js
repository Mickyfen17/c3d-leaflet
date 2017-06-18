/*eslint-disable no-unused-vars*/
import React from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker'
import { Polygon } from 'react-leaflet';

const AllMarkers = ({ polygon, locations, removePolygonLink, addPolygonLink }) => {

  const handlePolygon = (clickedVals) => {
    if(JSON.stringify(polygon).includes(JSON.stringify(clickedVals))) {
      removePolygonLink(clickedVals);
    } else {
      addPolygonLink(clickedVals);
    }
  }

  const markerArray = locations.map((marker, i) => {
    return (
      <MapMarker
        key={i}
        location={[+marker.lat, +marker.lng]}
        name={marker.name}
        handleClick={ (clickedVals) => handlePolygon(clickedVals) }
      />
    )
  })

  return (
    <div className="paths-container">
      {markerArray}
      <Polygon color="blue" positions={ polygon } />
    </div>
  );
}

export default AllMarkers;

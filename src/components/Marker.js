import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet'
import tealdot from '../imgs/tealdot.svg'

class MapMarker extends Component {

  render() {
    const { handleClick, name, location } = this.props;
    const icon = L.icon({
      iconUrl: tealdot,
      iconSize: [15, 15]
    });

    return (
      <div className="marker-container">
          <Marker
            position={location}
            icon={icon}
            onClick={ () => handleClick(location) }
          >
            <Tooltip
              sticky
              interactive
            >
              <div>
                <h4>{name}</h4>
              </div>
            </Tooltip>
          </Marker>
        </div>
    )
  }
}

export default MapMarker;

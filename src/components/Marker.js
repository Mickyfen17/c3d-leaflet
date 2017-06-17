import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet'
import tealdot from '../imgs/tealdot.svg'

class MapMarker extends Component {

  render() {
    let icon = L.icon({
      iconUrl: tealdot,
      iconSize: [15, 15]
    });

    return (
      <div className="marker-container">
          <Marker
            position={this.props.location}
            icon={icon}
            onClick={ () => this.props.handleClick(this.props.location) }
          >
            <Tooltip
              sticky
              interactive
            >
              <div>
                <h4>{this.props.name}</h4>
                <h4>{this.props.location[0]}</h4>
                <h4>{this.props.location[1]}</h4>
              </div>
            </Tooltip>
          </Marker>
        </div>
    )
  }
}

export default MapMarker;

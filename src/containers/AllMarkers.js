/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/polygonActions';

import AllMarkers from '../components/AllMarkers'

const mapStateToProps = (state) => {
  return {
    locations: state.Locations.data,
    polygon: state.Polygon.polygonArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);

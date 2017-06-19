import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import FormContainer from '../containers/FormContainer';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }
  getLocations() {
    this.props.fetchAllLocations();
  }
  render() {
    const { locations } = this.props;
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap locations={locations} />
        <Alert
          stack={{ limit: 3 }}
          position="top"
          timeout={ 4000 }
          effect='stackslide'
        />
      </div>
    );
  }
}

export default App;

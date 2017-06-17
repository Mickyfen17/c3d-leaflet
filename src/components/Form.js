import React, { Component } from 'react';
import Alert from 'react-s-alert';

class Form extends Component {
  submitForm(e, data) {
    const { lat, lng } = data;
    e.preventDefault();

    if(this.validLat(lat) && this.validLng(lng)) {
      this.props.addNewLocation(data);
    } else {
      Alert.error('Please enter a valid Lat & Lng value');
    }
  }

  validLat(lat) {
    return isFinite(lat) && Math.abs(lat) <= 90;
  }

  validLng(lng) {
    return isFinite(lng) && Math.abs(lng) <= 180;
  }

  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"/>
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: parseFloat(this.lat.value),
            lng: parseFloat(this.lng.value)
          })}
        >
            Save
        </button>
      </form>
    );
  }
}


export default Form;

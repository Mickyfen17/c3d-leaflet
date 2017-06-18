import React from 'react';
import Alert from 'react-s-alert';

const Form = ({ addNewLocation }) => {

  const submitForm = (e, data) => {
    const { lat, lng, name } = data;
    e.preventDefault();

    if(validLat(lat) && validLng(lng) && name.length > 1) {
      addNewLocation(data);
      clearInputs(this);
    } else {
      Alert.error('Please enter a valid location name, Lat & Lng value');
    }
  }

  const clearInputs = (inputs) => {
    const { name, lat, lng } = inputs
    return [name, lat, lng].map(input => input.value = '');
  }

  const validLat = (lat) => {
    return isFinite(lat) && Math.abs(lat) <= 90;
  }

  const validLng = (lng) => {
    return isFinite(lng) && Math.abs(lng) <= 180;
  }

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
        onClick={(e) => submitForm(e, {
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


export default Form;

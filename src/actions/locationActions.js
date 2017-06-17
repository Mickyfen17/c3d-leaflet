require('isomorphic-fetch');


const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const storeNewLocation = (newLocation) => {
  return {
    type: 'SAVE_LOCATION',
    data: newLocation,
  };
};

const addNewLocation = (newLocation) => {
  return (dispatch) => {
    return fetch('/locations/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLocation)
    })
    .then(location => location.json())
    .then(json => dispatch(storeNewLocation(json)));
  };
};

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};


export { fetchAllLocations, addNewLocation }

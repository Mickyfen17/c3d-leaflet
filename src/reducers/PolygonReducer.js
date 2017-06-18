const initialState = {
  polygonArray: [],
};

const PolygonLinks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POLY_LINK':
      return Object.assign({}, state, {
        polygonArray: state.polygonArray.concat([action.data]),
      });

    case 'REMOVE_POLY_LINK' :
      const filteredPolys = state.polygonArray.filter(latLng =>
        JSON.stringify(action.data) !== JSON.stringify(latLng))
        return Object.assign({}, state, {
          polygonArray: filteredPolys,
        });

    default:
      return state;
  }
};

export default PolygonLinks;

const addPolygonLink = (location) => {
  return {
    type: 'ADD_POLY_LINK',
    data: location,
  };
};

const removePolygonLink = (location) => {
  return {
    type: 'REMOVE_POLY_LINK',
    data: location,
  };
};

export { addPolygonLink, removePolygonLink }
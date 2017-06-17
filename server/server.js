const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Get all users
const initialLocations = [
  {
    id: 'id1',
    name: 'Denver',
    lat: 39.742043,
    lng: -104.991531,
  },
  {
    id: 'id2',
    name: 'LA',
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    id: 'id3',
    name: 'Boston',
    lat: 42.364506,
    lng: -71.038887,
  },
];

app.locals.idIndex = 3;
app.locals.locations = initialLocations;

app.get('/locations', (request, response) => response.send({ locations: app.locals.locations }));

app.post('/locations/new', (request, response) => {
  const validLocation = ['name', 'lat', 'lng'].every(value => request.body[value]);

  if(!validLocation) response.status(422).send({ error: 'Missing content from location form' });

  const newLocation = Object.assign({}, { id: `id${app.locals.locations.length + 1}`}, request.body);
  app.locals.locations = app.locals.locations.concat(newLocation);
  response.send(newLocation);
})

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});

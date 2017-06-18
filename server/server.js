const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const promise = require('bluebird');

const options = {
  promiseLib: promise,
};
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/c3d';
const db = pgp(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/api/locations', (request, response) => {
  db.any('SELECT * FROM locations')
  .then(locations => {
    response.status(200).json(locations)
  })
  .catch(error => {
    response.status(500).send({ error });
  });
});

app.post('/api/locations/new', (request, response) => {
  const validLocation = ['name', 'lat', 'lng'].every(value => request.body[value]);

  if(!validLocation) response.status(422).send({ error: 'Missing content from location form' });

  db.one('INSERT INTO locations(name, lat, lng)' + 'VALUES(${name}, ${lat}, ${lng}) RETURNING *', request.body)
  .then(newLocation => {
    response.status(200).json( newLocation )
  })
  .catch((error) => {
    response.status(500).send({ error });
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});

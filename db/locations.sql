DROP DATABASE IF EXISTS c3d;
CREATE DATABASE c3d;

\c c3d;

CREATE TABLE locations (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  lat DECIMAL(8,6) NOT NULL,
  lng DECIMAL(9,6) NOT NULL
);

INSERT INTO locations (name, lat, lng)
  VALUES ('Denver', 39.742043, -104.991531);

INSERT INTO locations (name, lat, lng)
  VALUES ('LA', 34.052235, -118.243683);

INSERT INTO locations (name, lat, lng)
  VALUES ('Boston', 42.364506, -71.038887);
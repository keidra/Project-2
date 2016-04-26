DROP DATABASE IF EXISTS reports;
CREATE DATABASE reports;

\c reports;

CREATE TABLE quality (
  ID SERIAL PRIMARY KEY,
  location VARCHAR,
  url VARCHAR,
 );

INSERT INTO quality (location, url)
  VALUES ('Seattle', 'www.awebsite.com');
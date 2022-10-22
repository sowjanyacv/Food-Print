CREATE DATABASE foodprintapp;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(255),
email VARCHAR(255),
user_password VARCHAR(255)
);
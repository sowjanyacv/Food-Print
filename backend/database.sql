CREATE DATABASE foodprintapp;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE,
email VARCHAR(255) UNIQUE,
user_password VARCHAR(255),
points INT DEFAULT 0
);

CREATE TABLE receipts(
id SERIAL PRIMARY KEY,
user_id INT NOT NULL REFERENCES users(id),
food_log VARCHAR(255),
score VARCHAR(255),
reminder VARCHAR,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


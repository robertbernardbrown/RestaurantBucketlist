DROP DATABASE IF EXISTS restaurants_db;
CREATE DATABASE restaurants_db;
USE restaurants_db;

CREATE TABLE restaurants (
	id int NOT NULL AUTO_INCREMENT,
	restaurant VARCHAR(255) NOT NULL,
	visited BOOL NOT NULL,
	PRIMARY KEY (id)
);
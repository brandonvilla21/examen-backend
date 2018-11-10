CREATE DATABASE control_escolar;

CREATE TABLE control_escolar.professor(
id_professor INT NOT NULL AUTO_INCREMENT,
name VARCHAR (50),
lastname_p VARCHAR(50),
lastname_m VARCHAR(50),
teaching VARCHAR(60),
PRIMARY KEY (id_professor)
);

CREATE TABLE control_escolar.student(
no_control INT NOT NULL AUTO_INCREMENT,
id_carrer INT NOT NULL,
name VARCHAR(60),
lastname_p VARCHAR(50),
lastname_m VARCHAR(50),
PRIMARY KEY (no_control),
FOREIGN KEY (id_carrer) REFERENCES carrer(id_carrer)
);

CREATE TABLE control_escolar.carrer(
id_carrer INT NOT NULL AUTO_INCREMENT,
description VARCHAR(60),
PRIMARY KEY (id_carrer)
);

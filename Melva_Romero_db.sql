CREATE DATABASE melva_romero_db;
USE melva_romero_db;

CREATE TABLE carreras(
idCarrera INT NOT NULL AUTO_INCREMENT,
nombreCarrera VARCHAR(45) NOT NULL,
numeroClases INT NOT NULL,
PRIMARY KEY (idCarrera)
);

CREATE TABLE alumnos(
idAlumno INT NOT NULL AUTO_INCREMENT,
fkCarrera INT NOT NULL,
nombres VARCHAR(45) NOT NULL,
apellidos VARCHAR(45) NOT NULL,
celular INT NOT NULL,
sexo VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
PRIMARY KEY(idAlumno),
FOREIGN KEY (fkCarrera) references carreras(idCarrera)
);

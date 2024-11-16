-- Crear la base de datos
CREATE DATABASE medical_appointments;

-- Usar la base de datos
\c medical_appointments;

-- Crear tablas
CREATE TABLE specialty (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE doctor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    specialty_id INT NOT NULL REFERENCES specialty(id)
);

CREATE TABLE patient (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE medicalappointment (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    hour TIME NOT NULL,
    patient_id INT NOT NULL REFERENCES patient(id),
    doctor_id INT NOT NULL REFERENCES doctor(id),
    UNIQUE (doctor_id, date, hour)
);

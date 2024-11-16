-- Insertar especialidades
INSERT INTO specialty (name) VALUES
('Medicina General'),
('Cardiología'),
('Urología'),
('Fisiología'),
('Pediatría');

-- Insertar médicos
INSERT INTO doctor (name, age, email, password, specialty_id) VALUES
('Dr. Juan Pérez', 45, 'juan.perez@hospital.com', 'hashed_password_1', 1),
('Dra. Ana López', 37, 'ana.lopez@hospital.com', 'hashed_password_2', 2),
('Dr. Carlos García', 50, 'carlos.garcia@hospital.com', 'hashed_password_3', 3),
('Dra. María Rodríguez', 32, 'maria.rodriguez@hospital.com', 'hashed_password_4', 4),
('Dr. Pedro Gómez', 41, 'pedro.gomez@hospital.com', 'hashed_password_5', 5);

-- Insertar pacientes
INSERT INTO patient (name, age, email, password) VALUES
('Paciente 1', 30, 'paciente1@example.com', 'hashed_password_6'),
('Paciente 2', 25, 'paciente2@example.com', 'hashed_password_7'),
('Paciente 3', 40, 'paciente3@example.com', 'hashed_password_8'),
('Paciente 4', 33, 'paciente4@example.com', 'hashed_password_9'),
('Paciente 5', 27, 'paciente5@example.com', 'hashed_password_10'),
('Paciente 6', 29, 'paciente6@example.com', 'hashed_password_11'),
('Paciente 7', 36, 'paciente7@example.com', 'hashed_password_12'),
('Paciente 8', 23, 'paciente8@example.com', 'hashed_password_13'),
('Paciente 9', 31, 'paciente9@example.com', 'hashed_password_14'),
('Paciente 10', 45, 'paciente10@example.com', 'hashed_password_15');

CREATE DATABASE always_music;

DROP TABLE IF EXISTS students;

CREATE TABLE students(
    rut VARCHAR PRIMARY KEY,
    name VARCHAR,
    course VARCHAR,
    level INT
);

INSERT INTO students (rut, name, course, level)
VALUES
    ('11111111-1', 'Juan Pérez', 'Guitarra', 2),
    ('22222222-2', 'María García', 'Batería', 3),
    ('33333333-3', 'Pedro Rodríguez', 'Canto', 1),
    ('44444444-4', 'Ana Martínez', 'Teoría Musical', 2),
    ('55555555-5', 'Luisa López', 'Piano', 3),
    ('66666666-6', 'Carlos Sánchez', 'Violín', 1),
    ('77777777-7', 'Laura Fernández', 'Flauta', 2),
    ('88888888-8', 'David Gómez', 'Trompeta', 3),
    ('99999999-9', 'Elena Ruiz', 'Armonía', 1),
    ('10101010-0', 'Sofía Torres', 'Composición', 2);


CREATE TABLE departamentos(dept_no int NOT NULL primary KEY,dnombre varchar(20),loc varchar(20));
CREATE TABLE profesores(NRP int PRIMARY KEY NOT NULL, nombre varchar(15), apellidos varchar(40), email varchar(50), fecha_alta date, dept_no int, FOREIGN key(dept_no) REFERENCES departamentos(dept_no));

insert INTO departamentos values(10, 'INFORMATICA', 'DESPA6');
insert INTO departamentos values(20, 'COMERCIO', 'DESPA7');
insert INTO departamentos values(30, 'ADMINISTRATIVO', 'DESPA8');
insert INTO departamentos values(40, 'FOL', 'DESPA5');

INSERT INTO PROFESORES VALUES(1, 'Luz','Martinez','luz.martinez@iesabastos.org', '01/01/1990', 10);
INSERT INTO PROFESORES VALUES(2, 'Cristina','Ausina','c.ausina@iesabastos.org', '01/02/1990', 10);
INSERT INTO PROFESORES VALUES(3, 'Inma','Cabanes','i.cabanes@iesabastos.org', '01/03/1990', 10);
INSERT INTO PROFESORES(NRP, nombre, apellidos, email, dept_no) VALUES(4, 'Mercedes','Sanchez','m.sanchez@iesabastos.org', 40);



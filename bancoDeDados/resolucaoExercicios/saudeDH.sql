-- Para criar o bd
create database saudeDH;
-- Para usar o bd
use saudeDH;

-- Para criar a tabela
create table pacientes(
paciente_id INT primary key auto_increment,
paciente_idsaude INT(11),
paciente_nome varchar(50),
paciente_sobrenome varchar(100) 
);

create table medicos(
medico_id INT primary key auto_increment,
medico_nome varchar(40),
medico_sobrenome varchar(100),
medico_especialidade INT(11) 
);

create table consultas(
consulta_id INT primary key auto_increment,
paciente INT(11),
medico INT(11),
data_consulta DATE,
hora_consulta TIME 
);

create table especialidades(
especialidade_id INT primary key auto_increment,
especialidade_nome varchar(100)
);

-- Para criar a chave estrangeira

ALTER TABLE consultas 
ADD CONSTRAINT `fk_consulta` FOREIGN KEY ( `paciente` ) REFERENCES `pacientes` ( `paciente_id` ) ;
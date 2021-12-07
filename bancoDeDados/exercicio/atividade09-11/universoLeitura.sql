USE universoleitura;

INSERT into associados ()
values (default,1234567,'Murilo', 'Silva','Rua AS','Apucarana', 'PR'),
(default,1234567,'Gustavo', 'Felipe','Rua AS','Jaraguá do Sul', 'SC'),
(default,1234567,'Guilherme', 'Mello','Rua AS','São Paulo', 'SP'),
(default,1234567,'Adilane', 'Pereira','Rua AS','Salvador', 'BA'),
(default,1234567,'Allan', 'Cardoso','Rua AS','Rio de Janeiro', 'RJ');

INSERT into telefones()
values (default,1122222222,1),
(default,1122222222,2),
(default,1122222222,3),
(default,1122222222,4),
(default,1122222222,5),
(default,1122222222,1),
(default,1122222222,2),
(default,1122222222,3);

INSERT into autores()
values (default,'Coutinho','Jorge');

INSERT into editoras()
values (default,'Concreta1',1122222222),
(default,'Concreta2',1122222222),
(default,'Concreta3',1122222222);

INSERT into livros()
values (default, 1234567891234,'Monte Castelo1',2000,1,2001,1),
(default, 1234567891234,'Monte Castelo2',2001,1,2002,1),
(default, 1234567891234,'Monte Castelo3',2002,1,2003,2),
(default, 1234567891234,'Monte Castelo4',2003,1,2004,2),
(default, 1234567891234,'Monte Castelo5',2003,1,2005,3);

INSERT into exemplares()
values(default,1,0),
(default,2,1),
(default,3,0),
(default,4,1),
(default,5,0);

INSERT into emprestimos()
values(default,1,2021-06-20,2021-07-20,2021-06-20),
(default,1,2021-06-20,2021-07-20,2021-06-20),
(default,1,2021-06-20,2021-07-20,2021-06-20);

INSERT into emprestimos_exemplares()
values(default,1,1),
(default,1,2),
(default,1,3);
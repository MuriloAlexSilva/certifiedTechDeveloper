USE EMARKET;

-- EXEMPLO DE JOINS

-- O JOIN ---------- MELHORA A PERFORMANCE DO BANCO DE DADOS

-- REPRESENTAÇÕES 1:1
USE FILMES_DB;

SELECT
F.TITULO AS 'NOME DO FILME',
G.NOME AS 'GENERO DO FILME'
FROM FILMES AS F
INNER JOIN GENEROS AS G 
ON G.ID = F.GENERO_ID;

-- REPRESENTAÇÕES 1:N

SELECT 
S.TITULO AS 'NOME DA SERIE',
T.TITULO 'TEMPORADAS',
T.NUMERO
FROM  SERIES AS S
INNER JOIN TEMPORADAS AS T
ON T.SERIE_ID = S.ID;

-- REPRESENTAÇÕES N:N

SELECT 
F.TITULO AS 'NOME DO FILME',
A.NOME AS 'NOME DO ATOR'
FROM FILMES AS F
INNER JOIN ATOR_FILME AS AF ON AF.MOVIE_ID = F.ID
INNER JOIN ATORES AS A ON A.ID = AF.ATOR_ID;



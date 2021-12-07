USE Projeto_Spotify;

-- TB_ASSOCIADO - PREFIXO DE TABELAS
-- TB_VENDEDOR - PREFIXO DE TABELAS

SELECT
	*
FROM playlist;

-- SINTAXE DE CRIAÇÃO DA VIEW
-- CREATE VIEW [NOME_DA_VIEW] AS (
-- 	SELECT
-- 		...
-- 	FROM BLABLA;
-- );

-- PRIMEIRO PASSO - MONTAR O SELECT DA VIEW, RESPONSÁVEL POR RETORNAR OS DADOS
SELECT
	usu.Nomeusuario,
    pl.idPlaylist,
    pl.titulo
FROM usuario usu
INNER JOIN playlist pl ON pl.idusuario = usu.idUsuario
ORDER BY
	usu.Nomeusuario;

-- SEGUNDO PASSO - CONSTRUIR A VIEW
CREATE VIEW VW_USUARIO_PLAYLIST AS (
	SELECT
		usu.Nomeusuario,
		pl.idPlaylist,
		pl.titulo
	FROM usuario usu
	INNER JOIN playlist pl ON pl.idusuario = usu.idUsuario
	ORDER BY
		usu.Nomeusuario
);

-- TERCEIRO - TESTAR A VIEW
SELECT
	*
FROM VW_USUARIO_PLAYLIST VW
INNER JOIN playlistxcancao plxca ON plxca.idPlaylist = VW.idPlaylist
INNER JOIN cancao c ON c.idcancao = plxca.Idcancao;

SELECT
	*
FROM playlistxcancao;

-- EXERCÍCIO GUIADO
USE EMarket;
-- 1.1
CREATE VIEW VW_DETALHES_ENVIO AS (
	SELECT
		FaturaId AS ID_FATURA,
        DATE_FORMAT(DataFatura, "%d/%m/%y") AS DATA_FATURA,
        DATE_FORMAT(DataEnvio, "%d/%m/%y") AS DATA_ENVIO,
        FORMAT(Transporte, 2) AS TRANSPORTE,
        CONCAT(EnderecoEnvio, ", ", CidadeEnvio, ", ", CodigoPostalEnvio, ", ", PaisEnvio) AS DESTINO
	FROM Faturas		
);

-- 1.2
SELECT
	corr.Empresa, DET.ID_FATURA
FROM Correios corr
INNER JOIN Faturas fat on fat.FormaEnvio = corr.CorreioID
INNER JOIN VW_DETALHES_ENVIO DET ON DET.ID_FATURA = fat.FaturaID;

-- 2.1
CREATE VIEW VW_PRODUTOS_ESTOQUE AS (
	SELECT
		cat.CategoriaNome AS NOME_CATEGORIA,
        prod.ProdutoID AS ID_PRODUTO,
        prod.ProdutoNome AS NOME_PRODUTO,
        prod.PrecoUnitario AS PRECO_UNITARIO
	FROM Categorias cat
    LEFT JOIN Produtos prod ON cat.CategoriaID = prod.CategoriaID
    WHERE
		UnidadesEstoque > 0
);

-- 2.2
SELECT
	PROD.*
FROM DetalheFatura det
LEFT JOIN VW_PRODUTOS_ESTOQUE PROD ON PROD.ID_PRODUTO = det.ProdutoID;
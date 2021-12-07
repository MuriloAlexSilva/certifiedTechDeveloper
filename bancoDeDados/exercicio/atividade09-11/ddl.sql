 -----------------------------------------------------
-- Schema UniversoLeitura
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema UniversoLeitura
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `UniversoLeitura` DEFAULT CHARACTER SET utf8 ;
USE `UniversoLeitura` ;

-- -----------------------------------------------------
-- Table `UniversoLeitura`.`ASSOCIADOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`ASSOCIADOS` (
  `codId` INT NOT NULL AUTO_INCREMENT,
  `rg` CHAR(7) NULL,
  `nome` VARCHAR(50) NULL,
  `sobrenome` VARCHAR(50) NULL,
  `endereco` VARCHAR(150) NULL,
  `cidade` VARCHAR(50) NULL,
  `estado` VARCHAR(2) NULL,
  PRIMARY KEY (`codId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`TELEFONES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`TELEFONES` (
  `telefoneId` INT NOT NULL AUTO_INCREMENT,
  `telefone_socio` VARCHAR(100) NULL,
  `codAssoc` INT NULL,
  PRIMARY KEY (`telefoneId`),
  CONSTRAINT `fk_telefones_associados`
    FOREIGN KEY (`codAssoc`)
    REFERENCES `UniversoLeitura`.`ASSOCIADOS` (`codId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`AUTORES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`AUTORES` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `sobrenome` VARCHAR(100) NULL,
  `nome` VARCHAR(100) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`EDITORAS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`EDITORAS` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `razao_social` VARCHAR(150) NULL,
  `telefone` VARCHAR(100) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`LIVROS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`LIVROS` (
  `cod` INT NOT NULL AUTO_INCREMENT,
  `cod_isbn` VARCHAR(13) NULL,
  `titulo` VARCHAR(200) NULL,
  `ano_criacao` DATE NULL,
  `cod_autor` INT NULL,
  `ano_publicacao` DATE NULL,
  `cod_editora` INT NULL,
  PRIMARY KEY (`cod`),
  CONSTRAINT `fk_livros_autores`
    FOREIGN KEY (`cod_autor`)
    REFERENCES `UniversoLeitura`.`AUTORES` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_editoras`
    FOREIGN KEY (`cod_editora`)
    REFERENCES `UniversoLeitura`.`EDITORAS` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`EMPRESTIMOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`EMPRESTIMOS` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `codAssoc` INT NULL,
  `data` DATE NULL,
  `prazo_devolucao` DATE NULL,
  `data_devolucao` DATE NULL,
  PRIMARY KEY (`codigo`),
  CONSTRAINT `fk_emprestimos_associados`
    FOREIGN KEY (`codAssoc`)
    REFERENCES `UniversoLeitura`.`ASSOCIADOS` (`codId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`EXEMPLARES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`EXEMPLARES` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `cod_livro` INT NULL,
  `sinistro` TINYINT(1) NULL,
  PRIMARY KEY (`codigo`),
  CONSTRAINT `fk_exemplares_livros`
    FOREIGN KEY (`cod_livro`)
    REFERENCES `UniversoLeitura`.`LIVROS` (`cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`EMPRESTIMOS_EXEMPLARES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`EMPRESTIMOS_EXEMPLARES` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `cod_emprestimo` INT NULL,
  `cod_exemplar` INT NULL,
  PRIMARY KEY (`codigo`),
  CONSTRAINT `fk_emprestimosExemplares_emprestimos`
    FOREIGN KEY (`cod_emprestimo`)
    REFERENCES `UniversoLeitura`.`EMPRESTIMOS` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_emprestimosExemplares_exemplares`
    FOREIGN KEY (`cod_exemplar`)
    REFERENCES `UniversoLeitura`.`EXEMPLARES` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



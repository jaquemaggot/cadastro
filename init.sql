CREATE DATABASE CADASTRO;

USE CADASTRO;

CREATE TABLE USUARIOS(
    ID_USER INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(200) NOT NULL,
    EMAIL VARCHAR(200) NOT NULL UNIQUE,
    SENHA VARCHAR(250) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE PRODUTOS(
    ID_PROD INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(250) NOT NULL,
    DESCRICAO VARCHAR(500) NOT NULL,
    PRECO DECIMAL(10,2) NOT NULL,
    ID_USER INT NOT NULL,
    FOREIGN KEY (ID_USER) REFERENCES USUARIOS(ID_USER)
)ENGINE=InnoDB;

CREATE TABLE IMAGENS( 
  ID_IMG INT AUTO_INCREMENT PRIMARY KEY, 
  NOME VARCHAR(250) NOT NULL, 
  URL VARCHAR(250) NOT NULL,
  ID_PROD INT NOT NULL, 
  FOREIGN KEY (ID_PROD) REFERENCES PRODUTOS(ID_PROD) 
)ENGINE=InnoDB;
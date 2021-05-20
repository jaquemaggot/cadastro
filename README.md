# Projeto
> Cadastro

## Indíce
* [Informação](#informação)
* [Requisitos](#requisitos)
* [Inicio](#inicio)
* [Ambiente](#ambiente)
* [Arquitetura de pastas](#arquitetura-de-pastas)
* [Instalação](#instalação)
* [Rotas](#rotas)

## Informação
Projeto para cadastro de produtos com imagens

## Requisitos
* [Node 14.16.1](https://nodejs.org/en/)
* [mysql 5.7.25](https://www.mysql.com/)

## Inicio
Para iniciar as configurações clone o projeto

### Criar tabela no Banco de Dados
```sh
executar o script init.sql no banco de dados Mysql
```

## Ambiente
Configure as variáveis de ambiente:
* Use um arquivo `.env`: **(Use o arquivo .env.example como referência)**
* Deixe no arquivo .env apenas as informações que estão sendo passadas, caso não esteja passando todas apague a linha

| Nome                           | Descrição                                                     | Valor Padrao | Obrigatorio |
|--------------------------------|---------------------------------------------------------------|--------------|-------------|
| MYSQL_USER                     | Usuario do Mysql                                              |              | &check;     |
| MYSQL_PASSWORD                 | Senha do usuario do Mysql                                     |              | &check;     |
| MYSQL_HOST                     | Host do Mysql                                                 |              | &check;     |
| MYSQL_DATABASE                 | Database do Mysql                                             |              | &check;     |
| MYSQL_CONNECTION_LIMIT         | Quantidade de conexoes simultaneas do Mysql                   |      1       |             |
| JWT_SECRET                     | Chave JWT                                                     |              | &check;     |

## Arquitetura de pastas
### Diretórios
```bash
cadastro
  |-- app
    |-- config
      dbconnection.js
      server.js
    |-- controller
    |-- middleware
    |-- repository
    |-- routes
    |-- service
    |-- utils
      mysql.js
    app.js
  README.md
  package.json
  .env
  .gitignore
  init.sql	
```

## Instalação

Acessar a pasta raiz do projeto:

**Instalar as dependências:**

```sh
npm i
```

**Executar o projeto:**

```sh
npm start
```

## Rotas


**Para testar as rotas utilize Insomnia ou Postman
```bash
POST - /user/ -> Realiza o cadastro de um novo usuario
GET  -/user/ -> Listagem de usuarios cadastrados
```
```bash
POST - /login/ -> Realiza o login do usuario
```
```bash
POST - /prod/ -> Realiza o cadastro de um novo produto
GET - /prod/  -> Lista todos os produtos com suas respectivas imagens
DELETE - /prod/:id -> Realiza a exclusão de um produto e suas respectivas imagens
```

**Collection Postman com todas as rotas
https://www.getpostman.com/collections/b540f6a242d761bb6f34
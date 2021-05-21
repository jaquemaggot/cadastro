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
[Postman Collection](https://www.getpostman.com/collections/b540f6a242d761bb6f34)


**Para acessar as rotas é necessario estar autenticado**
* Informar o **Authorization** no **headers** de toda requisição, exceto as rotas de cadastro de usuario e login
```bash
Authorization: "token"
```

### Usuarios
* GET - /user -> Lista de usuarios
* POST - /user -> Cadastro de usuario
```json
{
  "nome": "nome-usuario", // Limite de 200 caracteres
  "email": "email-usuario@email.com", // Limite de 200 caracteres
  "senha": "senha-usuario" // Limite de 250 caracteres
}
```

### Login
* POST - /login -> Login do usuario
```json
{
  "email": "email-usuario@email.com",
  "senha": "senha-usuario"
}
```

### Produto
* GET - /prod -> Lista os produtos com suas respectivas imagens
* DELETE - /prod/:id -> Exclusão de um produto pelo id e suas respectivas imagens
* POST - /prod -> Cadastro do produto e suas imagens (no maximo 3) - **Body no formato form-data**
```bash
  "nome": "produto", // Limite de 250 caracters
  "descricao": "descricao do produto", // Limite de 500 caracters
  "preco": 10.50, // Numerico com 2 casas decimais
  "image1": "arquivo1" // File
  "image2": "arquivo2" // File
  "image3": "arquivo3" // File
```

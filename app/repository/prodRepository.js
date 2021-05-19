//Importando Banco
var mysql = require('../utils/mysql');

module.exports = {
    cadastroprod,
    listarprod
}

async function cadastroprod(cadastro){
    await mysql.executeQuery('INSERT INTO PRODUTOS SET ?', cadastro);
}

async function listarprod(cadastro){
    return await mysql.executeQuery('SELECT * FROM PRODUTOS', cadastro);
}
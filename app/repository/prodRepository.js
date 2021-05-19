//Importando Banco
var mysql = require('../utils/mysql');

module.exports = {
    cadastroprod
}

async function cadastroprod(cadastro){
    await mysql.executeQuery('INSERT INTO PRODUTOS SET ?', cadastro);
}
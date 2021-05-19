//Importando Banco
var mysql = require('../utils/mysql');

module.exports = {
    cadastrouser
}

async function cadastrouser(cadastro){
    await mysql.executeQuery('INSERT INTO USUARIOS SET ?', cadastro);
}
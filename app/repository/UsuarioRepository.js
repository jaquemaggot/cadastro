//Importando Banco
var mysql = require('../utils/mysql');

module.exports = {
    listar,
    inserir,
    buscarPorEmailESenha,
    buscarPorEmail,
}

async function listar() {
    return await mysql.executeQuery('SELECT id_user, nome, email FROM USUARIOS');
}
  
async function inserir(usuario){
    await mysql.executeQuery('INSERT INTO USUARIOS SET ?', usuario);
}

async function buscarPorEmailESenha(usuario) {
    return await mysql.executeQuery('SELECT id_user, nome, email FROM USUARIOS WHERE email LIKE ? AND senha = ?', [usuario.email, usuario.senha]);
}

async function buscarPorEmail(email) {
    return await mysql.executeQuery('SELECT id_user, nome, email FROM USUARIOS WHERE email LIKE ?', [email]);
}


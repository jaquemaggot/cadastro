const mysql = require('../utils/mysql')

module.exports = {
  inserir,
  deletarPorIdProduto
}

async function inserir(imagem) {
  await mysql.executeQuery('INSERT INTO imagens SET ?', imagem);
}

async function deletarPorIdProduto(id_prod) {
  await mysql.executeQuery('DELETE FROM imagens WHERE id_prod = ?', [id_prod]);
}
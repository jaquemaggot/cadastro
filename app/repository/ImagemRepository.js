const mysql = require('../utils/mysql')

module.exports = {
  inserir,
  deletarPorIdProduto,
  listarPorIdProduto
}

async function inserir(imagem) {
  await mysql.executeQuery('INSERT INTO IMAGENS SET ?', imagem);
}

async function deletarPorIdProduto(id_prod) {
  await mysql.executeQuery('DELETE FROM IMAGENS WHERE id_prod = ?', [id_prod]);
}

async function listarPorIdProduto(id_prod) {
  return await mysql.executeQuery('SELECT * FROM IMAGENS WHERE id_prod = ?', [id_prod]);
}
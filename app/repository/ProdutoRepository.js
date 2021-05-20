//Importando Banco
var mysql = require('../utils/mysql');

module.exports = {
    listar,
    inserir,
    deletar
}

async function inserir(produto){
    const result = await mysql.executeQuery('INSERT INTO PRODUTOS SET ?', produto);
    return result.insertId;
}

async function listar(){
    //JSON_ARRAYAGG (TRANSFORMA OS DADOS EM JSON)
    return await mysql.executeQuery(`
    SELECT
	      p.id,
        p.nome,
        p.descricao,
        p.preco,
        (select JSON_ARRAYAGG(
		      JSON_OBJECT('id', id, 'nome', nome, 'url', url)) FROM imagens i where i.id_produto = p.id
        ) as imagens
      FROM teste.produtos p
  `);
}

async function deletar(id){
    await mysql.executeQuery('DELETE FROM produtos WHERE id = ?', [id]);
}
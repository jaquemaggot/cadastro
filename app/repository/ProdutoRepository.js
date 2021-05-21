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
	    p.id_prod,
        p.nome,
        p.descricao,
        p.preco,
        (select JSON_ARRAYAGG(
		    JSON_OBJECT('id', id_img, 'nome', nome, 'url', url)) FROM IMAGENS i where i.id_prod = p.id_prod
        ) as IMAGENS
    FROM PRODUTOS p
  `);
}

async function deletar(id_prod){
    await mysql.executeQuery('DELETE FROM PRODUTOS WHERE id_prod = ?', [id_prod]);
}
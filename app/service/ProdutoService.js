const repository = require('../repository/ProdutoRepository');
const imagemRepository = require('../repository/ImagemRepository');

module.exports = {
  inserirImagens,
  rollback
}

async function inserirImagens(idProduto, files) {
  const quantidadeImg = Object.keys(files).length;

  if(quantidadeImg === 0)
    return

  if(quantidadeImg > 3) {
    throw new Error('So pode informar ate 3 imagens');
  }

  for(const img in files) {
    const image = {
      nome: files[img].name,
      url: `http://localhost:3000/${files[img].path}`,
      id_prod: idProduto
    }

    await imagemRepository.inserir(image);
  }
}

async function rollback(idProduto) {
  try {
    await imagemRepository.deletarPorIdProduto(idProduto);
    await repository.deletar(idProduto);
  } catch(error) { 
    console.log('error on rollback', error);
  }
}
const repository = require('../repository/ProdutoRepository');
const imagemRepository = require('../repository/ImagemRepository');
const fs = require('fs');
const path = require('path');

module.exports = {
  inserirImagens,
  deletar,
  removerImagem
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
      url: `http://localhost:3000/${files[img].path.replace('\\','/')}`,
      id_prod: idProduto
    }
    await imagemRepository.inserir(image);
  }
}

async function deletar(idProduto) {
  const imagens = await imagemRepository.listarPorIdProduto(idProduto);
  removerImagem(imagens);
  await imagemRepository.deletarPorIdProduto(idProduto);
  await repository.deletar(idProduto);
}

function removerImagem(imagens) {
  //Se existir remova;
  for(let img of imagens){
    const nomeImg = img.URL.split('/')[4];
    const pathImg = path.resolve(__dirname,'../../public/',nomeImg);

    if(fs.existsSync(pathImg)){
      fs.unlinkSync(pathImg);
    }
  }
}
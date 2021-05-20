const repository = require('../repository/ProdutoRepository');
const imagemRepository = require('../repository/ImagemRepository');
const service = require('../service/ProdutoService');

//Funções que serão exportadas para serem usadas em outros módulos.
module.exports = {
    listar,
    inserir,
    deletar
}
  
async function listar(req, res) {
    try {
      const produtos = await repository.listar();
      produtos.forEach(p => p.imagens = JSON.parse(p.imagens));
      res.json({ message: 'OK', produtos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
  
async function inserir(req, res) {
    let idProduto = null;
  
    try {
      req.body.id_usuario = req.user.id;
      idProduto = await repository.inserir(req.body);
      await service.inserirImagens(idProduto, req.files);
      res.json({ message: 'OK' });
    } catch (error) {
  
      if(idProduto) {
        await service.rollback(idProduto);
      }
  
      res.status(500).json({ error: error.message });
    }
}
  
async function deletar(req, res) {
    try {
      await imagemRepository.deletarPorIdProduto(req.params.id);
      await repository.deletar(req.params.id);
      res.json({ message: 'OK' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
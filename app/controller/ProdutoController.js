const produtoRepository = require('../repository/ProdutoRepository');
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
      const produtos = await produtoRepository.listar();
      produtos.forEach(p => p.imagens = JSON.parse(p.imagens));
      res.json({ message: 'OK', produtos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
  
async function inserir(req, res) {
    let id_prod = null;
  
    try {
      req.body.id_user = req.user.id_user;
      id_prod = await produtoRepository.inserir(req.body);
      await service.inserirImagens(id_prod, req.files);
      res.json({ message: 'OK' });
    } catch (error) {
  
      if(id_prod) {
        try{
          await service.deletar(id_prod)
        }catch(ex){}
      }
      res.status(500).json({ error: error.message });
    }
}
  
async function deletar(req, res) {
    try {
      await service.deletar(req.params.id)
      res.json({ message: 'OK' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
const repository = require('../repository/UsuarioRepository');
const crypto = require('crypto');

module.exports = {
  listar,
  inserir
}

async function listar(req, res) {
  try {
    const usuarios = await repository.listar();
    res.json({ message: 'OK', usuarios });
  } catch (errro) {
    res.status(500).json({ error: error.message });
  }
}

async function inserir(req, res) {
  try {
    req.body.senha = crypto.createHash('md5').update(req.body.senha).digest('hex');
    await repository.inserir(req.body);
    res.json({ message: 'OK' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
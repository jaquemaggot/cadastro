const repository = require('../repository/UsuarioRepository');
const service = require('../service/LoginService');
const crypto = require('crypto');

module.exports = {
  login
}

async function login(req, res) {
  try {
    //Criptografando a senha para MD5, Utilizando a função Crypto
    req.body.senha = crypto.createHash('md5').update(req.body.senha).digest("hex");
    
    const usuario = await repository.buscarPorEmailESenha(req.body);

    //Se não encontrar o usuario
    if(!usuario[0])
      return res.status(404).json({ message: 'Usuario nao encontrado' }
    )
    //Gerando o Token para ser usado durante a requisição
    const token = service.gerarToken(usuario[0]);
    res.json({ message: 'OK', usuario: usuario[0], token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const repository = require('../repository/UsuarioRepository');
const jwt = require('jsonwebtoken');

module.exports = auth;

async function auth(req, res, next) {
//Se o meotodo for publico, o fluxo segue para frente
if(isMetodoPublico(req.path, req.method)) {
  return next();
}
//Caso não tenha informado o token
if(!req.headers.authorization)
  return res.status(401).json({ message: 'Authorization nao informado' });

//Decodificando o token para validar se o usuario existe no sistema.
try {
  const tokenDecoded = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  const usuario = await repository.buscarPorEmail(tokenDecoded.usuario.email);
  //Não encontrou nenhum usuario
  if(!usuario[0]) {
    return res.status(401).json({ message: 'Sem permissao', error: 'Usuario nao encontrado' });
  }
  //libera o usuario e passa para frente.
  req.user = usuario[0];
  next();
  } catch(error) {
  return res.status(401).json({ message: 'Sem permissao', error: error.message });
  }
}

//Definindo os metodos que serão publicos na API
const metodosPublicos = [
  { path: '/login/', method: 'POST' },
  { path: '/user/', method: 'POST' }
]

//Função para validar se o metodo que chegou é o mesmo que definimos na const.
function isMetodoPublico(path, method) {
  return metodosPublicos.some(m => m.method == method & m.path == path);
}
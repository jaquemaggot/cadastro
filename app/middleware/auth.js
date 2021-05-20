const repository = require('../repository/UsuarioRepository');
const jwt = require('jsonwebtoken');

module.exports = auth;

async function auth(req, res, next) {
console.log('chegou no Middleware');

if(isMetodoPublico(req.path, req.method)) {
  console.log('chegou até metodos publicos');
  return next();
}

if(!req.headers.authorization)
  return res.status(401).json({ message: 'Authorization nao informado' });

try {
  const tokenDecoded = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  const usuario = await repository.buscarPorEmail(tokenDecoded.usuario.email);

  if(!usuario[0]) {
    return res.status(401).json({ message: 'Sem permissao', error: 'Usuario nao encontrado' });
  }

  req.user = usuario[0];
  next();
  } catch(error) {
  return res.status(401).json({ message: 'Sem permissao', error: error.message });
  }
}

const metodosPublicos = [
  { path: '/login', method: 'POST' },
  { path: '/user', method: 'POST' }
]

function isMetodoPublico(path, method) {
  console.log('chegou até metodos publicos');
  return metodosPublicos.some(m => m.method == method & m.path == path);
}
const jwt = require('jsonwebtoken');

module.exports = {
  gerarToken
}

function gerarToken(usuario) {
  const token = jwt.sign({ usuario }, process.env.JWT_SECRET, {
    expiresIn: 600 // expira em 10 minutos
  });

  return token;
}
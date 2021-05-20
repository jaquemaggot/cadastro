const jwt = require('jsonwebtoken');

module.exports = {
  gerarToken
}

function gerarToken(usuario) {
  const token = jwt.sign({ usuario }, process.env.JWT_SECRET, {
    expiresIn: 300 // expires in 5min
  });

  return token;
}
const repository = require('../repository/userRepository');
//const service = require('../service/UserService');

//Funções que serão exportadas para serem usadas em outros módulos.
module.exports = {
    cadastrouser
}
//Cadastrando User
async function cadastrouser(req, res) {
    try {
        await repository.cadastrouser(req.body);
        res.json({ message: 'OK' })
    } catch(error) {
        res.status(500).json({ error });
    }
}
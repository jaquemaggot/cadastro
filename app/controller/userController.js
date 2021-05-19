const repository = require('../repository/userRepository');

//Funções que serão exportadas para serem usadas em outros módulos.
module.exports = {
    cadastrouser
}
//Cadastrando Usuario
async function cadastrouser(req, res) {
    try {
        await repository.cadastrouser(req.body);
        res.json({ message: 'OK' })
    } catch(error) {
        res.status(500).json({ error });
    }
}
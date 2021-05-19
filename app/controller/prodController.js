const repository = require('../repository/prodRepository');

//Funções que serão exportadas para serem usadas em outros módulos.
module.exports = {
    cadastroprod,
    listarprod,
    deletarprod
}
//Cadastrando Produtos
//Utilizando uma função sincrona para cadastro de produtos
//Fazendo um tratativa de erros utilizando um Try Cath
async function cadastroprod(req, res) {
    try {
        await repository.cadastroprod(req.body);
        res.json({ message: 'OK' })
    } catch(error) {
        res.status(500).json({ error });
    }
}

async function listarprod(req, res) {
    try {
        const produtos = await repository.listarprod(req.query);
        res.json({ message: 'OK', produtos });
    } catch(error) {
        res.status(500).json({ error });
    }
}

async function deletarprod(req, res) {
    try {
        await repository.cadastroprod(req.body);
        res.json({ message: 'OK', produtos });
    } catch(error) {
        res.status(500).json({ error });
    }
}
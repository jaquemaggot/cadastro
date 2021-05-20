//Importando Express
const express = require('express');
const app = express();
const formData = require("express-form-data");
const authMiddleware = require('../middleware/auth');
const path = require('path');

// setando as variaveis de ambiente
require('dotenv').config({ path: path.join(__dirname, '../../.env') })

//fazendo a coxenão com o BD
require('./dbconnection');


//Informando que vamos usar .json e que o limite de dados é 50mb
app.use(express.json({limit: '50mb'}));

//Definindo que a pasta public será uma url static
app.use('/public', express.static('public'));

//Definindo o Diretorio de Upload das Arquivos(Imagens)
const options = { uploadDir: './public' }
app.use(formData.parse(options));

//Definindo que será utilizado um Middleware
app.use(authMiddleware);

//Importando Rotas
const userRoutes = require('../routes/UsuarioRoutes');
app.use('/user', userRoutes);
const prodRoutes = require('../routes/ProdutosRoutes');
app.use('/prod', prodRoutes);
const LoginRoutes = require('../routes/LoginRoutes');
app.use('/login',LoginRoutes)

//Informando em que porta vai rodar
app.listen(3000, () => {
    console.log('API ONLINE')
});

//Exportando os dados de app(server)
module.exports = app;
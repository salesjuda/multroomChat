/* importa o modulo do framework express */
var express = require('express');

/* importa o modulo consign */
var consign = require('consign');

/* importa o modulo body-parser */
var bodyParser = require('body-parser');

/* importa o modulo do express-validator */
var expressValidator = require('express-validator');

/* inicia o objeto do express */
var app = express();

/* setar as variaveis "view engine" e "views" do expres */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configura o middleware express.static */
app.use(express.static('./app/public'));

/* configura o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configura o middleware express-validator */
app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controlers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exporta o objeto app */
module.exports = app;
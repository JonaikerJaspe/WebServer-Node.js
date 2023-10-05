const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        titulo: 'Curso | Node.js',
        nombre: 'Joniker Jaspe'
    });
});
app.get('/generic', (req, res) => {

    res.render('generic', {
        titulo: 'Curso | Node.js',
        nombre: 'Joniker Jaspe'
    });
});
app.get('/elements', (req, res) => {

    res.render('elements', {
        titulo: 'Curso | Node.js',
        nombre: 'Joniker Jaspe'
    });
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
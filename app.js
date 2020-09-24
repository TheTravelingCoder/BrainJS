const express = require('express');
const pug = require('pug');
const app = express();
const PORT = process.env.PORT || 5000;

//Sets the view engine to pug
app.set('view engine', 'pug');

// Allows local CSS
app.use(express.static(__dirname + '/public'));

//Serves up index.pug
app.get('/', function (req, res) {
    res.render('index')
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
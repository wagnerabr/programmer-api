const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://wagner:BEbu0819!@cluster0.3blzh.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
//Aplicação entende o corpo do tipo JSON
app.use(express.json());
app.use(routes);

app.listen(3333);


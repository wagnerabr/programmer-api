const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
//Aplicação entende o corpo do tipo JSON
app.use(express.json());
app.use(routes);

app.listen(3333);


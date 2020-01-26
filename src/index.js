require('dotenv').config({ path: '../.env' });
const express = require('express');
const parser = require('body-parser');
const helmet = require('helmet');

const app = express();

app.use(parser.json()); // entender json
app.use(helmet());
app.use(parser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.send("ok");
});

require('./controllers/auth-controller')(app);      // repassa o objeto 'app' para o controller

app.use(3031); 
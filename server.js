//express web server
const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.emilyRoute);
app.get('/hannah', lesson1Controller.hannahRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web server listening on port ' + (process.env.port || port));
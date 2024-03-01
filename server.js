//express web server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Elias Muller');
});

const port = 3000;

app.listen(process.env.port || port);
console.log('Web server listening on port ' + (process.env.port || port));
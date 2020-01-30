const express = require('express');
const app = express();
const sendMail = require('./mail');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());

app.use("/public", express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.post('/email', (req, res) => {
    console.log('Data: ', req.body);
    sendMail(req.body.data.e, req.body.data.s, req.body.data.t)
    res.json({message: 'Message reçus !' });
});

app.listen(port, () => {
    console.log("App listen on port" + port);
})
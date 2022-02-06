const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const cors = require("cors");
const data = require('./data')

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/login', async (req, res) => {
    const signinUser = data.users(req.body.login, req.body.password)
    if (!signinUser) {
        res.status(401).send({
            message: "Invalid login or password!"
        })
    } else {
        res.send({
            login: signinUser.username,
        });
    }
    res.send();
});

app.get('/group/:username', function (req, res, next) {
    res.send(data.group(req.params.username));
});
app.get('/ranking/:username', function (req, res, next) {
    res.send(data.ranking(req.params.username));
});
app.get('/orders/:username', function (req, res, next) {
    res.send(data.offers(req.params.username));
});

app.get('/saledata/:username', function (req, res, next) {
    res.send(data.saleData(req.params.username));
});

app.listen(3001, function () {
    console.log('Listening at http://localhost:3001');
})
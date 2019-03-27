const express = require('express');

module.exports = function (app) {
    const router = express.Router();
    app.use(express.json());
    var idCounter = 1;
    router.post('/', function (req, res, next) {
        console.log(req.headers)
        console.log(req.body);
        res.set('ce-specversion', '0.2')
        res.set('ce-id', (idCounter++).toString())
        res.set('ce-type', 'com.example.test')
        res.send(req.body)
    });

    app.use(router);
}